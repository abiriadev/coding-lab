import { Avatar, Stack } from '@mui/material'
import { RelativeTimestamp } from './RelativeTimestamp'

export interface CommentProps {
	content: string
	postedAt?: Date
}

export const Comment = ({
	content,
	postedAt,
}: CommentProps) => {
	return (
		<div className="flex gap-3">
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
			</div>
		</div>
	)
}
