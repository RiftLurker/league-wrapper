'use strict';

const convert = require('../../util/convert.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/lolStatus~Shard
 * @property {string} hostname
 * @property {Array.<string>} locales
 * @property {string} name
 * @property {string} region_tag
 * @property {string} slug
 */
class Shard {
  constructor(data) {
    this.hostname = convert(data.hostname, String);
    this.locales = convert(data.locales, [String]);
    this.name = convert(data.name, String);
    this.region_tag = convert(data.region_tag, String); // eslint-disable-line camelcase
    this.slug = convert(data.slug, String);
  }
}

exports = module.exports = Shard;
