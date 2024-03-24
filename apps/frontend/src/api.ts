import { TypedPocketBase } from 'model'
import PocketBase from 'pocketbase'

const pb = new PocketBase(
	'http://127.0.0.1:8090',
) as TypedPocketBase

export const getPosts = async () => {
	return await pb.collection('posts').getFullList()
}

export const createPost = async ({
	title,
	content,
}: {
	title: string
	content: string
}) => {
	await pb.collection('posts').create({
		title,
		content,
	})
}
