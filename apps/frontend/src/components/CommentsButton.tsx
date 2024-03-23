import { ChatBubbleOutlineOutlined } from '@mui/icons-material'
import { RoundButton } from './RoundButton'

export interface CommentsButtonProps {
	count?: number
}

export const CommentsButton = ({
	count,
}: CommentsButtonProps) => (
	<RoundButton icon={<ChatBubbleOutlineOutlined />}>
		{count ?? 0}
	</RoundButton>
)
