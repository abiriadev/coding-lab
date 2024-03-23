import {
	Stack,
	MenuItem,
	Menu,
	IconButton,
	Button,
} from '@mui/material'
import { Comment } from './Comment'
import { useRef, useState } from 'react'
import { MoreHoriz } from '@mui/icons-material'

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
			<h1>{title}</h1>
			<main>{content}</main>
			<div className="flex items-center justify-between">
				<span>{comments.length} comments</span>
				<Button>Most voted</Button>
			</div>
			<Stack>
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
