const fs = require('fs');
const glob = require('fast-glob');
const files = glob.sync('src/**/*.js');

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  if (content.indexOf('import Image from "next/image";') !== -1 && content.indexOf('"use client";') !== -1) {
    // If "use client" exists but is under the import, we need to swap them
    // Actually simpler: strip all 'import Image from "next/image";\n'
    // then insert it after "use client";
    content = content.replace('import Image from "next/image";\n', '');
    if (content.includes('"use client";')) {
      content = content.replace('"use client";', '"use client";\nimport Image from "next/image";\n');
    } else if (content.includes("'use client';")) {
      content = content.replace("'use client';", "'use client';\nimport Image from \"next/image\";\n");
    } else {
      content = 'import Image from "next/image";\n' + content;
    }
    fs.writeFileSync(file, content);
    console.log('Fixed use client order ' + file);
  }
}
