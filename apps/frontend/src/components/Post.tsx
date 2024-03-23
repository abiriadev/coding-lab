import {
	Stack,
	MenuItem,
	Menu,
	IconButton,
	Button,
} from '@mui/material'
import { Comment } from './Comment'
import { useRef } from 'react'
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
	const moreBtn = useRef(null)

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
				<IconButton ref={moreBtn}>
					<MoreHoriz />
				</IconButton>
			</div>
			<Menu anchorEl={moreBtn.current} open={true}>
				<MenuItem>A</MenuItem>
			</Menu>
		</article>
	)
}
