import { Page404 } from './routes/404.tsx'
import { IndexPage } from './routes/index.tsx'
import { createBrowserRouter } from 'react-router-dom'
import { PostPage } from './routes/post.tsx'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <IndexPage />,
		errorElement: <Page404 />,
	},
	{
		path: '/posts/:id',
		element: <PostPage />,
	},
])
