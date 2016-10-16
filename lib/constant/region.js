'use strict';

class Region {
  /**
   *
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

Region.BR = new Region('BR', 'BR1', 'https://br.api.pvp.net');
Region.EUNE = new Region('EUNE', 'EUN1', 'https://eune.api.pvp.net');
Region.EUW = new Region('EUW', 'EUW1', 'https://euw.api.pvp.net');
Region.JP = new Region('JP', 'JP1', 'https://jp.api.pvp.net');
Region.KR = new Region('KR', 'KR', 'https://kr.api.pvp.net');
Region.LAN = new Region('LAN', 'LA1', 'https://lan.api.pvp.net');
Region.LAS = new Region('LAS', 'LA2', 'https://las.api.pvp.net');
Region.NA = new Region('NA', 'NA1', 'https://na.api.pvp.net');
Region.OCE = new Region('OCE', 'OC1', 'https://oce.api.pvp.net');
Region.TR = new Region('TR', 'TR1', 'https://tr.api.pvp.net');
Region.RU = new Region('RU', 'RU', 'https://ru.api.pvp.net');
Region.PBE = new Region('PBE', 'PBE1', 'https://pbe.api.pvp.net');

exports = module.exports = Region;
