import { Page404 } from './routes/404.tsx'
import { IndexPage } from './routes/index.tsx'
import { createBrowserRouter } from 'react-router-dom'
import { PostPage } from './routes/post.tsx'
import { PostInputPage } from './routes/PostInputPage.tsx'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <IndexPage />,
		errorElement: <Page404 />,
	},
	{
		path: '/new',
		element: <PostInputPage />,
	},
	{
		path: '/posts/:id',
		element: <PostPage />,
	},
])
