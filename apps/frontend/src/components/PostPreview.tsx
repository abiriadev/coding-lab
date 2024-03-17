import {
	ThumbUp,
	ThumbDown,
	ThumbUpOutlined,
	ThumbDownOutlined,
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
			<Stack direction="row" spacing={2}>
				<div>
					<Button startIcon={<ThumbUpOutlined />}>
						12
					</Button>

					<Button endIcon={<ThumbDownOutlined />}>
						34
					</Button>
				</div>
			</Stack>
		</article>
	)
}
