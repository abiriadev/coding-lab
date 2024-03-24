import { Avatar, Skeleton } from '@mui/material'

export const PostSkeleton = () => (
	<div className="flex flex-col gap-3">
		<div className="flex gap-4">
			<Skeleton variant="circular" animation="wave">
				<Avatar />
			</Skeleton>
			<Skeleton
				className="text-2xl w-1/4"
				animation="wave"
			/>
		</div>
		<Skeleton
			className="text-5xl w-4/5"
			animation="wave"
		/>

		<Skeleton
			variant="rounded"
			height="200px"
			animation="wave"
		/>
	</div>
)
