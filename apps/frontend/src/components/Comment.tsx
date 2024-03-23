import { Avatar, Stack } from '@mui/material'

export interface CommentProps {
	content: string
}

export const Comment = ({ content }: CommentProps) => {
	return (
		<div className="flex gap-3">
			<Avatar></Avatar>
			<div>
				<Stack className="text-12">
					<span className="font-bold hover:underline">
						Author
					</span>
				</Stack>
				<div className="text-14">{content}</div>
			</div>
		</div>
	)
}
