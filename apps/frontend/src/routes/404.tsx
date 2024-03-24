import { ErrorUi } from '@/components/ErrorUi'
import { useRouteError } from 'react-router-dom'

export const Page404 = () => {
	const error = useRouteError()

	return (
		<ErrorUi
			message="Unexpected error occurred"
			error={error}
		/>
	)
}
