import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { StyledEngineProvider } from '@mui/material'
import {
	createBrowserRouter,
	RouterProvider,
} from 'react-router-dom'
import { Page404 } from './routes/404.tsx'
import { IndexPage } from './routes/index.tsx'

const router = createBrowserRouter([
	{
		path: '/',
		element: <IndexPage />,
		errorElement: <Page404 />,
	},
])

ReactDOM.createRoot(
	document.getElementById('root')!,
).render(
	<React.StrictMode>
		<StyledEngineProvider injectFirst>
			<RouterProvider router={router} />
		</StyledEngineProvider>
	</React.StrictMode>,
)
