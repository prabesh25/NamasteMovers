const fs = require('fs');
const glob = require('fast-glob');
const files = glob.sync('src/**/*.js');

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  if (content.indexOf('import Image') !== -1) {
    // Remove ALL instances of import image at top
    content = content.replace(/^import Image from "next\/image";\n/gm, '');
    
    // Find where use client is
    if (/^['"]use client['"];?/m.test(content)) {
       content = content.replace(/^(['"]use client['"];?)/m, '$1\nimport Image from "next/image";');
    } else {
       content = 'import Image from "next/image";\n' + content;
    }
    fs.writeFileSync(file, content);
  }
}
