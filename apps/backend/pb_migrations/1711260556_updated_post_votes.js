/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ar5egynx0www56o")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "igbc6qc3",
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
  const collection = dao.findCollectionByNameOrId("ar5egynx0www56o")

  // remove
  collection.schema.removeField("igbc6qc3")

  return dao.saveCollection(collection)
})
