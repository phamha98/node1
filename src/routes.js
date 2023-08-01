'use strict'
import { createRoom, getRoomDetail, getMyRoom, joinRoom, startRoom, endRoom } from './router/app/room.js'
import { getInfo, login, resetPass } from './router/app/auth.js'
import { createSubAdmin, getDetailUser, getListUser } from './router/app/user.js'
import { addCard } from './router/app/card';
export function routes(route) {
  route.group('/auth', {
    login: ['post', login, false],
    getInfo: ['get', getInfo],
    resetPass: ['post', resetPass],
  })
  route.group('/user', {
    getDetailUser: ['get', getDetailUser],
    getListUser: ['get', getListUser],
    createSubAdmin: ['post', createSubAdmin],

  })
  route.group('/room', {
    createRoom: ['post', createRoom],
    getRoomDetail: ['get', getRoomDetail],
    getMyRoom: ['get', getMyRoom],
    joinRoom: ['get', joinRoom],
    startRoom: ['post', startRoom],
    endRoom: ['post', endRoom],
  })
  route.group('/card', {
    addCard: ['post-file', addCard],

  })
  // route.group('/room', {
  //   createRoom: ['post', createRoom ],
  //   startRoom: ['post', startRoom ],
  //   endRoom: ['post', endRoom ],
  //   listRoom: ['post', listRoom ],
  //   detailRoom: ['post', detailRoom ],
  //   removeUserRoom: ['post', removeUserRoom ],
  //   removeRoom: ['post', removeRoom ],
  // })
  // route.group('/card', {
  //   postCard: ['post', postCard ],
  //   updateCard: ['post', updateCard ],
  //   getMyCard: ['post', getMyCard ],
  //   getEndCard: ['post', getEndCard ],
  // })
}


