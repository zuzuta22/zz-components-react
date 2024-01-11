import * as fs from 'fs';
import * as path from 'path';


function getTitleAndThumbnail(filePath: string): { title: string; thumbnail: string } | null {
  try {
    // ファイルを同期的に読み込む
    const fileContent = fs.readFileSync(filePath, 'utf-8');

    // titleとthumbnailの正規表現パターン
    const titleRegex = /title:\s+"([^"]+)"/;
    const thumbnailRegex = /thumbnail:\s+"([^"]+)"/;

    // titleとthumbnailのマッチを検索
    const titleMatch = fileContent.match(titleRegex);
    const thumbnailMatch = fileContent.match(thumbnailRegex);

    if (titleMatch && thumbnailMatch) {
      // titleとthumbnailの値を取得
      const title = titleMatch[1];
      const thumbnail = thumbnailMatch[1];

      return { title, thumbnail };
    } else {
      console.error(`Title or thumbnail not found in file: ${filePath}`);
      return null;
    }
  } catch (error) {
    console.error(`Error reading file: ${filePath}`);
    return null;
  }
}

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

// 使用例
const folderPath = 'docs/components/atoms/';
const results = processFilesInFolder(folderPath);

if (results.length > 0) {
  results.forEach((result, index) => {
    console.log(`File ${index + 1}:`);
    console.log('Title:', result.title);
    console.log('Thumbnail:', result.thumbnail);
    console.log('----------------------');
  });
} else {
  console.log('No files found with title and thumbnail.');
}

export default getTitleAndThumbnail;