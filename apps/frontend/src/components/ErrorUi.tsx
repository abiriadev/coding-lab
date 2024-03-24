import { Error, ArrowOutward } from '@mui/icons-material'
import { Button } from '@mui/material'

export interface ErrorUiProps {
	message?: string
	error?: unknown
}

export const ErrorUi = ({
	message,
	error,
}: ErrorUiProps) => {
	return (
		<div className="flex flex-col items-center">
			<Error className="text-red-500 text-[5rem]" />
			<p className="mt-2 mb-0 text-xl font-bold">
				{message ?? 'Error'}
			</p>
			{error ? (
				<p className="mt-2 mb-0 text-neutral-400">
					{error.toString()}
				</p>
			) : null}
			<Button
				className="mt-4"
				variant="outlined"
				sx={{ textTransform: 'none' }}
				endIcon={<ArrowOutward />}
			>
				<a href="https://github.com/abiriadev/coding-lab/issues/new">
					Open an issue
				</a>
			</Button>
		</div>
	)
}
