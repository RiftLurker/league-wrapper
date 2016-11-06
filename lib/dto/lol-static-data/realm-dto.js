'use strict';

const convert = require('../../util/convert.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/lolStaticData~RealmDto
 * @property {string} cdn - The base CDN url.
 * @property {string} css - Latest changed version of Dragon Magic's css file.
 * @property {string} dd - Latest changed version of Dragon Magic.
 * @property {string} l - Default language for this realm.
 * @property {string} lg - Legacy script mode for IE6 or older.
 * @property {Object.<string>} n - Latest changed version for each data type listed.
 * @property {number} profileiconmax - Special behavior number identifying the largest profileicon id that can be used under 500. Any profileicon that is requested between this number and 500 should be mapped to 0.
 * @property {string} store - Additional api data drawn from other sources that may be related to data dragon functionality.
 * @property {string} v - Current version of this file for this realm.
 */
class RealmDto {
  constructor(data) {
    this.cdn = convert(data.cdn, String);
    this.css = convert(data.css, String);
    this.dd = convert(data.dd, String);
    this.l = convert(data.l, String);
    this.lg = convert(data.lg, String);
    this.n = convert(data.n, [String, String]);
    this.profileiconmax = convert(data.profileiconmax, Number);
    this.store = convert(data.store, String);
    this.v = convert(data.v, String);
  }
}

exports = module.exports = RealmDto;
