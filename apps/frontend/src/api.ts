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
		author: pb.authStore.model?.id,
		title,
		content,
	})
}

export const login = async () => {
	const authData = await pb
		.collection('users')
		.authWithOAuth2({ provider: 'discord' })

	localStorage.setItem(
		'avatarUrl',
		authData.meta?.avatarUrl,
	)
}

export const logout = () => pb.authStore.clear()

export const loginData = () => pb.authStore.model
