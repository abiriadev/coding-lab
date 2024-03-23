import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': resolve(__dirname, './src'),
			'@components': resolve(
				__dirname,
				'./src/components',
			),
			'@routes': resolve(__dirname, './src/routes'),
		},
	},
})
