import { ModelBase } from "../app/db/modelBase";
class Room extends ModelBase {
  user_create
  status
  count_user
  time_start
  time_end
}
Room.init("room", {
  user_create: { type: "int(11)" },
  count_user: { type: "int(11)" },
  status: { type: "int(11)" },
  time_start: { type: "datetime" },
  time_end: { type: "datetime" },
  created_at: { allowNull: false, type: "datetime" },
  updated_at: { type: "datetime" },
  deleted_at: { type: "datetime" }
})
export { Room }