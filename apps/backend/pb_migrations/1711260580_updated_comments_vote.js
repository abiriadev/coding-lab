/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rq10dbjzfnm9dgt")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kwcqr9ns",
    "name": "value",
    "type": "number",
    "required": true,
    "presentable": false,
    "unique": false,
    "options": {
      "min": -1,
      "max": 1,
      "noDecimal": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("rq10dbjzfnm9dgt")

  // remove
  collection.schema.removeField("kwcqr9ns")

  return dao.saveCollection(collection)
})
