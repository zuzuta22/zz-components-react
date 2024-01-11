import * as fs from 'fs';
import * as path from 'path';
import getTitleAndThumbnail from './getTitleAndThumbnail';

function processFilesInFolder(folderPath: string): Array<{ title: string; thumbnail: string }> {
  const results: Array<{ title: string; thumbnail: string }> = [];

  function processFile(filePath: string): void {
    const result = getTitleAndThumbnail(filePath);
    if (result) {
      results.push(result);
    }
  }

  function processDirectory(dirPath: string): void {
    const files = fs.readdirSync(dirPath);

    files.forEach(file => {
      const filePath = path.join(dirPath, file);
      const stat = fs.statSync(filePath);

      if (stat.isDirectory()) {
        // サブディレクトリの場合、再帰的に処理
        processDirectory(filePath);
      } else if (path.extname(filePath).toLowerCase() === '.md' || path.extname(filePath).toLowerCase() === '.mdx') {
        // .md もしくは .mdx ファイルの場合、処理
        processFile(filePath);
      }
    });
  }

  // 開始
  processDirectory(folderPath);

  return results;
}

function generateGalleryFile(folderPath: string, results: Array<{ title: string; thumbnail: string }>): void {
  const galleryFilePath = path.join(folderPath, 'index.mdx');
  const galleryContent = generateGalleryContent(results);

  fs.writeFileSync(galleryFilePath, galleryContent, 'utf-8');
  console.log(`Gallery file generated at: ${galleryFilePath}`);
}

function generateGalleryContent(results: Array<{ title: string; thumbnail: string }>): string {
  const galleryHeader = '# Gallery\n\n| component | image |\n| --- | --- |\n';
  const galleryRows = results
    .map(result => `| [${result.title}](${result.title}) | ${result.thumbnail || 'N/A'} |`)
    .join('\n');

  return `${galleryHeader}${galleryRows}\n`;
}

// 使用例
const folderPaths = ['docs/components/composites/', 'docs/components/ui/buttons/', 'docs/components/ui/labels/', 'docs/components/ui/links/', 'docs/components/ui/texts/', 'docs/components/ui/titles/'];

folderPaths.forEach(folderPath => {
  const results = processFilesInFolder(folderPath);

  if (results.length > 0) {
    generateGalleryFile(folderPath, results);
  } else {
    console.log(`No files found with title and thumbnail in ${folderPath}.`);
  }
});
