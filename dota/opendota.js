const request = require('request');

const getRecentMatches = steamid32 => {
  const url = `https://api.opendota.com/api/players/${steamid32}/recentmatches?api_key=${process.env.OPENDOTA_API_KEY}`;
  return new Promise((resolve, reject) => {
    request(url, (err, res, body) => {
      if (err) {
        console.log(err);
        return reject(err);
      }
      resolve(body);
    })
  })
};

const getMatches = steamid32 => {
  const url = `https://api.opendota.com/api/players/${steamid32}/matches?api_key=${process.env.OPENDOTA_API_KEY}`;
  return new Promise((resolve, reject) => {
    request(url, (err, res, body) => {
      if (err) {
        console.log(err);
        return reject(err);
      }
      resolve(body);
    })
  })
};

const getWinLoss = steamid32 => {
  const url = `https://api.opendota.com/api/players/${steamid32}/wl?api_key=${process.env.OPENDOTA_API_KEY}`;
  return new Promise((resolve, reject) => {
    request(url, (err, res, body) => {
      if (err) {
        console.log(err);
        return reject(err);
      }
      resolve(body);
    })
  })
};

module.exports = {
  getRecentMatches,
  getMatches,
  getWinLoss
};