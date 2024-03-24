/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "rq10dbjzfnm9dgt",
    "created": "2024-03-24 06:06:03.058Z",
    "updated": "2024-03-24 06:06:03.058Z",
    "name": "comments_vote",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "qpxmyqcg",
        "name": "comment",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "pho6e9jpqairwf6",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "e0ny68pk",
        "name": "user",
        "type": "relation",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "_pb_users_auth_",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      }
    ],
    "indexes": [
      "CREATE INDEX `idx_25DFrRI` ON `comments_vote` (\n  `comment`,\n  `user`\n)"
    ],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("rq10dbjzfnm9dgt");

  return dao.deleteCollection(collection);
})
