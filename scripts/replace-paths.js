const fs = require('fs');
const path = require('path');

// 配置要处理的目录
const DOCS_DIR = path.join(__dirname, '../docs/ui-components');

// 创建正则表达式匹配模式
const OLD_PATH_REGEX = /ui-components\/([^/]+)\/(CssClass\.vue|index\.css)/g;
const REPLACEMENT = 'ui-components/css-class/$1/$2';

// 递归处理目录
function processDirectory(dirPath) {
  const files = fs.readdirSync(dirPath, { withFileTypes: true });

  files.forEach(file => {
    const fullPath = path.join(dirPath, file.name);

    if (file.isDirectory()) {
      processDirectory(fullPath);
    } else if (file.isFile() && file.name.endsWith('.md')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      const newContent = content.replace(OLD_PATH_REGEX, REPLACEMENT);

      if (newContent !== content) {
        fs.writeFileSync(fullPath, newContent);
        console.log(`已更新文件: ${path.relative(DOCS_DIR, fullPath)}`);
      }
    }
  });
}

// 执行替换
processDirectory(DOCS_DIR);
console.log('路径替换完成！');
