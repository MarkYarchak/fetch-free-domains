const path = require('path');
const fs = require('fs');

// create folders recursive before write file
function writeDomainsFileRecursive(filename, content) {
  try {
    const writeDirectoryPath = path.resolve(__dirname, '../open-domains/');
    if (!fs.existsSync(writeDirectoryPath)) fs.mkdirSync(writeDirectoryPath);
    const domainsFilePath = path.resolve(writeDirectoryPath, filename);
    fs.writeFileSync(domainsFilePath, content, { encoding: 'utf8' });
    console.log(`The new file was created by the path:\n${domainsFilePath}`);
  } catch (e) {
    console.log(e.message);
  }
}

module.exports = {
  writeDomainsFileRecursive,
};
