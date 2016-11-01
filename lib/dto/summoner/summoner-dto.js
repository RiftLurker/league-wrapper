'use strict';

const convert = require('../../util/convert.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/summoner~SummonerDto
 * @property {number} id - Summoner ID.
 * @property {string} name - Summoner name.
 * @property {number} profileIconId - ID of the summoner icon associated with the summoner.
 * @property {number revisionDate - Date summoner was last modified specified as epoch milliseconds. The following events will update this timestamp: profile icon change, playing the tutorial or advanced tutorial, finishing a game, summoner name change
 * @property {number} summonerLevel - Summoner level associated with the summoner.
 */
class SummonerDto {
  constructor(data) {
    // @todo
  }
}

exports = module.exports = SummonerDto;
