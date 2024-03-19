import { Unstable_Grid2 as Grid } from '@mui/material'

export const Post = () => {
	return (
		<Grid container>
			<Grid xs></Grid>
			<Grid xs={8}>
				<main></main>
				<div className="comments"></div>
			</Grid>
			<Grid xs></Grid>
		</Grid>
	)
}
