import { Avatar, AppBar as MuiAppBar } from '@mui/material'

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
			<div className="flex justify-start items-center">
				<h1 className="m-0 mr-auto">Coding Lab</h1>

				<Avatar className=""></Avatar>
			</div>
		</MuiAppBar>
	)
}
