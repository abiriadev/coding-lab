import {
	Unstable_Grid2 as Grid,
	Button,
	Stack,
} from '@mui/material'
import { Comment } from './Comment'

export interface PostProps {
	title: string
	content: string
	comments: string[]
}

export const Post = ({
	title,
	content,
	comments,
}: PostProps) => {
	return (
		<article>
			<h1>{title}</h1>
			<main>{content}</main>
			<div className="comments">
				<Button>Add new comment</Button>
				<Stack>
					{comments.map(comment => (
						<Comment content={comment} />
					))}
				</Stack>
			</div>
		</article>
	)
}
