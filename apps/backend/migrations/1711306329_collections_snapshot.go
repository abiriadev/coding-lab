package migrations

import (
	"encoding/json"

	"github.com/pocketbase/dbx"
	"github.com/pocketbase/pocketbase/daos"
	m "github.com/pocketbase/pocketbase/migrations"
	"github.com/pocketbase/pocketbase/models"
)

func init() {
	m.Register(func(db dbx.Builder) error {
		jsonData := `[
			{
				"id": "_pb_users_auth_",
				"created": "2024-03-24 03:17:29.480Z",
				"updated": "2024-03-24 17:50:47.875Z",
				"name": "users",
				"type": "auth",
				"system": false,
				"schema": [
					{
						"system": false,
						"id": "vod0tcyo",
						"name": "avatar",
						"type": "url",
						"required": false,
						"presentable": false,
						"unique": false,
						"options": {
							"exceptDomains": [],
							"onlyDomains": []
						}
					}
				],
				"indexes": [],
				"listRule": "id = @request.auth.id",
				"viewRule": "id = @request.auth.id",
				"createRule": "",
				"updateRule": "id = @request.auth.id",
				"deleteRule": "id = @request.auth.id",
				"options": {
					"allowEmailAuth": false,
					"allowOAuth2Auth": true,
					"allowUsernameAuth": false,
					"exceptEmailDomains": null,
					"manageRule": null,
					"minPasswordLength": 8,
					"onlyEmailDomains": null,
					"onlyVerified": true,
					"requireEmail": true
				}
			},
			{
				"id": "el1chzrqvzdylqg",
				"created": "2024-03-24 06:01:03.944Z",
				"updated": "2024-03-24 13:04:54.902Z",
				"name": "posts",
				"type": "base",
				"system": false,
				"schema": [
					{
						"system": false,
						"id": "cvzf9psc",
						"name": "author",
						"type": "relation",
						"required": true,
						"presentable": false,
						"unique": false,
						"options": {
							"collectionId": "_pb_users_auth_",
							"cascadeDelete": true,
							"minSelect": null,
							"maxSelect": 1,
							"displayFields": null
						}
					},
					{
						"system": false,
						"id": "izgvlcqv",
						"name": "title",
						"type": "text",
						"required": true,
						"presentable": false,
						"unique": false,
						"options": {
							"min": null,
							"max": null,
							"pattern": ""
						}
					},
					{
						"system": false,
						"id": "iufymutl",
						"name": "content",
						"type": "text",
						"required": true,
						"presentable": false,
						"unique": false,
						"options": {
							"min": null,
							"max": null,
							"pattern": ""
						}
					}
				],
				"indexes": [],
				"listRule": "",
				"viewRule": "",
				"createRule": "@request.data.author = @request.auth.id",
				"updateRule": null,
				"deleteRule": null,
				"options": {}
			},
			{
				"id": "pho6e9jpqairwf6",
				"created": "2024-03-24 06:03:35.693Z",
				"updated": "2024-03-24 06:03:35.693Z",
				"name": "comments",
				"type": "base",
				"system": false,
				"schema": [
					{
						"system": false,
						"id": "vxthlcvp",
						"name": "author",
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
					},
					{
						"system": false,
						"id": "axtogxjd",
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
						"id": "dm49jwfu",
						"name": "content",
						"type": "text",
						"required": true,
						"presentable": false,
						"unique": false,
						"options": {
							"min": null,
							"max": null,
							"pattern": ""
						}
					}
				],
				"indexes": [],
				"listRule": null,
				"viewRule": null,
				"createRule": null,
				"updateRule": null,
				"deleteRule": null,
				"options": {}
			},
			{
				"id": "ar5egynx0www56o",
				"created": "2024-03-24 06:05:32.244Z",
				"updated": "2024-03-24 06:09:16.091Z",
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
					},
					{
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
					}
				],
				"indexes": [
					"CREATE UNIQUE INDEX ` + "`" + `idx_eWJNTqA` + "`" + ` ON ` + "`" + `post_votes` + "`" + ` (\n  ` + "`" + `post` + "`" + `,\n  ` + "`" + `user` + "`" + `\n)"
				],
				"listRule": null,
				"viewRule": null,
				"createRule": null,
				"updateRule": null,
				"deleteRule": null,
				"options": {}
			},
			{
				"id": "rq10dbjzfnm9dgt",
				"created": "2024-03-24 06:06:03.058Z",
				"updated": "2024-03-24 06:09:40.497Z",
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
					},
					{
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
					}
				],
				"indexes": [
					"CREATE INDEX ` + "`" + `idx_25DFrRI` + "`" + ` ON ` + "`" + `comments_vote` + "`" + ` (\n  ` + "`" + `comment` + "`" + `,\n  ` + "`" + `user` + "`" + `\n)"
				],
				"listRule": null,
				"viewRule": null,
				"createRule": null,
				"updateRule": null,
				"deleteRule": null,
				"options": {}
			}
		]`

		collections := []*models.Collection{}
		if err := json.Unmarshal([]byte(jsonData), &collections); err != nil {
			return err
		}

		return daos.New(db).ImportCollections(collections, true, nil)
	}, func(db dbx.Builder) error {
		return nil
	})
}
