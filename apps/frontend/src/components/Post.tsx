import {
	Stack,
	MenuItem,
	Menu,
	IconButton,
	Button,
	Avatar,
	Divider,
} from '@mui/material'
import { Comment } from './Comment'
import { useState } from 'react'
import {
	LeaderboardOutlined,
	LocalFireDepartmentOutlined,
	MoreHoriz,
	History,
} from '@mui/icons-material'
import { RelativeTimestamp } from './RelativeTimestamp'
import Markdown from 'react-markdown'
import { DropDownSelect } from './DropDownSelect'

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
	const [moreBtn, setMoreBtn] =
		useState<null | HTMLElement>(null)
	const moreOpen = moreBtn !== null

	return (
		<article className="relative">
			<div className="flex gap-3">
				<Avatar></Avatar>
				<div className="text-12">
					<div className="font-bold hover:underline">
						Author
					</div>
					<RelativeTimestamp time={new Date()} />
				</div>
			</div>
			<h1 className="text-2xl font-semibold mt-1 mb-3">
				{title}
			</h1>
			<main className="text-14">
				<Markdown>{content}</Markdown>
			</main>
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
			<Stack gap={1} divider={<Divider />}>
				{comments.map(comment => (
					<Comment content={comment} />
				))}
			</Stack>
			<div className="absolute right-0 top-0">
				<IconButton
					onClick={({ currentTarget }) =>
						setMoreBtn(currentTarget)
					}
				>
					<MoreHoriz />
				</IconButton>
			</div>
			<Menu
				anchorEl={moreBtn}
				open={moreOpen}
				onClose={() => setMoreBtn(null)}
			>
				<MenuItem>A</MenuItem>
			</Menu>
		</article>
	)
}
