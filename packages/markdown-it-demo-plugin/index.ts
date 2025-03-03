import fs from 'node:fs'
import path from 'node:path'
// import { createHighlighter, Highlighter } from 'shiki'
import { containerPlugin } from './containers'
import { generateDemoHTML } from './generateDemoHtml'

// 创建一个缓存的highlighter
// let highlighter: Highlighter | undefined = undefined

// // 默认配置
// const defaultOptions = {
//   themes: ['github-dark'],
//   langs: ['html'],
// }

const demoPlugin = async (md, options = {}) => {

  // const pluginOptions = { ...defaultOptions, ...options }

  // 初始化 highlighter
  // if (!highlighter) {
  //   highlighter = await createHighlighter({
  //     themes: pluginOptions.themes,
  //     langs: pluginOptions.langs,
  //   })
  // }

  containerPlugin(md)

  // 自定义容器语法 <demo>
  md.block.ruler.before('fence', 'demo', (state, startLine, endLine, silent) => {
    const start = state.bMarks[startLine] + state.tShift[startLine]
    const max = state.eMarks[startLine]

    // 检查是否以 <demo 开头
    if (
      state.src.charCodeAt(start) !== 0x3c || // <
      state.src.charCodeAt(start + 1) !== 0x64 || // d
      state.src.charCodeAt(start + 2) !== 0x65 || // e
      state.src.charCodeAt(start + 3) !== 0x6d || // m
      state.src.charCodeAt(start + 4) !== 0x6f || // o
      state.src.charCodeAt(start + 5) !== 0x20
    ) {
      // space
      return false
    }

    const params = state.src.slice(start + 5, max).trim()

    // 解析参数
    const attrs: Record<string, string> = {}
    params.replace(/(\w+)="([^"]+)"/g, (_, key, value) => {
      attrs[key] = value
    })

    if (silent) return true

    try {
      const htmlPath = path.resolve(process.cwd(), attrs.src)
      const htmlContent = fs.readFileSync(htmlPath, 'utf-8')
      // const highlightedCode = highlighter!.codeToHtml(htmlContent, {
      //   lang: 'html',
      //   theme: pluginOptions.themes[0],
      // })
      const highlightedCode = md.options.highlight(htmlContent, 'html', '')

      const token = state.push('html_block', '', 0)
      token.content = generateDemoHTML(htmlContent, highlightedCode, attrs)

      state.line = startLine + 1
      return true
    } catch (err) {
      console.error('Failed to process demo:', err)
      return false
    }
  })
}

export default demoPlugin
