'use strict';

const Region = require('../constant/region.js');
const RegionData = require('./region/data.js');

/**
 * @class
 */
class RegionHelper {
  constructor() {
    this.regions = {};
  }
  /**
   * @param {Region} region
   * @returns {RegionData}
   */
  getRegionData(region) {
    return this.regions[region];
  }

  /**
   * @param {Region} region
   * @param {RegionData} regionData
   * @protected
   */
  add(region, regionData) {
    this.regions[region] = regionData;
  }
}

const singleton = new RegionHelper();

singleton.add(Region.BR, new RegionData('BR', 'BR1', 'https://br.api.pvp.net'));
singleton.add(Region.EUNE, new RegionData('EUNE', 'EUN1', 'https://eune.api.pvp.net'));
singleton.add(Region.EUW, new RegionData('EUW', 'EUW1', 'https://euw.api.pvp.net'));
singleton.add(Region.JP, new RegionData('JP', 'JP1', 'https://jp.api.pvp.net'));
singleton.add(Region.KR, new RegionData('KR', 'KR', 'https://kr.api.pvp.net'));
singleton.add(Region.LAN, new RegionData('LAN', 'LA1', 'https://lan.api.pvp.net'));
singleton.add(Region.LAS, new RegionData('LAS', 'LA2', 'https://las.api.pvp.net'));
singleton.add(Region.NA, new RegionData('NA', 'NA1', 'https://na.api.pvp.net'));
singleton.add(Region.OCE, new RegionData('OCE', 'OC1', 'https://oce.api.pvp.net'));
singleton.add(Region.TR, new RegionData('TR', 'TR1', 'https://tr.api.pvp.net'));
singleton.add(Region.RU, new RegionData('RU', 'RU', 'https://ru.api.pvp.net'));
singleton.add(Region.PBE, new RegionData('PBE', 'PBE1', 'https://pbe.api.pvp.net'));

/**
 * @type {RegionHelper}
 */
exports = module.exports = singleton;
