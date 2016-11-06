'use strict';

const convert = require('../../util/convert.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/lolStaticData~StatsDto
 * @property {number} armor
 * @property {number} armorperlevel
 * @property {number} attackdamage
 * @property {number} attackdamageperlevel
 * @property {number} attackrange
 * @property {number} attackspeedoffset
 * @property {number} attackspeedperlevel
 * @property {number} crit
 * @property {number} critperlevel
 * @property {number} hp
 * @property {number} hpperlevel
 * @property {number} hpregen
 * @property {number} hpregenperlevel
 * @property {number} movespeed
 * @property {number} mp
 * @property {number} mpperlevel
 * @property {number} mpregen
 * @property {number} mpregenperlevel
 * @property {number} spellblock
 * @property {number} spellblockperlevel
 */
class StatsDto {
  constructor(data) {
    this.armor = convert(data.armor, Number);
    this.armorperlevel = convert(data.armor, Number);
    this.attackdamage = convert(data.armor, Number);
    this.attackdamageperlevel = convert(data.armor, Number);
    this.attackrange = convert(data.armor, Number);
    this.attackspeedoffset = convert(data.armor, Number);
    this.crit = convert(data.armor, Number);
    this.critperlevel = convert(data.armor, Number);
    this.hp = convert(data.armor, Number);
    this.hpperlevel = convert(data.armor, Number);
    this.hpregen = convert(data.armor, Number);
    this.hpregenperlevel = convert(data.armor, Number);
    this.movespeed = convert(data.armor, Number);
    this.mp = convert(data.armor, Number);
    this.mpperlevel = convert(data.armor, Number);
    this.mpregen = convert(data.armor, Number);
    this.mpregenperlevel = convert(data.armor, Number);
    this.spellblock = convert(data.armor, Number);
    this.spellblockperlevel = convert(data.armor, Number);
  }
}

exports = module.exports = StatsDto;
