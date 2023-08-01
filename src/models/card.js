import { ModelBase } from "../app/db/modelBase";

class Card extends ModelBase {
  user_id
  data
  created_at
  updated_at
  deleted_at
}
Card.init("card", {
  user_id: {
    type: "int(11)"
  },
  data: {
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

export { Card }