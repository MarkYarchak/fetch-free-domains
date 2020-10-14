const { argv } = require('yargs');
const logUpdate = require('log-update');

function updateDomainsFetchIterator(iterationIndex, maxIterationsCount) {
  logUpdate(`Checked domain names: ${iterationIndex} / ${maxIterationsCount}`);
}

function getDomainNameLength() {
  let domainNameLength = 7;
  if (argv.length) {
    validateDomainLength(argv.length);
    domainNameLength = argv.length;
  }
  else if (argv.l) {
    validateDomainLength(argv.l);
    domainNameLength = argv.l;
  }
  console.log(`Start checking available domains list with domain name length ${domainNameLength}`);
  return domainNameLength;
}

function validateDomainLength(length) {
  if (typeof length !== 'number') {
    throw new Error('You can run command with "--length <DN_length>" flag or shorter "-l <DN_length>"');
  }
  if (length < 4) {
    console.error('Sorry, there are only paid domain names with this length');
    process.exit(0);
  }
  if (length > 9 && length < 2) throw new Error('Invalid domains name length, must be from 4 to 8');
}

module.exports = {
  updateDomainsFetchIterator,
  getDomainNameLength,
};
