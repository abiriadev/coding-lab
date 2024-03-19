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
			className={`font-sans ${stretch ? 'w-full' : ''}`}
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
				<div>
					<Button
						color="inherit"
						startIcon={<ThumbUpOutlined />}
					>
						{upvotes ?? 0}
					</Button>

					<Button
						color="inherit"
						endIcon={<ThumbDownOutlined />}
					>
						{downvotes ?? 0}
					</Button>
				</div>

				<Button
					color="inherit"
					startIcon={
						<ChatBubbleOutlineOutlined />
					}
				>
					{commentsCount ?? 0}
				</Button>

				<Button
					color="inherit"
					startIcon={<ShareOutlined />}
				>
					Share
				</Button>
			</Stack>
		</article>
	)
}
