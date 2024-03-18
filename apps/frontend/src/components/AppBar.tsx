import {
	AppBar as MuiAppBar,
	Typography,
} from '@mui/material'

export const AppBar = () => {
	return (
		<MuiAppBar color="inherit" className="p-3">
			<Typography variant="h4" component="h1">
				Coding Lab
			</Typography>
		</MuiAppBar>
	)
}
