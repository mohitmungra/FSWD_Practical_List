const readline = require('readline');
const urlModule = require('url');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
function resolveAbsoluteURL(baseURL, relativePath) {
  try {
    const absoluteURL = new URL(relativePath, baseURL);
    return absoluteURL.href;
  } catch (err) {
    return null; // Return null if there's an error in resolving the URL
  }
}
rl.question('Please enter the base URL: ', (baseURL) => {
  rl.question('Please enter the relative path: ', (relativePath) => {
    const absoluteURL = resolveAbsoluteURL(baseURL, relativePath);
    if (absoluteURL) {
      console.log('Absolute URL:', absoluteURL);
    } else {
      console.error('Invalid input. Unable to resolve the absolute URL.');
    }

    rl.close();
  });
})
