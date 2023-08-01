import { ModelBase } from '../modelBase';
class Card extends ModelBase {

}
Card.init("card", {
    id: { type: "int(11)", primaryKey: true, autoIncrement: true },
    created_at: { type: "datetime" },
    updated_at: { type: "datetime" },
    deleted_at: { type: "datetime" },
    title: { type: "varchar(255)" },
    options: { type: "varchar(255)" },
})