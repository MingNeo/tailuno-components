const fs = require('fs')
const path = require('path')
const glob = require('glob')

// 配置项
const CONFIG = {
  componentsDir: path.resolve(__dirname, '../ui-components'),
  outputPath: path.resolve(__dirname, '../ui-components/config.json'),
  pattern: '**/Inline.vue'
}

// 主函数
async function generateComponents() {
  try {
    console.log('开始扫描组件目录:', CONFIG.componentsDir)
    const files = glob.sync(CONFIG.pattern, { cwd: CONFIG.componentsDir })
    console.log('找到的组件文件:', files)

    const components = {}
    const errors = []

    for (const file of files) {
      try {
        const componentPath = path.join(CONFIG.componentsDir, file)
        const componentDir = path.dirname(componentPath)
        const componentName = path.basename(componentDir)

        console.log('\n处理组件:', componentName)
        console.log('组件路径:', componentPath)

        const code = fs.readFileSync(componentPath, 'utf-8')
        console.log('读取文件内容长度:', code.length)

        // 提取组件信息
        const componentInfo = extractComponentInfo(code, componentName, componentDir)
        if (!componentInfo) {
          throw new Error('组件信息提取失败')
        }

        console.log('提取的组件信息:', JSON.stringify(componentInfo, null, 2))
        components[componentName] = componentInfo

        // 生成新的Inline.vue文件
        generateInlineComponent(componentDir, componentInfo)

        console.log(`组件 ${componentName} 处理成功`)
      } catch (error) {
        const componentName = path.basename(path.dirname(path.join(CONFIG.componentsDir, file)))
        console.error(`处理组件 ${componentName} 时出错:`, error.message)
        errors.push({ component: componentName, error: error.message })
        continue
      }
    }

    if (Object.keys(components).length > 0) {
      // 写入配置文件
      writeConfig(components)
      // 生成索引文件
      generateIndex(components)
      console.log('\n组件配置生成成功!')
    }

    if (errors.length > 0) {
      console.log('\n以下组件处理失败:')
      errors.forEach(({ component, error }) => {
        console.log(`- ${component}: ${error}`)
      })
    }

  } catch (error) {
    console.error('生成组件配置失败:', error)
  }
}

// 提取组件信息
function extractComponentInfo(code, componentName, componentDir) {
  try {
    const template = extractTemplate(code)
    if (!template) {
      throw new Error('模板内容为空')
    }
    console.log('提取的template:', template.substring(0, 100) + '...')

    // 提取组件描述
    const description = extractDescription(code) || componentName
    console.log('组件描述:', description)

    const examples = extractExamples(template)
    if (!examples.length) {
      throw new Error('未找到有效的组件示例')
    }
    console.log('提取的示例数量:', examples.length)

    const items = {}

    // 创建examples目录
    const examplesDir = path.join(componentDir, 'examples')
    if (!fs.existsSync(examplesDir)) {
      fs.mkdirSync(examplesDir, { recursive: true })
    }

    examples.forEach((example, index) => {
      try {
        const key = `${componentName.toLowerCase()}-${example.name || index + 1}`
        const fileName = `${key}.html`

        console.log(`保存示例 ${key} 到文件:`, fileName)

        // 保存HTML文件
        fs.writeFileSync(
          path.join(examplesDir, fileName),
          example.template,
          'utf-8'
        )

        items[key] = {
          label: example.label || `${componentName} ${index + 1}`,
          description: example.description || '',
          file: `examples/${fileName}`
        }
      } catch (error) {
        console.error(`保存示例 ${index + 1} 失败:`, error.message)
      }
    })

    return {
      label: description,
      items
    }
  } catch (error) {
    console.error(`提取组件 ${componentName} 信息失败:`, error.message)
    return null
  }
}

// 提取template内容
function extractTemplate(code) {
  const match = code.match(/<template>([\s\S]*)<\/template>/)
  if (!match) {
    console.warn('未找到template标签')
    return ''
  }
  return match[1].trim()
}

// 提取组件示例
function extractExamples(template) {
  const examples = []

  // 匹配注释中的组件说明，忽略最外层div
  const cleanTemplate = template.replace(/^<div[^>]*>([\s\S]*)<\/div>$/s, '$1').trim()
  console.log('清理后的模板:', cleanTemplate.substring(0, 100) + '...')

  const commentRegex = /<!--\s*(.*?)\s*-->\s*([^]*?)(?=<!--|\s*$)/gs
  let match

  while ((match = commentRegex.exec(cleanTemplate)) !== null) {
    const comment = match[1].trim()
    const template = match[2].trim()

    console.log('找到注释:', comment)

    // 跳过region标记
    if (comment.startsWith('#region') || comment.startsWith('#endregion')) {
      console.log('跳过region标记')
      continue
    }

    // 如果模板不为空，则添加到示例中
    if (template) {
      const example = {
        name: comment.toLowerCase().replace(/\s+/g, '-'),
        label: comment,
        template: template
      }
      examples.push(example)
      console.log('添加示例:', example.name)
    }
  }

  return examples
}

// 新增函数：提取组件描述
function extractDescription(code) {
  // 尝试从单行注释中提取描述
  const singleLineMatch = code.match(/\/\/\s*@description\s+(.+)/)
  if (singleLineMatch) {
    return singleLineMatch[1].trim()
  }

  // 尝试从多行注释中提取描述
  const multiLineMatch = code.match(/\/\*\*?\s*@description\s+([^*]+)\*\//)
  if (multiLineMatch) {
    return multiLineMatch[1].trim()
  }

  // 尝试从script setup中提取描述
  const scriptMatch = code.match(/<script[^>]*>\s*\/\*\*?\s*@description\s+([^*]+)\*\//)
  if (scriptMatch) {
    return scriptMatch[1].trim()
  }

  return null
}

function genName(key) {
  const name = key.split('-')?.[0]
  return name.charAt(0).toUpperCase() + name.slice(1)
}

// 修改生成Inline组件的函数
function generateInlineComponent(componentDir, componentInfo) {
  try {
    const template = `<script setup>
${Object.entries(componentInfo.items).map(([key, item], index) => `import ${genName(key)}${index + 1} from './${item.file}?raw'`).join('')}
</script>

<template>
  <div class="flex flex-col gap-4">
    ${Object.entries(componentInfo.items).map(([key, item], index) => `
    <!-- ${item.label} -->
    <div v-html="${genName(key)}${index + 1}"></div>
    `).join('')}
  </div>
</template>

`

    const filePath = path.join(componentDir, 'Inline.vue')
    console.log('生成Inline组件:', filePath)
    fs.writeFileSync(filePath, template, 'utf-8')
  } catch (error) {
    console.error('生成Inline组件失败:', error.message)
  }
}

// 写入配置文件
function writeConfig(config) {
  try {
    const outputDir = path.dirname(CONFIG.outputPath)
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true })
    }

    console.log('写入配置文件:', CONFIG.outputPath)
    fs.writeFileSync(CONFIG.outputPath, JSON.stringify(config, null, 2), 'utf-8')
  } catch (error) {
    console.error('写入配置文件失败:', error.message)
  }
}

// 生成组件索引文件
function generateIndex(components) {
  try {
    const indexPath = path.join(CONFIG.componentsDir, 'index.js')
    const indexContent = `// 此文件由脚本自动生成，请勿手动修改
export const components = ${JSON.stringify(components, null, 2)}
`
    console.log('生成索引文件:', indexPath)
    fs.writeFileSync(indexPath, indexContent, 'utf-8')
  } catch (error) {
    console.error('生成索引文件失败:', error.message)
  }
}

// 执行生成
generateComponents()
