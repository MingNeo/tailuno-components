import autoprefixer from 'autoprefixer'
import tailwindcss from 'tailwindcss'
import { postcssIsolateStyles } from 'vitepress'

export default {
  plugins: [
    tailwindcss(),
    autoprefixer(),
    postcssIsolateStyles({
      includeFiles: [/vp-doc\.css/], // defaults to /base\.css/
    }),
  ],
}
