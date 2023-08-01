import { ModelBase } from "../app/db/modelBase";

class User extends ModelBase {
  id
  user_name
  full_name
  phone
  email
  password
  role
  created_at
  updated_at
  deleted_at
}
User.init("user", {
  user_name: {
    type: "varchar(255)"
  },
  full_name: {
    type: "varchar(255)"
  },
  password: {
    type: "varchar(255)"
  },
  phone: {
    type: "varchar(255)"
  },
  email: {
    type: "varchar(255)"
  },
  role: {
    type: "varchar(255)"
  },
  created_at: {
    allowNull: false,
    type: "datetime"
  },
  updated_at: {
    type: "datetime"
  },
  deleted_at: {
    type: "datetime"
  }
})
export { User }