import { Avatar, Skeleton, Stack } from '@mui/material'
import { RelativeTimestamp } from './RelativeTimestamp'
import { VoteButton } from './VoteButton'
import { CommentsButton } from './CommentsButton'
import { ShareButton } from './ShareButton'

export interface PostPreviewProps {
	title?: string
	content?: string
	author?: string
	avatar?: string
	postedAt?: Date
	upvotes?: number
	downvotes?: number
	commentsCount?: number
	stretch?: boolean
	skeleton?: boolean
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
	skeleton,
}: PostPreviewProps) => {
	return skeleton ? (
		<div className="flex flex-col">
			<div className="flex gap-3">
				<Skeleton variant="circular">
					<Avatar />
				</Skeleton>
				<Skeleton className="w-1/3" />
			</div>
			<Skeleton className="mb-3 text-5xl w-4/5" />
			<Skeleton variant="rounded" height="100px" />
		</div>
	) : (
		<article className="font-sans rounded-xl hover:bg-[#f2f4f5] p-3">
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
				{title ?? 'Title'}
			</h2>
			<p>{content ?? 'Content'}</p>
			<Stack
				className="mt-1"
				direction="row"
				spacing={2}
			>
				<VoteButton count={upvotes} />
				<VoteButton count={downvotes} down />
				<CommentsButton count={commentsCount} />
				<ShareButton />
			</Stack>
		</article>
	)
}
