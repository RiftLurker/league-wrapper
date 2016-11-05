'use strict';

const convert = require('../../util/convert.js');

const ChampionDto = require('./champion-dto.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/lolStaticData~ChampionListDto
 * @property {Object.<module:LeagueWrapper/dto/lolStaticData~ChampionDto>} data
 * @property {string} format
 * @property {Object.<string>} keys
 * @property {string} type
 * @property {string} version
 */
class ChampionListDto {
  constructor(data) {
    this.data = convert(data.data, [String, ChampionDto]);
    this.format = convert(data.format, String);
    this.keys = convert(data.keys, [String, String]);
    this.type = convert(data.type, String);
    this.version = convert(data.version, String);
  }
}

exports = module.exports = ChampionListDto;
