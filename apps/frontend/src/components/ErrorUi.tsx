import { Error } from '@mui/icons-material'

export interface ErrorUiProps {
	message?: string
}

export const ErrorUi = ({ message }: ErrorUiProps) => {
	return (
		<div>
			<Error className="text-red-500 text-[5rem]" />
			<p>{message ?? 'Error'}</p>
		</div>
	)
}
