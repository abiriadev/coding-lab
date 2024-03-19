import {
	Unstable_Grid2 as Grid,
	Button,
	Stack,
} from '@mui/material'

export interface PostProps {
	title: string
	content: string
}

export const Post = ({ title, content }: PostProps) => {
	return (
		<Grid container>
			<Grid xs></Grid>
			<Grid xs={8}>
				<h1>{title}</h1>
				<main>{content}</main>
				<div className="comments">
					<Button>Add new comment</Button>
					<Stack></Stack>
				</div>
			</Grid>
			<Grid xs></Grid>
		</Grid>
	)
}
