import { PostInput } from '@/components/PostInput'
import { Layout } from './Layout'
import { createPost } from '@/api'
import { ErrorUi } from '@/components/ErrorUi'
import { useState } from 'react'

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
							await createPost(d)
						} catch (e) {
							setErr(e as any)
						}
					}}
				/>
			)}
		</Layout>
	)
}
