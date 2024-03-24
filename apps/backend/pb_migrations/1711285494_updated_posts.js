/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("el1chzrqvzdylqg")

  collection.createRule = "@request.data.author = @request.auth.id"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("el1chzrqvzdylqg")

  collection.createRule = ""

  return dao.saveCollection(collection)
})
