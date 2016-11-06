'use strict';

const convert = require('../../util/convert.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/match~Mastery
 * @property {number} masteryId - Mastery ID
 * @property {number} rank - 	Mastery rank
 */
class Mastery {
  constructor(data) {
    this.masteryId = convert(data.masteryId, Number);
    this.rank = convert(data.rank, Number);
  }
}

exports = module.exports = Mastery;
