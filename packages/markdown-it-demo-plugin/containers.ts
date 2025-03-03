import type MarkdownIt from 'markdown-it'
import container from 'markdown-it-container'
// import fs from 'fs'
// import path from 'path'
// import { generateDemoHTML } from './generateDemoHtml'

export const containerPlugin = (md: MarkdownIt) => {
  md.use(container, 'section', {
    validate(params: string) {
      return !!params.trim().match(/^section\s*(.*)$/)
    },

    render(tokens: any[], idx: number) {
      const token = tokens[idx]

      const info = token.info.trim().match(/^section\s*(.*)$/)
      const attrs: Record<string, string> = {}

      if (token.nesting === 1) {
        if (info?.[1]) {
          // 修改正则表达式以匹配带引号和不带引号的情况
          const attrRegex = /([^=\s]+)\s*=\s*(?:["']([^"']+)["']|([^\s]+))/g
          const matches = info[1].matchAll(attrRegex)

          for (const match of matches) {
            const [full, key, quotedValue, unquotedValue] = match
            const value = quotedValue || unquotedValue
            attrs[key] = value
          }
        }

        // 开始标签
        // if(attrs.src) {
        //   try {
        //     const filePath = path.resolve(process.cwd(), attrs.src)
        //     const content = fs.readFileSync(filePath, 'utf-8')
        //     const highlightedCode = md.options.highlight
        //       ? md.options.highlight(content, 'html', '')
        //       : content
        //     return generateDemoHTML(content, highlightedCode, attrs)
        //   } catch (err) {
        //     console.error('读取示例文件失败:', err)
        //     return '<div class="demo-error"><div>示例文件加载失败</div></div>'
        //   }
        // }
        return `<div class="section-container vp-raw">
<div class="section-container-title">${attrs.title}</div>
<div class="section-preview ${attrs.class || ''}" style="${attrs.style || ""}">
`
      } else {
        return '</div>\n</div>\n'
      }
    }
  })
}
