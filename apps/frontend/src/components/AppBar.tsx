import { DarkMode, Add } from '@mui/icons-material'
import {
	Avatar,
	IconButton,
	AppBar as MuiAppBar,
} from '@mui/material'
import { RoundButton } from './RoundButton'
import { FaDiscord, FaGithub } from 'react-icons/fa'
import { IconContext } from 'react-icons'

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
			className="p-4"
		>
			<div className="flex justify-start items-center gap-3">
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
				<RoundButton icon={<Add />}>
					Post
				</RoundButton>
				<Avatar className=""></Avatar>
			</div>
		</MuiAppBar>
	)
}
