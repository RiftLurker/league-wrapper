'use strict';

const convert = require('../../util/convert.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/lolStaticData~BlockItemDto
 * @property {number} count
 * @property {number} id
 */
class BlockItemDto {
  constructor(data) {
    this.count = convert(data.count, Number);
    this.id = convert(data.id, Number);
  }
}

exports = module.exports = BlockItemDto;
