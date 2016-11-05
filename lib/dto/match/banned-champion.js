'use strict';

const convert = require('../../util/convert.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/match~BannedChampion
 * @property {number} championId - Banned champion ID
 * @property {number} pickTurn - Turn during which the champion was banned
 */
class BannedChampion {
  constructor(data) {
    this.championId = convert(data.championId, Number);
    this.pickTurn = convert(data.pickTurn, Number);
  }
}

exports = module.exports = BannedChampion;
