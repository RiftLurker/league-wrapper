'use strict';

const convert = require('../../util/convert.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/lolStaticData~SpellVarsDto
 * @property {Array.<number>} coeff
 * @property {string} dyn
 * @property {string} key
 * @property {string} link
 * @property {string} ranksWith
 */
class SpellVarsDto {
  constructor(data) {
    this.coeff = convert(data.coeff, [Number]);
    this.dyn = convert(data.dyn, Number);
    this.key = convert(data.key, String);
    this.link = convert(data.key, String);
    this.ranksWith = convert(data.key, String);
  }
}

exports = module.exports = SpellVarsDto;
