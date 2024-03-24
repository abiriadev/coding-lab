import { DarkMode, Add, Login } from '@mui/icons-material'
import {
	IconButton,
	AppBar as MuiAppBar,
} from '@mui/material'
import { RoundButton } from './RoundButton'
import { FaDiscord, FaGithub } from 'react-icons/fa'
import { IconContext } from 'react-icons'
import { Link } from 'react-router-dom'
import { ProfileMenu } from './ProfileMenu'

export interface AppBarProps {
	position?:
		| 'fixed'
		| 'absolute'
		| 'sticky'
		| 'static'
		| 'relative'
}

export const AppBar = ({ position }: AppBarProps) => {
	return (
		<MuiAppBar
			position={position}
			color="inherit"
			className="p-4 shadow-none border-0 border-b-2 border-[#0000001f] border-solid"
		>
			<header className="flex justify-start items-center gap-3">
				<h1 className="m-0 mr-auto">
					<Link to="/">Coding Lab</Link>
				</h1>

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
				<ProfileMenu />
			</header>
		</MuiAppBar>
	)
}
