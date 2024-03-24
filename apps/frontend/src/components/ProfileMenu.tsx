import {
	Login,
	Logout,
	Settings,
} from '@mui/icons-material'
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

	const [user, setUser] = useState(loginData())

	return (
		<>
			<IconButton
				onClick={({ currentTarget }) =>
					setPfOp(currentTarget)
				}
			>
				<Avatar src={user?.avatar} />
			</IconButton>
			<Menu
				anchorEl={pfOp}
				open={pfOpOpen}
				onClose={closePfOp}
			>
				{user ? (
					[
						<MenuItem key={1}>
							{user.username}
						</MenuItem>,
						<MenuItem
							key={2}
							onClick={closePfOp}
						>
							<ListItemIcon>
								<Settings />
							</ListItemIcon>
							<ListItemText>
								Settings
							</ListItemText>
						</MenuItem>,
						<MenuItem
							key={3}
							onClick={() => {
								closePfOp()

								logout()
								setUser(null)
							}}
						>
							<ListItemIcon>
								<Logout />
							</ListItemIcon>
							<ListItemText>
								Logout
							</ListItemText>
						</MenuItem>,
					]
				) : (
					<MenuItem
						onClick={async () => {
							closePfOp()

							await login()
							setUser(loginData())
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
