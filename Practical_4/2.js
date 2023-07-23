const url = require('url');
const querystring = require('querystring');

function extractKeyValuePairsFromURL(urlString) {
  const parsedURL = url.parse(urlString);
  const queryObject = querystring.parse(parsedURL.query);

  console.log('Extracted Key-Value Pairs:');
  for (const key in queryObject) {
    console.log(`${key}: ${queryObject[key]}`);
  }

  return queryObject;
}

// Example usage:
const inputURL = 'https://www.example.com/search?query=apple&category=fruits';
extractKeyValuePairsFromURL(inputURL);
