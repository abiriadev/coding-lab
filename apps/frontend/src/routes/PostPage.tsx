import { Post } from '@components/Post'
import { useParams } from 'react-router-dom'
import { Layout } from './Layout'
import { Suspense } from 'react'
import { promise2resource } from '@/utils/promise2resource'
import { getPost } from '@/api'
import { ErrorUi } from '@components/ErrorUi'
import { PostSkeleton } from '@/components/PostSkeleton'

let cache: Record<string, () => Promise<any>> = {}

export const PostPage = () => {
	const { id } = useParams()
	if (id === undefined)
		throw new Error('id was not defined')
	if (!cache[id]) cache[id] = () => getPost(id)

	return (
		<Layout>
			<div className="h-10"></div>
			<Suspense fallback={<PostSkeleton />}>
				<PostInner id={id} />
			</Suspense>
		</Layout>
	)
}

const PostInner = ({ id }: { id: string }) => {
	const [ok, post] = promise2resource(cache[id])

	return ok ? (
		<Post
			title={post.title}
			content={post.content}
			author={post.expand.author.username}
			postedAt={new Date(post.created)}
			comments={[]}
		/>
	) : (
		<ErrorUi
			message="Failed to fetch post"
			error={post}
		/>
	)
}
