import {
	ThumbUp,
	ThumbDown,
	ThumbUpOutlined,
	ThumbDownOutlined,
	ChatBubbleOutlineOutlined,
	ShareOutlined,
} from '@mui/icons-material'
import { Button, Stack } from '@mui/material'

export interface PostPreviewProps {
	title: string
	content: string
}

export const PostPreview = ({
	title,
	content,
}: PostPreviewProps) => {
	return (
		<article className="font-sans">
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
						12
					</Button>

					<Button
						color="inherit"
						endIcon={<ThumbDownOutlined />}
					>
						34
					</Button>
				</div>

				<Button
					color="inherit"
					startIcon={
						<ChatBubbleOutlineOutlined />
					}
				>
					56
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
