import { Error } from '@mui/icons-material'

export interface ErrorUiProps {
	message?: string
}

export const ErrorUi = ({ message }: ErrorUiProps) => {
	return (
		<div className="flex flex-col items-center">
			<Error className="text-red-500 text-[5rem]" />
			<p className="mt-2 mb-0 text-xl font-bold">
				{message ?? 'Error'}
			</p>
		</div>
	)
}
