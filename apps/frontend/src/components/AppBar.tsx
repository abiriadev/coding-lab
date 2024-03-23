import {
	AppBar as MuiAppBar,
	Typography,
} from '@mui/material'

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
			className="p-3"
		>
			<Typography variant="h4" component="h1">
				Coding Lab
			</Typography>
		</MuiAppBar>
	)
}
