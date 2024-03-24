import { PostInput } from '@/components/PostInput'
import { Layout } from './Layout'
import { createPost } from '@/api'

export const PostInputPage = () => {
	return (
		<Layout>
			<div className="h-10"></div>
			<PostInput
				onSubmit={async d => {
					await createPost(d)
				}}
			/>
		</Layout>
	)
}
