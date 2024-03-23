import {
	ThumbDownOutlined,
	ThumbUpOutlined,
} from '@mui/icons-material'
import { RoundButton } from './RoundButton'

export interface VoteButtonProps {
	down?: boolean
	count?: number
}

export const VoteButton = ({
	down,
	count,
}: VoteButtonProps) => (
	<RoundButton
		icon={
			down ? (
				<ThumbDownOutlined />
			) : (
				<ThumbUpOutlined />
			)
		}
	>
		{count ?? 0}
	</RoundButton>
)
