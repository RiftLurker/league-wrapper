'use strict';

const convert = require('../../util/convert.js');

const MasteryPageDto = require('./mastery-page-dto.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/summoner~MasteryPagesDto
 * @property {Array.<module:LeagueWrapper/dto/summoner~MasteryPageDto>} pages - Collection of mastery pages associated with the summoner.
 * @property {number} summonerId - Summoner ID.
 */
class MasteryPagesDto {
  constructor(data) {
    this.pages = convert(data.pages, [MasteryPageDto]);
    this.summonerId = convert(data.summonerId, Number);
  }
}

exports = module.exports = MasteryPagesDto;
