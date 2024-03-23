import { useRouteError } from 'react-router-dom'

export const Page404 = () => {
	const error = useRouteError() as { message: string }

	return (
		<>
			<h1>404</h1>
			<p>{error.message}</p>
		</>
	)
}
