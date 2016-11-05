'use strict';

const convert = require('../../util/convert.js');

const ImageDto = require('./image-dto.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/lolStaticData~MapDetailsDto
 * @property {module:LeagueWrapper/dto/lolStaticData~ImageDto} image
 * @property {number} mapId
 * @property {string} mapName
 * @property {Array.<Number>} unpurchasableItemList
 */
class MapDetailsDto {
  constructor(data) {
    this.image = convert(data.image, ImageDto);
    this.mapId = convert(data.mapId, Number);
    this.mapName = convert(data.mapName, String);
    this.unpurchasableItemList = convert(data.unpurchasableItemList, [Number]);
  }
}
exports = module.exports = MapDetailsDto;
