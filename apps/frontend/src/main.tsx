import { createRoot } from 'react-dom/client'
import { StyledEngineProvider } from '@mui/material'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import './index.css'
import { StrictMode } from 'react'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<StyledEngineProvider injectFirst>
			<RouterProvider router={router} />
		</StyledEngineProvider>
	</StrictMode>,
)
