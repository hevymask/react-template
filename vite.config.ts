import { defineConfig } from 'vite'

// Plugin
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'
import { tanstackRouter } from '@tanstack/router-plugin/vite'
import { paraglideVitePlugin } from '@inlang/paraglide-js'

export default defineConfig({
  plugins: [
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true
    }),

    react(),
    babel({ presets: [reactCompilerPreset()] }),
    tailwindcss(),

    paraglideVitePlugin({
      project: './paraglide',
      outdir: './src/paraglide',
      emitTsDeclarations: true,
      strategy: ['cookie', 'baseLocale'],

      emitPrettierIgnore: false,
      emitGitIgnore: false
    })
  ],

  resolve: {
    tsconfigPaths: true
  }
})
