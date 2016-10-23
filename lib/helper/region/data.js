'use strict';

/**
 * @class
 */
class RegionData {
  /**
   * @param {string} region
   * @param {string} plattformId
   * @param {string} host
   */
  // @todo: doc host as url
  constructor(region, plattformId, host) {
    this.region = region;
    this.plattformId = plattformId;
    this.host = host;
  }
}

exports = module.exports = RegionData;
