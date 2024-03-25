import { TypedPocketBase } from 'model'
import PocketBase from 'pocketbase'

const pb = new PocketBase(
	import.meta.env.VITE_API_ENDPOINT,
) as TypedPocketBase

export const getPosts = async () => {
	return await pb.collection('posts').getFullList({
		expand: 'author',
		sort: '-created',
	})
}

export const getPost = async (id: string) => {
	return await pb.collection('posts').getOne(id, {
		expand: 'author',
	})
}

export const createPost = async ({
	title,
	content,
}: {
	title: string
	content: string
}) => {
	const { id } = await pb.collection('posts').create({
		author: pb.authStore.model?.id,
		title,
		content,
	})

	return id
}

export const login = async () => {
	await pb
		.collection('users')
		.authWithOAuth2({ provider: 'discord' })
}

export const logout = () => pb.authStore.clear()

export const loginData = () => pb.authStore.model
