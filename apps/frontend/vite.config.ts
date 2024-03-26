import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'node:path'
import { VitePluginRadar } from 'vite-plugin-radar'

export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), '')

	return {
		plugins: [
			react(),
			VitePluginRadar({
				analytics: {
					id: env.GA_MEASUREMENT_ID,
				},
			}),
		],

		resolve: {
			alias: {
				'@': resolve(__dirname, './src'),
				'@components': resolve(
					__dirname,
					'./src/components',
				),
				'@routes': resolve(
					__dirname,
					'./src/routes',
				),
			},
		},
	}
})
