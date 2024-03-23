import { ShareOutlined } from '@mui/icons-material'
import { Button } from '@mui/material'

export const RoundButton = () => (
	<Button
		color="inherit"
		startIcon={<ShareOutlined />}
		className="rounded-full bg-neutral-200 px-3"
	>
		Share
	</Button>
)
