'use strict';

const convert = require('../../util/convert.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/lolStaticData~LanguageStringsDto
 * @property {Object.<string>} data
 * @property {string} type
 * @property {string} version
 */
class LanguageStringsDto {
  constructor(data) {
    this.data = convert(data.data, [String, String]);
    this.type = convert(data.type, String);
    this.version = convert(data.version, String);
  }
}
exports = module.exports = LanguageStringsDto;
