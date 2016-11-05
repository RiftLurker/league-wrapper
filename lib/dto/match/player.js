'use strict';

const convert = require('../../util/convert.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/match~Player
 * @property {string} matchHistoryUri - Match history URI
 * @property {number} profileIcon - Profile icon ID
 * @property {number} summonerId - Summoner ID
 * @property {string} summonerName - Summoner name
 */
class Player {
  constructor(data) {
    this.matchHistoryUri = convert(data.matchHistoryUri, String);
    this.profileIcon = convert(data.profileIcon, Number);
    this.summonerId = convert(data.summonerId, Number);
    this.summonerName = convert(data.summonerName, String);
  }
}

exports = module.exports = Player;
