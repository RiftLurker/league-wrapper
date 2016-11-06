'use strict';

const convert = require('../../util/convert.js');

const MasteryDto = require('./mastery-dto.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/summoner~MasteryPageDto
 * @property {boolean} current - Indicates if the mastery page is the current mastery page.
 * @property {number} id - Mastery page ID.
 * @property {Array.<module:LeagueWrapper/dto/summoner~MasteryDto>} masteries - Collection of masteries associated with the mastery page.
 * @property {string} name - Mastery page name.
 */
class MasteryPageDto {
  constructor(data) {
    this.current = convert(data.current, Boolean);
    this.id = convert(data.id, Number);
    this.masteries = convert(data.masteries, [MasteryDto]);
    this.name = convert(data.name, String);
  }
}

exports = module.exports = MasteryPageDto;
