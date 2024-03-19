import {
	AppBar,
	Stack,
	Unstable_Grid2 as Grid,
} from '@mui/material'
import { PostPreview } from './components/PostPreview'

function App() {
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
							spacing={2}
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

export default App
