'use strict';

const convert = require('../../util/convert.js');

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
    // @todo
  }
}

exports = module.exports = MasteryPageDto;
