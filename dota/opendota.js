const request = require('request');

const getAllMatches = steamid32 => {
  return new Promise((resolve, reject) => {
    let matchesToSave = [];
    getMatches(steamid32)
      .then(matches => {
        let fetchedMatches = JSON.parse(matches);
        fetchedMatches.forEach(m => {
          matchesToSave.push(m);
        })
        getRecentMatches(steamid32)
          .then(recentMatches => {
            let fetchedMatches = JSON.parse(recentMatches);
            fetchedMatches.forEach(m => {
              matchesToSave.push(m);
            })
            
            if(matchesToSave.length > 0) {
              resolve(matchesToSave);
            } else {
              reject("No matches");
            }
          })
      })
  })
}

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
  getAllMatches,
  getRecentMatches,
  getMatches,
  getWinLoss
};