import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    (federation as any)({
      name:'testapp',
      filename:'remoteEntry.js',
      exposes:{
        './Dropdown': './src/components/atoms/dropdown/Dropdown'
      },
      shared:['react','react-dom']
    }),
    {
      name: 'fix-vite-federation-css',
      enforce: 'post',
      generateBundle(_options, bundle) {
        for (const fileName in bundle) {
          if (fileName.includes('remoteEntry.js')) {
            const chunk = bundle[fileName] as any;
            if (chunk.type === 'chunk' && chunk.code) {
              chunk.code = chunk.code.replace(
                'e.forEach(',
                '(Array.isArray(e) ? e : typeof e === "string" && e.endsWith(".css") ? [e] : []).forEach('
              );
            }
          }
        }
      }
    }
  ],
  server: {
    port: 3006, // Development server port
    cors: true,
  },
  preview: {
    port: 3006, // Preview server port
    cors: true,
  },
  build: {
    target: 'esnext', // Build target for modern browsers
    cssCodeSplit: false,
  },
})
