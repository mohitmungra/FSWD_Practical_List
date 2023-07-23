const fs = require('fs');
const path = require('path');

function areFilesSame(filePath1, filePath2) {
  // Resolve the absolute paths of the input files
  const absolutePath1 = path.resolve(filePath1);
  const absolutePath2 = path.resolve(filePath2);

  // Check if the files exist
  if (!fs.existsSync(absolutePath1) || !fs.existsSync(absolutePath2)) {
    return false;
  }

  // Compare the file paths
  return absolutePath1 === absolutePath2;
}

// Example usage
const file1 = 'D:\file1.txt';
const file2 = 'D:\file2.txt';

if (areFilesSame(file1, file2)) {
  console.log('The two file paths refer to the same file.');
} else {
  console.log('The two file paths refer to different files.');
}