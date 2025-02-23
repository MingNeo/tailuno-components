const fs = require('fs');
const path = require('path');

// 配置路径
const BASE_DIR = path.join(__dirname, '../packages/ui-components');
const TARGET_DIR = path.join(BASE_DIR, 'css-class');

// 创建目录的替代方法
function ensureDirSync(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

// 移动文件的替代方法
function moveFileSync(source, target) {
  try {
    fs.renameSync(source, target);
  } catch (err) {
    if (err.code === 'EXDEV') {
      // 跨设备移动时使用复制+删除
      fs.copyFileSync(source, target);
      fs.unlinkSync(source);
    } else {
      throw err;
    }
  }
}

// 主逻辑
function main() {
  ensureDirSync(TARGET_DIR);

  fs.readdirSync(BASE_DIR, { withFileTypes: true }).forEach(dirent => {
    if (dirent.isDirectory()) {
      const componentName = dirent.name;
      const componentPath = path.join(BASE_DIR, componentName);
      const targetComponentPath = path.join(TARGET_DIR, componentName);

      const cssClassPath = path.join(componentPath, 'CssClass.vue');

      if (fs.existsSync(cssClassPath)) {
        ensureDirSync(targetComponentPath);

        // 处理相关文件
        ['CssClass.vue', 'index.css', 'variants.vue'].forEach(file => {
          const source = path.join(componentPath, file);
          const target = path.join(targetComponentPath, file);

          if (fs.existsSync(source)) {
            moveFileSync(source, target);
            console.log(`Moved: ${path.relative(BASE_DIR, source)} -> ${path.relative(BASE_DIR, target)}`);
          }
        });

        // 更新引用路径
        const newCssPath = path.join(targetComponentPath, 'CssClass.vue');
        if (fs.existsSync(newCssPath)) {
          const content = fs.readFileSync(newCssPath, 'utf8')
            .replace(/(@import\s+['"])(\.?\/?)/g, `$1../../${componentName}/`);
          fs.writeFileSync(newCssPath, content);
        }
      }
    }
  });

  console.log('重构完成，未使用第三方依赖！');
}

main();
