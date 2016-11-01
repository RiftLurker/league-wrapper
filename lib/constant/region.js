'use strict';

/**
 * @class
 * @alias module:LeagueWrapper/constant~Region
 * @property {string} region
 * @property {string} platformId
 */
class Region {
  constructor(region) {
    const regionsMatch = regions.filter(regionData => region.toLowerCase() === regionData.region);
    if (regionsMatch.length !== 1) {
      throw new Error('Invalid region');
    }
    Object.assign(this, regionsMatch[0]);
  }
  getHostUrl() {
    const region = this.region;
    return `https://${region}.api.pvp.net`;
  }
}

/**
 * @typedef {Object} RegionData
 * @property {string} region
 * @property {string} platformId
 */
/**
 * @type {Array.<RegionData>}
 */
const regions = [];

Region.BR = 'br';
regions.push({
  region: Region.BR,
  platformId: 'br1'
});
Region.EUNE = 'eune';
regions.push({
  region: Region.EUNE,
  platformId: 'eun1'
});
Region.EUW = 'euw';
regions.push({
  region: Region.EUW,
  platformId: 'euw1'
});
Region.JP = 'jp';
regions.push({
  region: Region.JP,
  platformId: 'jp1'
});
Region.KR = 'kr';
regions.push({
  region: Region.KR,
  platformId: 'kr'
});
Region.LAN = 'lan';
regions.push({
  region: Region.LAN,
  platformId: 'la1'
});
Region.LAS = 'las';
regions.push({
  region: Region.LAS,
  platformId: 'la2'
});
Region.NA = 'na';
regions.push({
  region: Region.NA,
  platformId: 'na1'
});
Region.OCE = 'oce';
regions.push({
  region: Region.OCE,
  platformId: 'oc1'
});
Region.TR = 'tr';
regions.push({
  region: Region.TR,
  platformId: 'tr1'
});
Region.RU = 'ru';
regions.push({
  region: Region.RU,
  platformId: 'ru'
});
Region.PBE = 'pbe';
regions.push({
  region: Region.PBE,
  platformId: 'pbe1'
});
Region.GLOBAL = 'global';
regions.push({
  region: Region.GLOBAL,
  platformId: ''
});

exports = module.exports = Region;
