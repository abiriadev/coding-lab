import { Avatar, Stack } from '@mui/material'
import { RelativeTimestamp } from './RelativeTimestamp'
import { VoteButton } from './VoteButton'

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
					<VoteButton count={upvotes} />
					<VoteButton count={downvotes} down />
				</Stack>
			</div>
		</div>
	)
}
