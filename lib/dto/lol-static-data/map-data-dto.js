'use strict';

const convert = require('../../util/convert.js');

const MapDetailsDto = require('./map-details-dto.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/lolStaticData~MapDataDto
 * @property {Object.<module:LeagueWrapper/dto/lolStaticData~MapDetailsDto>} data
 * @property {string} type
 * @property {string} version
 */
class MapDataDto {
  constructor(data) {
    this.data = convert(data.data, [String, MapDetailsDto]);
    this.type = convert(data.type, String);
    this.version = convert(data.version, String);
  }
}
exports = module.exports = MapDataDto;
