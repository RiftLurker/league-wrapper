'use strict';

const convert = require('../../util/convert.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/lolStaticData~ChampionSpellDto
 * @property {Array.<LolStaticDataService~ImageDto>} altimages
 * @property {Array.<number>} cooldown
 * @property {string} cooldownBurn
 * @property {Array.<number>} cost
 * @property {string} costBurn
 * @property {string} costType
 * @property {string} description
 * @property {Array.<Array.<number>> effect - This field is a List of List of Double. // @todo specify properties: check "This field is a List of List of Double"
 * @property {Array.<string>} effectBurn
 * @property {module:LeagueWrapper/dto/lolStaticData~ImageDto} image
 * @property {string} key
 * @property {module:LeagueWrapper/dto/lolStaticData~LevelTipDto} leveltip
 * @property {number} maxrank
 * @property {string} name
 * @property {Object} range - This field is either a List of Integer or the String 'self' for spells that target one's own champion. // @todo specify properties: This field is either a List of Integer or the String "self" for spells that target one's own champion
 * @property {string} rangeBurn
 * @property {string} resource
 * @property {string} sanitizedDescription
 * @property {string} sanitizedTooltip
 * @property {string} tooltip
 * @property {Array.<module:LeagueWrapper/dto/lolStaticData~SpellVarsDto>} vars
 */
class ChampionSpellDto {
  constructor(data) {
    // @todo
  }
}

exports = module.exports = ChampionSpellDto;
