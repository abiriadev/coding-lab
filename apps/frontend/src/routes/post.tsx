import { data } from '@/data'
import { Post } from '@components/Post'
import { useParams } from 'react-router-dom'
import { Layout } from './Layout'

export const PostPage = () => {
	const { id } = useParams()
	const postdata = data.posts.find(post => post.id === id)
	if (postdata === undefined)
		throw new Error('Post not found')

	return (
		<Layout>
			<div className="h-10"></div>
			<Post
				title={postdata.title}
				content={postdata.content}
				comments={[]}
			/>
		</Layout>
	)
}
