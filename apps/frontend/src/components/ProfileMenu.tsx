import { Login } from '@mui/icons-material'
import {
	Avatar,
	IconButton,
	ListItemIcon,
	ListItemText,
	Menu,
	MenuItem,
} from '@mui/material'
import { login } from '@/api'
import { useState } from 'react'

export const ProfileMenu = () => {
	const [pfOp, setPfOp] = useState<null | HTMLElement>(
		null,
	)
	const pfOpOpen = pfOp !== null
	const closePfOp = () => setPfOp(null)

	return (
		<>
			<IconButton
				onClick={({ currentTarget }) =>
					setPfOp(currentTarget)
				}
			>
				<Avatar></Avatar>
			</IconButton>
			<Menu
				anchorEl={pfOp}
				open={pfOpOpen}
				onClose={closePfOp}
			>
				<MenuItem
					onClick={() => {
						closePfOp()

						login()
					}}
				>
					<ListItemIcon>
						<Login />
					</ListItemIcon>
					<ListItemText>Login</ListItemText>
				</MenuItem>
			</Menu>
		</>
	)
}
