import { ShareOutlined } from '@mui/icons-material'
import { RoundButton } from './RoundButton'

export interface ShareButtonProps {
	id?: string
}

export const ShareButton = ({ id }: ShareButtonProps) => (
	<RoundButton
		icon={<ShareOutlined />}
		onClick={async () => {
			if (!id) return

			try {
				await navigator.clipboard.writeText(id)
			} catch {}
		}}
	>
		Share
	</RoundButton>
)
