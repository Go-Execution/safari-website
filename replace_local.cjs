const fs = require('fs');
const path = require('path');

function getUnsplashUrls(dir, urls = new Set()) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      getUnsplashUrls(fullPath, urls);
    } else if (fullPath.endsWith('.ts') || fullPath.endsWith('.tsx')) {
      const content = fs.readFileSync(fullPath, 'utf8');
      const regex = /https:\/\/images\.unsplash\.com\/photo-[a-zA-Z0-9-]+(?:\?[a-zA-Z0-9=&]+)?/g;
      let match;
      while ((match = regex.exec(content)) !== null) {
        urls.add(match[0]);
      }
    }
  }
  return urls;
}

function updateFiles(dir, map) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      updateFiles(fullPath, map);
    } else if (fullPath.endsWith('.ts') || fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let modified = false;
      for (const [url, localPath] of Object.entries(map)) {
        const escaped = url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
        const regex = new RegExp(escaped, 'g');
        if (regex.test(content)) {
          content = content.replace(regex, localPath);
          modified = true;
        }
      }
      if (modified) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log('Updated: ' + fullPath);
      }
    }
  }
}

const urls = Array.from(getUnsplashUrls(path.join(__dirname, 'src')));
const map = {};
for (let i = 0; i < urls.length; i++) {
  // Use modulo just in case there are more than 8 urls
  const idx = (i % 8) + 1;
  map[urls[i]] = `/assets/images/placeholders/placeholder-${idx}.jpg`;
}

updateFiles(path.join(__dirname, 'src'), map);
console.log('Finished updating URLs');
