'use strict';

const convert = require('../../util/convert.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/match~Rune
 * @property {number} rank - Rune rank
 * @property {number} runeId - Rune ID
 */
class Rune {
  constructor(data) {
    this.rank = convert(data.rank, Number);
    this.runeId = convert(data.runeId, Number);
  }
}

exports = module.exports = Rune;
