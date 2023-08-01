import { ModelBase } from "../app/db/modelBase";
class UserToken extends ModelBase {
  id
  user_id
  token
  client_id
  time_expired
  device
  created_at
  updated_at
  deleted_at
}
UserToken.init("user_tokens", {
  user_id: {
    type: "int(11)"
  },
  client_id: {
    type: "varchar(255)"
  },
  token: {
    type: "varchar(255)"
  },
  device: {
    type: "varchar(255)"
  },
  created_at: {
    allowNull: false,
    type: "datetime"
  },
  time_expired: {
    type: "datetime"
  },
  updated_at: {
    type: "datetime"
  },
  deleted_at: {
    type: "datetime"
  }
})

export { UserToken }