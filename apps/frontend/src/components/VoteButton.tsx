import {
	ThumbDown,
	ThumbDownOutlined,
	ThumbUp,
	ThumbUpOutlined,
} from '@mui/icons-material'
import { RoundButton } from './RoundButton'

export interface VoteButtonProps {
	down?: boolean
	count?: number
	pressed?: boolean
}

export const VoteButton = ({
	down,
	count,
	pressed,
}: VoteButtonProps) => (
	<RoundButton
		icon={
			down ? (
				pressed ? (
					<ThumbDown />
				) : (
					<ThumbDownOutlined />
				)
			) : pressed ? (
				<ThumbUp />
			) : (
				<ThumbUpOutlined />
			)
		}
	>
		{count ?? 0}
	</RoundButton>
)
