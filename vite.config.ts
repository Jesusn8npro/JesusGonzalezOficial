import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],
	build: {
		target: 'esnext',
		minify: 'terser',
		rollupOptions: {
			output: {
				manualChunks: {
					vendor: ['svelte']
				}
			}
		}
	},
	optimizeDeps: {
		include: ['svelte']
	},
	server: {
		port: 5173,
		host: true
	}
});
