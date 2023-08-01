import express from 'express'
import { isString } from 'lodash'
import multer from 'multer'

import { Log } from './Log'
import { checkToken } from './router/app/auth'
const fs = require('fs');
var storage = multer.diskStorage({

    destination: function (req, file, cb) {
        // cb(null, 'uploads')
        fs.mkdir('./uploads/', (err) => {
            cb(null, './uploads/');
        });
    },
    filename: function (req, file, cb) {
        Log.e('file: ', file)
        cb(null, `img${new Date().getTime()}_` + file.originalname)
    }
})
var upload1 = multer({ storage: storage })

export class RouterApp {
    static app
    constructor() {
        this.app = express()
    }
    group(prefix, links) {
        Object.entries(links).forEach(([link, config]) => {//class
            // console.log('config', config)
            // console.log('prefix', prefix)
            const [method, handle, very] = config
            let check = very === undefined ? true : very
            console.log('check', check)
            if (method == "post-file") {
                return this.app.route(prefix + '/' + link).post(upload1.array('file'), (req, res) => this.verify(req, new Res(res), check, handle))
            }
            return this.app.route(prefix + '/' + link)[method]((req, res) => this.verify(req, new Res(res), check, handle))
        })
    }
    async verify(req, res, very, handle) {
        // Log.d('verify', very)
        if (!very) return handle(req, res)
        // Log.d(' req.headers', req.headers)
        const token = req.headers?.authorization?.slice(7) || "";
        Log.d('token', token)
        if (isString(token) && token.length > 0) {
            const { status, data, message } = await checkToken(token)
            // Log.d('verify', very)
            if (status) {
                delete data?.password
                return handle(req, res, data)
            }
            return res.success(message)
        }
        else return res.failed('Token not found in authorization')
    }
    getSession() { }
}
class Res {
    res
    constructor(res) {
        this.res = res
    }
    success(message = 'Success!', data = null) {
        this.res.json({ status: true, message, data })
    }
    failed(message = 'Failed!', data = null) {
        this.res.json({ status: false, message, data })
    }
}
