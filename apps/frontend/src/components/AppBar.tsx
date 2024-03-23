import { DarkMode, Add } from '@mui/icons-material'
import {
	Avatar,
	IconButton,
	AppBar as MuiAppBar,
} from '@mui/material'
import { RoundButton } from './RoundButton'

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
