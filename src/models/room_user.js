import { ModelBase } from "../app/db/modelBase";
class RoomUser extends ModelBase {
    room_id
    user_id
    card_id
    time_start
    time_end
}
RoomUser.init("room_user", {
    room_id: { type: "int(11)" },
    user_id: { type: "int(11)" },
    card_id: { type: "int(11)" },
    time_start: { type: "datetime" },
    time_end: { type: "datetime" },
    created_at: { allowNull: false, type: "datetime" },
    updated_at: { type: "datetime" },
    deleted_at: { type: "datetime" }
})
export { RoomUser }