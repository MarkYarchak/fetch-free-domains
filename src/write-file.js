const path = require('path');
const fs = require('fs');

// create folders recursive before write file
function writeDomainsFileRecursive(filename, content) {
  try {  
    const writeDirectoryPathName = path.resolve(__dirname, path.dirname(filename));
    if (!fs.existsSync(writeDirectoryPathName)) fs.mkdirSync(writeDirectoryPathName);
    fs.writeFileSync(path.resolve(__dirname, filename), content, { encoding: 'utf8' });
  } catch (e) {
    console.log(e.message);
  }
}

module.exports = {
  writeDomainsFileRecursive,
};
