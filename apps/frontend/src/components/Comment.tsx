import { Avatar } from '@mui/material'

export interface CommentProps {
	content: string
}

export const Comment = ({ content }: CommentProps) => {
	return (
		<div className="flex">
			<Avatar></Avatar>
			<div>
				<div>Author</div>
				<div>{content}</div>
			</div>
		</div>
	)
}
