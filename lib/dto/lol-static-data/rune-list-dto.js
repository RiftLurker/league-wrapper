'use strict';

const convert = require('../../util/convert.js');

const BasicDataDto = require('./basic-data-dto.js');
const RuneDto = require('./rune-dto.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/lolStaticData~RuneListDto
 * @property {module:LeagueWrapper/dto/lolStaticData~BasicDataDto} basic
 * @property {Object.<module:LeagueWrapper/dto/lolStaticData~RuneDto>} data
 * @property {string} type
 * @property {string} version
 */
class RuneListDto {
  constructor(data) {
    this.basic = convert(data.basic, BasicDataDto);
    this.data = convert(data.data, [String, RuneDto]);
    this.type = convert(data.type, String);
    this.version = convert(data.version, String);
  }
}
exports = module.exports = RuneListDto;
