
import { isString, makeId } from "lodash";
import moment from "moment";
import { User } from "../../models/user"
import { UserRole } from "../../models/user_role";
import { UserToken } from "../../models/user_tokens";
const bcrypt = require('bcrypt')
var MD5 = require("crypto-js/md5");
const time_expired = 60
export const login = async (req, res) => {
    const { user_name, password } = req.body
    const client_id = req.headers?.client_id
    if (!isString(client_id)) return res.failed('Required ${client_id}')
    if (isString(user_name) && isString(password)) {
        const user = await User.findItem({ user_name })

        console.log('user', user, user_name);
        if (user) {
            let check = await bcrypt.compare(password, user.password)
            if (check) {
                let token = await genToken({ user_id: user.id })
                if (client_id) {
                    console.log('client_id', client_id, typeof client_id);
                    const user_token = await UserToken.findItem({ client_id: client_id, user_id: user.id })
                    console.log('user_token', user_token);
                    let expired = false
                    if (user_token) {
                        expired = new Date(user_token.time_expired).getTime() - new Date().getTime() > 0 ? true : false
                        if (expired == false) UserToken.del({ client_id, deleted_at: null })
                        if (expired) token = user_token.token
                    }
                    //
                    else {
                        let gen = UserToken.create({
                            user_id: user.id,
                            token,
                            client_id,
                            time_expired: moment().add("m", time_expired).format('YYYY-MM-DD HH:mm:ss')
                        })
                    }
                }
                console.log('token', token);
                delete user.password
                return res.success('Success', { ...user, token })
            }
            else return res.failed('password->false')
        }
        else return res.failed('User.findItem=null')
    }
    res.failed('user_name or password not string')
}

export const getInfo = async (req, res, data) => {
    res.success('getInfo', data)
}

const genToken = async ({ user_id }) => {
    const date = new Date().getTime();
    return await MD5(`${user_id}${date}`).toString();
}
export const checkToken = async (token) => {
    const client = await UserToken.findItem({ token })
    let expired = false
    if (client) {
        expired = new Date(client.time_expired).getTime() - new Date().getTime() > 0 ? true : false
        if (expired == false) {
            UserToken.del({ token, deleted_at: null })
            return { message: 'Phiên đăng nhập đã hết hạn', status: false }
        }
        if (expired) {
            let user = await User.findItem({ id: client.user_id })
            return { status: true, data: user }
        }
    }
    return { message: 'Token không được tìm thấy', status: false }
}
export const resetPass = async (req, res) => {
    const { user_id, password } = req.body
    res.success('resetPass')
}