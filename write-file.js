const path = require('path');
const fs = require('fs');

// create folders recursive before write file
function writeDomainsFileRecursive(filename, content) {
  const folders = filename.split(path.sep).slice(0, -1);
  folders.reduce((last, folder) => {
    const folderPath = last ? last + path.sep + folder : folder;
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath);
    }
    return folderPath;
  });

  fs.writeFileSync(filename, content, { encoding: 'utf8' });
}

module.exports = {
  writeDomainsFileRecursive,
};
