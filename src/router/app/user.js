import { isString } from "lodash"
import { User } from "../../models/user"
import { UserRole } from "../../models/user_role"
import bcrypt from 'bcrypt'

export const getListUser = async (req, res) => {
    const data = await User.findArr({})
    res.success('Success!', data)
}
export const getDetailUser = async (req, res) => {
    const { id } = req.query
    if (id) {
        const data = await User.findId(id)
        return res.success('Success!', data)
    }
    return res.failed('Id not found')
}

export const createSubAdmin = async (req, res, { role }) => {
    try {
        if (role !== 'admin') return res.failed('Bạn không có quyền này')
        console.log('createSubAdmin')
        const { user_name, password } = req.body
        if (isString(user_name) && isString(password)) {
            let find = await User.findItem({ user_name })
            if (find) return res.failed('user_name đã tổn tại')
            let password_ = await bcrypt.hash(password, 10)
            console.log('password_', password_)
            const user = await User.create({ user_name, password: await bcrypt.hash(password, 10), role: 'sub-admin' })
            if (user) {
                delete user.password
                return res.success('Success!', user)
            }
            return res.failed('User.create failed')
        }
        return res.failed('user_name || password undefined')
    } catch (error) {
        res.failed(JSON.stringify(error))
    }

}
export const createRoom = async (req, res, user) => {
    try {

    } catch (error) {
        res.failed(JSON.stringify(error))
    }

}
/**
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */
export const addUser = async (req, res) => {
    const { full_name, phone, email } = req.body
    if (isString(email) && isString(full_name)) {
        const data = await User.create({ full_name, phone, email })
        res.success('Success!', data)
    }
    else res.failed('Failed!')
}
export const clearUserTable = async (req, res) => {
    try {
        await User.destroyAll({
            where: {}
        });
        console.log('All data deleted successfully.');
    } catch (error) {
        console.error('Error deleting data:', error);
    }
    res.success('Success!')
}

export const clearSubRoom = async (req, res) => {
    try {
        await User.destroyAll({
            where: {}
        });
        console.log('All data deleted successfully.');
    } catch (error) {
        console.error('Error deleting data:', error);
    }
    res.success('Success!')

}