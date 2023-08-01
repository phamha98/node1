import { ModelBase } from "../app/db/modelBase";
class UserRole extends ModelBase {
  id
  user_id
  role
  created_at
  updated_at
  deleted_at
}
UserRole.init("user_role", {
  user_id: {
    type: "int(11)"
  },
  role: { type: "varchar(255)" },
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

export { UserRole }