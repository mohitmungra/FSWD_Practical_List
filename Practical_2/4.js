const fs = require('fs');

fs.readFile('mohit.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  const lines = data.split('\n');

  console.log('Filtered Students:');
  lines.forEach((line) => {
    const [name, id, cgpa] = line.split(' ');
    if (id.includes('MA') && parseFloat(cgpa) > 7) {
      console.log(line);
    }
  });
});
