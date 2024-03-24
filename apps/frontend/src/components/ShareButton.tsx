import { ShareOutlined } from '@mui/icons-material'
import { RoundButton } from './RoundButton'
import { Snackbar } from '@mui/material'
import { useState } from 'react'

export interface ShareButtonProps {
	id?: string
}

export const ShareButton = ({ id }: ShareButtonProps) => {
	const [show, setShow] = useState(false)

	return (
		<RoundButton
			icon={<ShareOutlined />}
			onClick={async () => {
				if (!id) return

				try {
					await navigator.clipboard.writeText(
						`${import.meta.env.VITE_BASE_URL}/posts/${id}`,
					)

					setShow(true)
				} catch {}
			}}
		>
			Share
			<Snackbar
				open={show}
				autoHideDuration={500}
				onClose={() => setShow(false)}
				message="Link copied!"
			/>
		</RoundButton>
	)
}
