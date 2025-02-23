const fs = require('fs');
const path = require('path');

function renameScssFiles(directory) {
    // 读取目录内容
    fs.readdir(directory, { withFileTypes: true }, (err, files) => {
        if (err) {
            console.error('读取目录出错:', err);
            return;
        }

        files.forEach(file => {
            const fullPath = path.join(directory, file.name);

            if (file.isDirectory()) {
                // 如果是目录，递归处理
                renameScssFiles(fullPath);
            } else if (file.isFile() && file.name.endsWith('.scss')) {
                // 如果是 .scss 文件，进行重命名
                const newPath = fullPath.replace('.scss', '.css');
                fs.rename(fullPath, newPath, err => {
                    if (err) {
                        console.error(`重命名 ${fullPath} 失败:`, err);
                    } else {
                        console.log(`已将 ${fullPath} 重命名为 ${newPath}`);
                    }
                });
            }
        });
    });
}

// 从当前目录开始处理
renameScssFiles('./packages');
