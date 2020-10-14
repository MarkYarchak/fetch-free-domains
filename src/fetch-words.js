const { JSDOM } = require('jsdom');

async function fetchWords(wordsLength /* can be from 2 to 8 */) {
  try {
    console.log('Start fetching words for domain names list...');
    const result = await JSDOM.fromURL(`https://www.thefreedictionary.com/${wordsLength}-letter-words.htm`);
    const words = [...result.window.document.querySelectorAll('.TCont > ul > li > a')].map((el) => el.innerHTML);
    console.log('Words list fetching completed');
    return words;
  } catch (e) {
    console.log('Failed to fetch words list. Please, check your network');
    process.exit(0);
  }
}

module.exports = {
  fetchWords,
};
