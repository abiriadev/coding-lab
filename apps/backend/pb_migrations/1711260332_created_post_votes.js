/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "ar5egynx0www56o",
    "created": "2024-03-24 06:05:32.244Z",
    "updated": "2024-03-24 06:05:32.244Z",
    "name": "post_votes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "fynv44uy",
        "name": "post",
        "type": "relation",
        "required": true,
        "presentable": false,
        "unique": false,
        "options": {
          "collectionId": "el1chzrqvzdylqg",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": null
        }
      },
      {
        "system": false,
        "id": "wmstj5qj",
        "name": "user",
        "type": "relation",
        "required": true,
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
      "CREATE UNIQUE INDEX `idx_eWJNTqA` ON `post_votes` (\n  `post`,\n  `user`\n)"
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
  const collection = dao.findCollectionByNameOrId("ar5egynx0www56o");

  return dao.deleteCollection(collection);
})
