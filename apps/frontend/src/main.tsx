import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { StyledEngineProvider } from '@mui/material'
import {
	createBrowserRouter,
	RouterProvider,
} from 'react-router-dom'
import { Page404 } from './404.tsx'

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
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
