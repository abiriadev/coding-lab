import { Avatar, Button, Stack } from '@mui/material'
import { RelativeTimestamp } from './RelativeTimestamp'
import {
	ThumbDownOutlined,
	ThumbUpOutlined,
} from '@mui/icons-material'

export interface CommentProps {
	content: string
	postedAt?: Date
	upvotes?: number
	downvotes?: number
}

export const Comment = ({
	content,
	postedAt,
	upvotes,
	downvotes,
}: CommentProps) => {
	return (
		<div className="flex gap-3 p-4">
			<Avatar></Avatar>
			<div>
				<Stack
					className="text-12"
					direction="row"
					spacing={1}
					divider={
						<span className="place-items-center">
							•
						</span>
					}
				>
					<span className="font-bold hover:underline">
						Author
					</span>
					<RelativeTimestamp
						time={postedAt ?? new Date()}
					/>
				</Stack>
				<div className="text-14">{content}</div>
				<Stack
					className="mt-2"
					direction="row"
					spacing={2}
				>
					<Button
						color="inherit"
						startIcon={<ThumbUpOutlined />}
						className="hover:rounded-full"
					>
						{upvotes ?? 0}
					</Button>
					<Button
						color="inherit"
						startIcon={<ThumbDownOutlined />}
						className="hover:rounded-full"
					>
						{downvotes ?? 0}
					</Button>
				</Stack>
			</div>
		</div>
	)
}
