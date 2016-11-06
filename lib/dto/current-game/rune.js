'use strict';

const convert = require('../../util/convert.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/currentGame~Rune
 * @property {number} count - The count of this rune used by the participant
 * @property {number} runeId - The ID of the rune
 */
class Rune {
  constructor(data) {
    this.count = convert(data.count, Number);
    this.runeId = convert(data.runeId, Number);
  }
}

exports = module.exports = Rune;
