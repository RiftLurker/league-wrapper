'use strict';

const convert = require('../../util/convert.js');

const Service = require('./service.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/lolStatus~ShardStatus
 * @property {string} hostname
 * @property {Array.<string>} locales
 * @property {string} name
 * @property {string} region_tag
 * @property {Array.<module:LeagueWrapper/dto/lolStatus~Service>} services
 * @property {string} slug
 */
class ShardStatus {
  constructor(data) {
    this.hostname = convert(data.hostname, String);
    this.locales = convert(data.locales, [String]);
    this.name = convert(data.name, String);
    this.region_tag = convert(data.region_tag, String); // eslint-disable-line camelcase
    this.services = convert(data.services, [Service]);
    this.slug = convert(data.slug, String);
  }
}

exports = module.exports = ShardStatus;
