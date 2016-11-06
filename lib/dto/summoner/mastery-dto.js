'use strict';

const convert = require('../../util/convert.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/summoner~MasteryDto
 * @property {number} id - Mastery ID. For static information correlating to masteries, please refer to the LoL Static Data API.
 * @property {number} rank - Mastery rank (i.e., the number of points put into this mastery).
 */
class MasteryDto {
  constructor(data) {
    this.id = convert(data.id, Number);
    this.rank = convert(data.rank, Number);
  }
}

exports = module.exports = MasteryDto;
