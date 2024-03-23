import { Unstable_Grid2 as Grid } from '@mui/material'
import { AppBar } from '@components/AppBar'
import { ReactNode } from 'react'

export interface LayoutProps {
	children: ReactNode
}

export const Layout = ({ children }: LayoutProps) => {
	return (
		<>
			<AppBar position="sticky"></AppBar>
			<Grid container spacing={2} className="m-0 p-0">
				<Grid xs className="m-0 p-0"></Grid>
				<Grid xs={8} className="m-0 p-0">
					{children}
				</Grid>
				<Grid xs className="m-0 p-0"></Grid>
			</Grid>
		</>
	)
}
