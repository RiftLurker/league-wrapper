'use strict';

const convert = require('../../util/convert.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/lolStaticData~ChampionDto
 * @property {Array.<string>} allytips
 * @property {string} blurb
 * @property {Array.<string>} enemytips
 * @property {number} id
 * @property {module:LeagueWrapper/dto/lolStaticData~ImageDto} image
 * @property {module:LeagueWrapper/dto/lolStaticData~InfoDto} info
 * @property {string} key
 * @property {string} lore
 * @property {string} name
 * @property {string} partype
 * @property {module:LeagueWrapper/dto/lolStaticData~PassiveDto} passive
 * @property {Array.<module:LeagueWrapper/dto/lolStaticData~RecommendedDto>} recommended
 * @property {Array.<module:LeagueWrapper/dto/lolStaticData~SkinDto>} skins
 * @property {Array.<module:LeagueWrapper/dto/lolStaticData~ChampionSpellDto>} spells
 * @property {module:LeagueWrapper/dto/lolStaticData~StatsDto} stats
 * @property {Array.<string>} tags
 * @property {string} title
 */
class ChampionDto {
  constructor(data) {
    // @todo
  }
}

exports = module.exports = ChampionDto;
