'use strict';

const convert = require('../../util/convert.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/lolStatus~Translation
 * @property {string} content
 * @property {string} locale
 * @property {string} updated_at
 */
class Translation {
  constructor(data) {
    this.content = convert(data.content, String);
    this.locale = convert(data.locale, String);
    this.updated_at = convert(data.updated_at, String); // eslint-disable-line camelcase
  }
}

exports = module.exports = Translation;
