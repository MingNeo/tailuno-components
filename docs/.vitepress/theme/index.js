// https://vitepress.dev/guide/custom-theme
import DefaultTheme from 'vitepress/theme'
import { setupCopyCode } from '../../../packages/markdown-it-demo-plugin/copy-code.js'
import './tailwind.css'

export default { ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(setupCopyCode)
  }
}
