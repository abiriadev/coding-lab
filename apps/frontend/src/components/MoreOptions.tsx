import { MoreHoriz } from '@mui/icons-material'
import {
	IconButton,
	ListItemIcon,
	ListItemText,
	Menu,
	MenuItem,
} from '@mui/material'
import { ReactNode, useState } from 'react'

export interface MoreOptionsProps {
	options: Array<{
		label: string
		icon: ReactNode
	}>
}

export const MoreOptions = ({
	options,
}: MoreOptionsProps) => {
	const [moreBtn, setMoreBtn] =
		useState<null | HTMLElement>(null)
	const moreOpen = moreBtn !== null
	const closeMore = v => setMoreBtn(null)

	return (
		<>
			<IconButton
				onClick={({ currentTarget }) =>
					setMoreBtn(currentTarget)
				}
			>
				<MoreHoriz />
			</IconButton>
			<Menu
				anchorEl={moreBtn}
				open={moreOpen}
				onClose={closeMore}
			>
				{options.map(({ label, icon }) => (
					<MenuItem onClick={closeMore}>
						<ListItemIcon>{icon}</ListItemIcon>
						<ListItemText>{label}</ListItemText>
					</MenuItem>
				))}
			</Menu>
		</>
	)
}
