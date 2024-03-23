import {
	Stack,
	Unstable_Grid2 as Grid,
	Divider,
} from '@mui/material'
import { PostPreview } from '@components/PostPreview'
import { AppBar } from '@components/AppBar'
import { DropDownSelect } from '@/components/DropDownSelect'
import {
	LeaderboardOutlined,
	LocalFireDepartmentOutlined,
	History,
} from '@mui/icons-material'
import { data } from '@/data'

export const IndexPage = () => {
	return (
		<>
			<AppBar position="sticky"></AppBar>
			<Grid container spacing={2} className="m-0 p-0">
				<Grid xs className="m-0 p-0"></Grid>
				<Grid xs={8} className="m-0 p-0">
					<main className="w-full">
						<div className="flex justify-end mt-6 mb-2">
							<DropDownSelect
								options={[
									{
										icon: (
											<LeaderboardOutlined />
										),
										label: 'Top',
										value: 'top',
									},
									{
										icon: <History />,
										label: 'Old',
										value: 'old',
									},
									{
										icon: (
											<LocalFireDepartmentOutlined />
										),
										label: 'New',
										value: 'new',
									},
								]}
							/>
						</div>
						<Stack
							className="w-full"
							gap={1}
							divider={
								<Divider
									variant="fullWidth"
									sx={{
										borderBottomWidth: 2,
									}}
								/>
							}
						>
							{data.posts.map(
								({
									id,
									title,
									content,
								}) => (
									<PostPreview
										key={id}
										title={title}
										content={content}
									/>
								),
							)}
						</Stack>
					</main>
				</Grid>
				<Grid xs className="m-0 p-0"></Grid>
			</Grid>
		</>
	)
}
