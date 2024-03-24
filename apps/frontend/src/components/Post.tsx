import { Stack, Avatar, Divider } from '@mui/material'
import { Comment } from './Comment'
import {
	LeaderboardOutlined,
	LocalFireDepartmentOutlined,
	History,
	EditOutlined,
	DeleteOutlined,
} from '@mui/icons-material'
import { RelativeTimestamp } from './RelativeTimestamp'
import Markdown from 'react-markdown'
import { DropDownSelect } from './DropDownSelect'
import { VoteButton } from './VoteButton'
import { ShareButton } from './ShareButton'
import { MoreOptions } from './MoreOptions'
import { CommentInput } from './CommentInput'

export interface PostProps {
	id?: string
	title: string
	content: string
	author?: string
	postedAt?: Date
	upvotes?: number
	downvotes?: number
	comments: string[]
}

export const Post = ({
	id,
	title,
	content,
	author,
	postedAt,
	upvotes,
	downvotes,
	comments,
}: PostProps) => {
	return (
		<article className="relative">
			<div className="flex gap-3">
				<Avatar></Avatar>
				<div className="text-12">
					<div className="font-bold hover:underline">
						{author ?? 'Author'}
					</div>
					<RelativeTimestamp
						time={postedAt ?? new Date()}
					/>
				</div>
			</div>
			<h1 className="text-2xl font-semibold mt-1 mb-3">
				{title}
			</h1>
			<main className="text-14">
				<Markdown>{content}</Markdown>
			</main>
			<Stack
				direction="row"
				gap={2}
				className="mt-6 mb-10"
			>
				<VoteButton count={upvotes} />
				<VoteButton count={downvotes} down />
				<ShareButton id={id} />
			</Stack>
			<div className="flex items-center justify-between">
				<span>{comments.length} comments</span>
				<DropDownSelect
					options={[
						{
							icon: <LeaderboardOutlined />,
							label: 'Top',
							value: 'top',
						},
						{
							icon: <History />,
							label: 'Old',
							value: 'old',
						},
						{
							icon: (
								<LocalFireDepartmentOutlined />
							),
							label: 'New',
							value: 'new',
						},
					]}
				/>
			</div>
			<CommentInput className="mb-3 mt-5" />
			<Stack gap={1} divider={<Divider />}>
				{comments.map((comment, i) => (
					<Comment key={i} content={comment} />
				))}
			</Stack>
			<div className="absolute right-0 top-0">
				<MoreOptions
					options={[
						{
							icon: <EditOutlined />,
							label: 'Edit',
						},
						{
							icon: <DeleteOutlined />,
							label: 'Delete',
						},
					]}
				/>
			</div>
		</article>
	)
}
