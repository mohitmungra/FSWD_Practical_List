const fs = require('fs');

function checkFileExistsAsync(filePath) {
  // Check if the file exists asynchronously using fs.access()
  fs.access(filePath, fs.constants.F_OK, (err) => {
    if (err) {
      console.log('Error: The file does not exist.');
    } else {
      console.log('Success: The file exists.');
    }
  });
}

// Example usage
const filePath = '/path/to/file.txt';
checkFileExistsAsync(filePath);