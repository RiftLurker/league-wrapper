'use strict';

const convert = require('../../util/convert.js');

const MatchReference = require('./match-reference.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/matchlist~MatchList
 * @property {number} endIndex
 * @property {Array.<module:LeagueWrapper/dto/matchlist~MatchReference>} matches
 * @property {number} startIndex
 * @property {number} totalGames
 */
class MatchList {
  constructor(data) {
    this.endIndex = convert(data.endIndex, Number);
    this.matches = convert(data.matches, [MatchReference]);
    this.startIndex = convert(data.startIndex, Number);
    this.totalGames = convert(data.totalGames, Number);
  }
}

exports = module.exports = MatchList;
