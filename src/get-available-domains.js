const axios = require('axios');
const FormData = require('form-data');

async function getDomainsList(domainName) {
  try {
    const formData = new FormData();
    formData.append('domain', domainName);

    const response = await axios.default.post('https://my.freenom.com/includes/domains/fn-available.php', formData, {
      headers: formData.getHeaders(),
    });

    return response.data.free_domains.filter((domain) => domain.status === 'AVAILABLE' && domain.type === 'FREE');

  } catch (e) {
    console.log(e.message);
    throw e;
  }
}

module.exports = {
  getDomainsList,
};
