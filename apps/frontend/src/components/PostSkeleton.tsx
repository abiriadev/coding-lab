import { Avatar, Skeleton } from '@mui/material'

export const PostSkeleton = () => (
	<div className="flex flex-col gap-3">
		<div className="flex gap-4">
			<Skeleton variant="circular">
				<Avatar />
			</Skeleton>
			<Skeleton className="text-2xl w-1/4" />
		</div>
		<Skeleton className="text-5xl w-4/5" />
		<Skeleton variant="rounded" height="200px" />
	</div>
)
