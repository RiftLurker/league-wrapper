'use strict';

const convert = require('../../util/convert.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/currentGame~Mastery
 * @property {number} masteryId - The ID of the mastery
 * @property {number} rank - The number of points put into this mastery by the user
 */
class Mastery {
  constructor(data) {
    this.masteryId = convert(data.masteryId, Number);
    this.rank = convert(data.rank, Number);
  }
}

exports = module.exports = Mastery;
