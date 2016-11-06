'use strict';

const convert = require('../../util/convert.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/lolStaticData~GoldDto
 * @property {number} base
 * @property {boolean} purchasable
 * @property {number} sell
 * @property {number} total
 */
class GoldDto {
  constructor(data) {
    this.base = convert(data.base, Number);
    this.purchasable = convert(data.purchasable, Boolean);
    this.sell = convert(data.sell, Number);
    this.total = convert(data.total, Number);
  }
}
exports = module.exports = GoldDto;
