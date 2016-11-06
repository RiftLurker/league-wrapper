'use strict';

const convert = require('../../util/convert.js');

const RunePageDto = require('./rune-page-dto.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/summoner~RunePagesDto
 * @property {Array.<module:LeagueWrapper/dto/summoner~RunePageDto>} pages - Collection of rune pages associated with the summoner.
 * @property {number} summonerId - Summoner ID.
 */
class RunePagesDto {
  constructor(data) {
    this.pages = convert(data.pages, [RunePageDto]);
    this.summonerId = convert(data.summonerId, Number);
  }
}

exports = module.exports = RunePagesDto;
