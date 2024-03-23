import {
	ThumbUp,
	ThumbDown,
	ThumbUpOutlined,
	ThumbDownOutlined,
	ChatBubbleOutlineOutlined,
	ShareOutlined,
} from '@mui/icons-material'
import { Avatar, Button, Stack } from '@mui/material'
import { RelativeTimestamp } from './RelativeTimestamp'
import { VoteButton } from './VoteButton'
import { CommentsButton } from './CommentsButton'
import { ShareButton } from './ShareButton'

export interface PostPreviewProps {
	title: string
	content: string
	author?: string
	avatar?: string
	postedAt?: Date
	upvotes?: number
	downvotes?: number
	commentsCount?: number
	stretch?: boolean
}

export const PostPreview = ({
	title,
	content,
	author,
	avatar,
	postedAt,
	upvotes,
	downvotes,
	commentsCount,
	stretch,
}: PostPreviewProps) => {
	return (
		<article
			className={`font-sans rounded-xl hover:bg-[#f2f4f5] p-3 ${stretch ? 'w-full' : ''}`}
		>
			<Stack
				direction="row"
				spacing={2}
				className="mb-2"
				alignItems="center"
			>
				<Stack
					className="author"
					direction="row"
					alignItems="center"
				>
					<Avatar
						sx={{ width: 30, height: 30 }}
						className="mr-2"
						src={avatar}
					/>
					<span>{author ?? 'Author'}</span>
				</Stack>
				<RelativeTimestamp
					time={postedAt ?? new Date()}
				/>
			</Stack>
			<h2 className="text-2xl font-bold mb-1">
				{title}
			</h2>
			<p>{content}</p>
			<Stack
				className="mt-1"
				direction="row"
				spacing={2}
			>
				<VoteButton count={upvotes} />
				<VoteButton count={upvotes} down />
				<CommentsButton count={commentsCount} />
				<ShareButton />
			</Stack>
		</article>
	)
}
