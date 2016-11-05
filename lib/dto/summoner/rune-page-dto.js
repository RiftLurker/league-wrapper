'use strict';

const convert = require('../../util/convert.js');

const RuneSlotDto = require('./rune-slot-dto.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/summoner~RunePageDto
 * @property {boolean} current - Indicates if the page is the current page.
 * @property {number} id - Rune page ID.
 * @property {string} name - Rune page name.
 * @property {Array.<module:LeagueWrapper/dto/summoner~RuneSlotDto>} slots - Collection of rune slots associated with the rune page.
 *
 */
class RunePageDto {
  constructor(data) {
    this.current = convert(data.current, Boolean);
    this.id = convert(data.id, Number);
    this.name = convert(data.name, String);
    this.slots = convert(data.slots, [RuneSlotDto]);
  }
}

exports = module.exports = RunePageDto;
