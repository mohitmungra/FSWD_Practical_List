const fs = require('fs');
const path = require('path');

// Create a file
fs.writeFileSync('example.txt', 'This is an example file.');

// Read a file
const fileContent = fs.readFileSync('example.txt', 'utf8');
console.log('File Content:', fileContent);

// Append to a file
fs.appendFileSync('example.txt', '\nThis is additional content.');

// Read the updated file
const updatedContent = fs.readFileSync('example.txt', 'utf8');
console.log('Updated Content:', updatedContent);

// Delete a file
fs.unlinkSync('example.txt');
console.log('File deleted.');

// Rename a file
fs.renameSync('example.txt', 'renamed.txt');
console.log('File renamed.');

// List files and directories
const dirPath = '.';
const filesAndDirs = fs.readdirSync(dirPath);
console.log('Files and Directories:');
filesAndDirs.forEach((item) => {
  const fullPath = path.join(dirPath, item);
  const stats = fs.statSync(fullPath);
  if (stats.isDirectory()) {
    console.log('Directory:', item);
  } else {
    console.log('File:', item);
  }
});
