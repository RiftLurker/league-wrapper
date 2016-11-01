'use strict';

const convert = require('../../util/convert.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/currentGame~BannedChampion
 * @property {number} championId
 * @property {number} pickTurn
 * @property {number} teamId
 */
class BannedChampion {
  constructor(data) {
    this.championId = convert(data.championId, Number);
    this.pickTurn = convert(data.pickTurn, Number);
    this.teamId = convert(data.teamId, Number);
  }
}

exports = module.exports = BannedChampion;
