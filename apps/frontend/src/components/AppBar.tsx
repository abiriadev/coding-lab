import { DarkMode, Add, Login } from '@mui/icons-material'
import {
	Avatar,
	IconButton,
	ListItemIcon,
	ListItemText,
	Menu,
	MenuItem,
	AppBar as MuiAppBar,
} from '@mui/material'
import { RoundButton } from './RoundButton'
import { FaDiscord, FaGithub } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export interface AppBarProps {
	position?:
		| 'fixed'
		| 'absolute'
		| 'sticky'
		| 'static'
		| 'relative'
}

export const AppBar = ({ position }: AppBarProps) => {
	const [pfOp, setPfOp] = useState<null | HTMLElement>(
		null,
	)
	const pfOpOpen = pfOp !== null
	const closeMore = v => setPfOp(null)

	return (
		<MuiAppBar
			position={position}
			color="inherit"
			className="p-4 shadow-none border-0 border-b-2 border-[#0000001f] border-solid"
		>
			<header className="flex justify-start items-center gap-3">
				<h1 className="m-0 mr-auto">Coding Lab</h1>
				<IconContext.Provider
					value={{
						color: 'gray',
						className: 'text-3xl',
					}}
				>
					<a
						href="https://discord.gg/coding-lab-687271752224735233"
						className="leading-none mr-3"
					>
						<FaDiscord />
					</a>
					<a
						href="https://github.com/abiriadev/coding-lab"
						className="leading-none"
					>
						<FaGithub />
					</a>
				</IconContext.Provider>

				<IconButton>
					<DarkMode fontSize="large" />
				</IconButton>
				<Link to="/new">
					<RoundButton icon={<Add />}>
						Post
					</RoundButton>
				</Link>
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
					onClose={closeMore}
				>
					<MenuItem onClick={closeMore}>
						<ListItemIcon>
							<Login />
						</ListItemIcon>
						<ListItemText>Login</ListItemText>
					</MenuItem>
				</Menu>
			</header>
		</MuiAppBar>
	)
}
