'use strict';

const convert = require('../../util/convert.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/summoner~RunePageDto
 * @property {boolean} current - Indicates if the page is the current page.
 * @property {number} id - Rune page ID.
 * @property {string} name - Rune page name.
 * @property {Array.<module:LeagueWrapper/dto/summoner~RuneDto>} slots - Collection of rune slots associated with the rune page.
 *
 */
class RunePageDto {
  constructor(data) {
    // @todo
  }
}

exports = module.exports = RunePageDto;
