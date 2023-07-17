const os = require('os');

// Get the current user's username
const username = os.userInfo().username;

// Get the home directory of the current user
const homeDirectory = os.homedir();

// Get the operating system platform
const platform = os.platform();

// Display the information
console.log('Username:', username);
console.log('Home Directory:', homeDirectory);
console.log('Platform:', platform);
