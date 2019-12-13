const axios = require('axios');
const parser = require('xml2json');


function getAnimeData(req, res) {
  axios.get(`https://cdn.animenewsnetwork.com/encyclopedia/api.xml?title=~${req.params.searchText}`)
    .then((response) => res.send(parser.toJson(response.data)))
    .catch((error) => {
      console.error(error);
      res.send(error);
    });
}


module.exports = { getAnimeData };
