import moment from "moment";
import { Room } from "../../models/room";
import { User } from "../../models/user";
import { UserToken } from "../../models/user_tokens";
import { v4 } from "uuid";
import { RoomUser } from "../../models/room_user";
import bcrypt from 'bcrypt'
import { isArray } from "lodash";
import { Log } from "../../Log";
import { Card } from "../../models/card";


export const createRoom = async (req, res, user) => {
    try {
        if (user.role !== 'sub-admin') return res.failed('Bạn không có quyền tạo phòng!')
        // if (user.role == "sub-admin") {
        const room = await Room.create({
            user_create: user.id,
            status: 0,
            count_user: 0
        })
        console.log('room', room);
        //create user-room
        let users = []
        for await (let item of [...new Array(3).keys()]) {
            let user_name = Math.floor(Math.random() * 1000000).toString()
            let password = await bcrypt.hash(user_name, 10)
            let user = await User.create({ user_name, password, role: 'client' })
            if (user) {
                let room_user = await RoomUser.create({ user_id: user.id, room_id: room.id })
            }

            delete user.password
            users.push(user)
        }

        if (room) return res.success('Success!', { ...room, users })
        return res.failed('Failed!')
    }
    catch (error) { return res.failed(JSON.stringify(error)) }
}
export const getRoomDetail = async (req, res,) => {
    try {
        const { id } = req.query
        if (id) {
            const room = await Room.findId(id)
            let users = []
            if (room) {
                let room_user = await RoomUser.findArr({ room_id: id })
                console.log('room_user', room_user);
                if (isArray(room_user)) users = room_user
                room.users = users
                return res.success('Success!', room)
            }
            else return res.failed('Id Room not found')
        }
        return res.failed('Id undefined')
    }
    catch (error) { return res.failed(JSON.stringify(error)) }
}
export const getMyRoom = async (req, res, user) => {
    try {
        Log.e('user', user)
        if (user?.role == 'client') {
            let room_user = await RoomUser.findItem({ user_id: user?.id })
            if (room_user) {
                let room = await Room.findId(room_user.room_id)
                return res.success("Success!", room)
            }
            return res.failed()
        }
        if (user?.role == 'sub-admin') {
            let rooms = await Room.findItem({ user_create: user?.id })
            return res.success("Success!", rooms)
        }
        if (user?.role == 'admin') {
            let rooms = await Room.findArr({})
            return res.success("Success!", rooms)
        }
    }
    catch (error) { return res.failed(JSON.stringify(error)) }
}
export const joinRoom = async (req, res, user) => {
    try {
        if (user?.role == 'client') {
            let room_user = await RoomUser.findItem({ user_id: user?.id })
            let card = await Card.findItem({ user_id: user?.id })

            console.log('room_user', room_user);
            console.log('card', card);
            if (room_user) {
                let room = await Room.findId(room_user.room_id)
                let count_user = room.count_user

                if (room_user.time_start == null) {
                    await RoomUser.findOneAndUpdate({ time_start: moment().format('YYYY-MM-DD HH:mm:ss') }, { id: room_user?.id })
                    if (count_user < 3) count_user = count_user + 1
                    console.log('count_user', count_user);
                    await Room.findOneAndUpdate({ count_user }, { id: room.id })
                }
                return res.success(`Đã vào phòng chơi số ${room.id} !`, { room: { ...room, count_user }, card, room_user })
            }
            return res.failed()
        }
        return res.failed("Bạn không phải khách chơi!")
    }
    catch (error) { return res.failed(JSON.stringify(error)) }
}

export const outRoom = async (req, res, user) => {
    try {
        if (user?.role == 'client') {
            let room_user = await RoomUser.findItem({ user_id: user?.id })
            if (room_user) {
                let room = await Room.findId(room_user.room_id)
                let count_user = room.count_user
                if (count_user > 0) count_user = count_user - 1
                let update_room = await Room.update({ count_user })
                return res.success("Success!", room)
            }
            return res.failed()
        }
        return res.failed("Bạn không phải khách chơi!")
    }
    catch (error) { return res.failed(JSON.stringify(error)) }
}
export const startRoom = async (req, res, user) => {
    try {
        if (user.role !== 'sub-admin') return res.failed('Bạn không có quyền bắt đầu chơi!')
        const { id } = req.body
        await Room.findOneAndUpdate({ status: 1 }, { id })
        const room = await Room.findId(id)
        return res.success("Success!", room)

    }
    catch (error) { return res.failed(JSON.stringify(error)) }
}
export const endRoom = async (req, res, user) => {
    try {
        if (user.role !== 'sub-admin') return res.failed('Bạn không có quyền bắt đầu chơi!')
        const { id } = req.body
        await Room.findOneAndUpdate({ status: 0 }, { id })
        const room = await Room.findId(id)
        return res.success("Success!", room)
    }
    catch (error) { return res.failed(JSON.stringify(error)) }
}