const { fetchWords } = require('./fetch-words');
const { getDomainsList } = require('./get-available-domains');
const { updateDomainsFetchIterator, getDomainNameLength } = require('./console-manager');
const { writeDomainsFileRecursive } = require('./write-file');

const domainNameLength = getDomainNameLength();
let openDomainsString = '';

async function boot() {
  let domainsFetchIteration = 0;
  const wordsList = await fetchWords(domainNameLength);
  updateDomainsFetchIterator(domainsFetchIteration, wordsList.length);
  for await (let word of wordsList) {
    await iterableDomainsFetch(word);
    domainsFetchIteration++;
    updateDomainsFetchIterator(domainsFetchIteration, wordsList.length);
  }
  writeFileWithDomains('Successfully completed. Saving available domains list...');
}

async function iterableDomainsFetch(domainName) {
  try {
    const domainsList = await getDomainsList(domainName);
    const domainsString = domainsListToString(domainsList);
    openDomainsString += domainsString;
  } catch (e) {
    writeFileWithDomains('Something went wrong, saving received domains');
  }
}

function domainsListToString(list) {
  return list
    .map(({ domain, tld }) => domain + tld)
    .reduce((acc, val) => acc + `${val}\n`, '');
}

function writeFileWithDomains(consoleMessage) {
  console.log(consoleMessage);
  writeDomainsFileRecursive(`Domain-names_L${domainNameLength}.txt`, openDomainsString);
  process.exit(0);
}

module.exports = {
  boot,
};
