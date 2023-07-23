const path = require('path');


function getFileExtension(filePath) {
  // Get the file extension using the path module
  const extension = path.extname(filePath);


  // Remove the dot from the extension
  return extension.slice(1);
}


// Example usage
const filePath = '/path/to/file.txt';
const extension = getFileExtension(filePath);
console.log('File extension:', extension);