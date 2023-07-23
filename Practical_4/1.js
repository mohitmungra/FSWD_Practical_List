const readline = require('readline');
const urlModule = require('url');

// Create an interface to read user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Function to parse and display URL components
function parseURL(url) {
  const parsedURL = urlModule.parse(url, true);

  console.log('\nURL Components:');
  console.log('Protocol:', parsedURL.protocol);
  console.log('Host:', parsedURL.host);
  console.log('Path:', parsedURL.pathname);

  console.log('\nQuery Parameters:');
  const queryParameters = parsedURL.query;
  for (const key in queryParameters) {
    console.log(key + ':', queryParameters[key]);
  }
}

// Prompt user for URL input
rl.question('Enter a URL: ', (url) => {
  parseURL(url);
  rl.close();
});
