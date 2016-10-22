const LeagueWrapper = require('../index.js');

const apiKey = process.env.RIOTGAMES_API_KEY;

if (!apiKey) {
  throw new Error('No API key specified, check the documentation for usage');
}

const api = new LeagueWrapper(apiKey, {
  region: LeagueWrapper.Region.EUW
});

exports = module.exports = api;
