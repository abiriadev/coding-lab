/**
* This file was @generated using pocketbase-typegen
*/

import type PocketBase from 'pocketbase'
import type { RecordService } from 'pocketbase'

export enum Collections {
	Comments = "comments",
	CommentsVote = "comments_vote",
	PostVotes = "post_votes",
	Posts = "posts",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type CommentsRecord = {
	author: RecordIdString
	content: string
	post: RecordIdString
}

export type CommentsVoteRecord = {
	comment?: RecordIdString
	user?: RecordIdString
	value: number
}

export type PostVotesRecord = {
	post: RecordIdString
	user: RecordIdString
	value: number
}

export type PostsRecord = {
	author: RecordIdString
	content: string
	title: string
}

export type UsersRecord = {
	avatar?: string
}

// Response types include system fields and match responses from the PocketBase API
export type CommentsResponse<Texpand = unknown> = Required<CommentsRecord> & BaseSystemFields<Texpand>
export type CommentsVoteResponse<Texpand = unknown> = Required<CommentsVoteRecord> & BaseSystemFields<Texpand>
export type PostVotesResponse<Texpand = unknown> = Required<PostVotesRecord> & BaseSystemFields<Texpand>
export type PostsResponse<Texpand = unknown> = Required<PostsRecord> & BaseSystemFields<Texpand>
export type UsersResponse<Texpand = unknown> = Required<UsersRecord> & AuthSystemFields<Texpand>

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
	comments: CommentsRecord
	comments_vote: CommentsVoteRecord
	post_votes: PostVotesRecord
	posts: PostsRecord
	users: UsersRecord
}

export type CollectionResponses = {
	comments: CommentsResponse
	comments_vote: CommentsVoteResponse
	post_votes: PostVotesResponse
	posts: PostsResponse
	users: UsersResponse
}

// Type for usage with type asserted PocketBase instance
// https://github.com/pocketbase/js-sdk#specify-typescript-definitions

export type TypedPocketBase = PocketBase & {
	collection(idOrName: 'comments'): RecordService<CommentsResponse>
	collection(idOrName: 'comments_vote'): RecordService<CommentsVoteResponse>
	collection(idOrName: 'post_votes'): RecordService<PostVotesResponse>
	collection(idOrName: 'posts'): RecordService<PostsResponse>
	collection(idOrName: 'users'): RecordService<UsersResponse>
}
