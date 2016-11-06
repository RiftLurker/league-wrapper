'use strict';

const convert = require('../../util/convert.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/lolStaticData~ItemTreeDto
 * @property {string} header
 * @property {Array.<string>} tags
 */
class ItemTreeDto {
  constructor(data) {
    this.header = convert(data.header, String);
    this.tags = convert(data.tags, [String]);
  }
}

exports = module.exports = ItemTreeDto;
