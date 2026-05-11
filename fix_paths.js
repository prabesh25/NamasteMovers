const fs = require('fs');
const glob = require('fast-glob');
const path = require('path');

const files = glob.sync('src/**/*.js');
const imagePatterns = /\.(jpg|jpeg|png|webp|svg|gif)$/i;

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  // Find all src="/..." or src={'/...'} and update if it's an image
  content = content.replace(/src=["']\/([^"']+)["']/g, (match, filepath) => {
    if (imagePatterns.test(filepath) && !filepath.startsWith('images/')) {
      changed = true;
      return `src="/images/${filepath}"`;
    }
    return match;
  });

  if (changed) {
    fs.writeFileSync(file, content);
    console.log(`Updated paths in ${file}`);
  }
}

// We should also check for any literal strings, e.g. in Arrays of image objects
const objectFiles = glob.sync('src/**/*.js');
for (const file of objectFiles) {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;
  
  content = content.replace(/['"]\/([a-zA-Z0-9_\-\.\ \(\)]+\.(jpg|jpeg|png|webp|svg|gif))['"]/g, (match, filepath) => {
    if (!filepath.startsWith('images/')) {
      changed = true;
      let quote = match.charAt(0);
      return `${quote}/images/${filepath}${quote}`;
    }
    return match;
  });
  
  if (changed) {
    fs.writeFileSync(file, content);
    console.log(`Updated objects in ${file}`);
  }
}

