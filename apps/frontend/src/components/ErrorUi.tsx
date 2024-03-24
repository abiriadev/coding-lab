import { Error } from '@mui/icons-material'

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
			{error ? <p>{error.toString()}</p> : null}
		</div>
	)
}
