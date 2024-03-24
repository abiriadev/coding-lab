import { PostInput } from '@/components/PostInput'
import { Layout } from './Layout'
import { createPost } from '@/api'
import { ErrorUi } from '@/components/ErrorUi'
import { useState } from 'react'
import { redirect } from 'react-router-dom'

export const PostInputPage = () => {
	const [err, setErr] = useState(null)
	const isErr = err !== null

	return (
		<Layout>
			<div className="h-10"></div>
			{isErr ? (
				<ErrorUi
					message="Failed to create new post"
					error={err}
				/>
			) : (
				<PostInput
					onSubmit={async d => {
						try {
							const id = await createPost(d)

							redirect(`/posts/${id}`)
						} catch (e) {
							setErr(e as any)
						}
					}}
				/>
			)}
		</Layout>
	)
}
