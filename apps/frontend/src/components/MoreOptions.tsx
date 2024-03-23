import {
	DeleteOutlined,
	EditOutlined,
	MoreHoriz,
} from '@mui/icons-material'
import {
	IconButton,
	ListItemIcon,
	ListItemText,
	Menu,
	MenuItem,
} from '@mui/material'
import { useState } from 'react'

export const MoreOptions = () => {
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
				<MenuItem onClick={closeMore}>
					<ListItemIcon>
						<EditOutlined />
					</ListItemIcon>
					<ListItemText>Edit</ListItemText>
				</MenuItem>
				<MenuItem onClick={closeMore}>
					<ListItemIcon>
						<DeleteOutlined />
					</ListItemIcon>
					<ListItemText>Delete</ListItemText>
				</MenuItem>
			</Menu>
		</>
	)
}
