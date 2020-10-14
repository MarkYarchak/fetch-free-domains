const path = require('path');
const fs = require('fs');

// create folders recursive before write file
function writeDomainsFileRecursive(filename, content) {
  try {
    const writeDirectoryPath = path.resolve(__dirname, '../open-domains/');
    if (!fs.existsSync(writeDirectoryPath)) fs.mkdirSync(writeDirectoryPath);
    fs.writeFileSync(path.resolve(writeDirectoryPath, filename), content, { encoding: 'utf8' });
  } catch (e) {
    console.log(e.message);
  }
}

module.exports = {
  writeDomainsFileRecursive,
};
