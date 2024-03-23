import {
	Stack,
	Unstable_Grid2 as Grid,
	Divider,
} from '@mui/material'
import { PostPreview } from '@components/PostPreview'
import { AppBar } from '@components/AppBar'

export const IndexPage = () => {
	return (
		<>
			<header>
				<AppBar></AppBar>
			</header>
			<Grid container spacing={2}>
				<Grid xs></Grid>
				<Grid xs={8}>
					<main className="w-full">
						<Stack
							className="w-full"
							divider={
								<Divider
									variant="fullWidth"
									sx={{
										borderBottomWidth: 2,
									}}
								/>
							}
						>
							<PostPreview
								title="Title"
								content="content"
								stretch
							/>
							<PostPreview
								title="Title"
								content="content"
								stretch
							/>
							<PostPreview
								title="Title"
								content="content"
								stretch
							/>
						</Stack>
					</main>
				</Grid>
				<Grid xs></Grid>
			</Grid>
		</>
	)
}
