'use strict';

const convert = require('../util/convert.js');

const RateLimit = require('../rate-limit.js');
const Region = require('../constant/region.js');

/**
 * @class
 * @alias module:LeagueWrapper/options~LeagueWrapperOptionasds
 * @property {module:LeagueWrapper/constant~Region|string} region - Default region
 * @property {RateLimit|RateLimit[]} rateLimits
 */
class LeagueWrapperOptions {
  constructor(data) {
    this.region = convert(data.region, Region, {
      default: Region.EUW
    });
    if (data.rateLimits) {
      this.rateLimits = data.rateLimits; // @todo: RateLimitOptions
    } else {
      this.rateLimits = [
        new RateLimit(10, 10),
        new RateLimit(500, 10 * 60)
      ];
    }
  }
}

exports = module.exports = LeagueWrapperOptions;
