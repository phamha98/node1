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
export const addCard = async (req, res) => {
    try {

        //if(status==0)return res.failed("Vui lòng đợi chủ phòng để bắt đầu!")
        const files = req.files;
        const fileLinks = [];
        const prefix = 'http://' + req.hostname + ":" + process.env.SEVER_PORT
        files.forEach((file) => {
            const linkPath = prefix + `/uploads/${file.filename}`;
            fileLinks.push(linkPath);
        });
        res.success("Success!", fileLinks)
    }
    catch (error) { return res.failed(JSON.stringify(error)) }

}
export const updateCard = async () => { }