const path = require('path');

function extractDirectoryAndBaseName(filePath) {
  // Get the directory name and base name using the path module
  const directoryName = path.dirname(filePath);
  const baseName = path.basename(filePath);

  return {
    directoryName,
    baseName,
  };
}

// Example usage
const filePath = '/path/to/folder/file1.txt';
const { directoryName, baseName } = extractDirectoryAndBaseName(filePath);

console.log('Directory Name:', directoryName);
console.log('Base Name:', baseName);