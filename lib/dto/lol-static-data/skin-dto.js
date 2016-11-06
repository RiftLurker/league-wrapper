'use strict';

const convert = require('../../util/convert.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/lolStaticData~SkinDto
 * @property {number} id
 * @property {string} name
 * @property {number} num
 */
class SkinDto {
  constructor(data) {
    this.id = convert(data.id, Number);
    this.name = convert(data.name, String);
    this.num = convert(data.num, Number);
  }
}

exports = module.exports = SkinDto;
