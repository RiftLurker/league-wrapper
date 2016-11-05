'use strict';

const convert = require('../../util/convert.js');

const SummonerSpellDto = require('./summoner-spell-dto.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/lolStaticData~SummonerSpellListDto
 * @property {Object.<module:LeagueWrapper/dto/lolStaticData~SummonerSpellDto>} data
 * @property {string} type
 * @property {string} version
 */
class SummonerSpellListDto {
  constructor(data) {
    this.data = convert(data.data, [String, SummonerSpellDto]);
    this.type = convert(data.type, String);
    this.version = convert(data.version, String);
  }
}
exports = module.exports = SummonerSpellListDto;
