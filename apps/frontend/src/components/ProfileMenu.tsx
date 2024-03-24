import { Login, Logout } from '@mui/icons-material'
import {
	Avatar,
	IconButton,
	ListItemIcon,
	ListItemText,
	Menu,
	MenuItem,
} from '@mui/material'
import { login, loginData, logout } from '@/api'
import { useState } from 'react'

export const ProfileMenu = () => {
	const [pfOp, setPfOp] = useState<null | HTMLElement>(
		null,
	)
	const pfOpOpen = pfOp !== null
	const closePfOp = () => setPfOp(null)

	const username = loginData()?.username

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
				{username ? (
					<MenuItem
						onClick={() => {
							closePfOp()

							logout()
						}}
					>
						<ListItemIcon>
							<Logout />
						</ListItemIcon>
						<ListItemText>Logout</ListItemText>
					</MenuItem>
				) : (
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
				)}
			</Menu>
		</>
	)
}
