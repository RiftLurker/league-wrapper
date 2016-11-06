'use strict';

const convert = require('../../util/convert.js');

const BlockItemDto = require('./block-item-dto.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/lolStaticData~BlockDto
 * @property {Array.<module:LeagueWrapper/dto/lolStaticData~BlockItemDto>} items
 * @property {boolean} recMath
 * @property {string} type
 */
class BlockDto {
  constructor(data) {
    this.items = convert(data.items, [BlockItemDto]);
    this.recMath = convert(data.recMath, Boolean);
    this.type = convert(data.type, String);
  }
}

exports = module.exports = BlockDto;
