'use strict';

const convert = require('../../util/convert.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/lolStaticData~MetaDataDto
 * @property {boolean} isRune
 * @property {string} tier
 * @property {string} type
 */
class MetaDataDto {
  constructor(data) {
    this.isRune = convert(data.isRune, Boolean);
    this.tier = convert(data.tier, String);
    this.type = convert(data.type, String);
  }
}

exports = module.exports = MetaDataDto;
