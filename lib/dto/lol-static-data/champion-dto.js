'use strict';

const convert = require('../../util/convert.js');

const ChampionSpellDto = require('./champion-spell-dto.js');
const ImageDto = require('./image-dto.js');
const InfoDto = require('./info-dto.js');
const PassiveDto = require('./passive-dto.js');
const RecommendedDto = require('./recommended-dto.js');
const SkinDto = require('./skin-dto.js');
const StatsDto = require('./stats-dto.js');

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
    this.allytips = convert(data.allytips, [String]);
    this.blurb = convert(data.blurb, String);
    this.enemytips = convert(data.enemytips, [String]);
    this.id = convert(data.id, Number);
    this.image = convert(data.image, ImageDto);
    this.info = convert(data.info, InfoDto);
    this.key = convert(data.key, String);
    this.lore = convert(data.lore, String);
    this.name = convert(data.name, String);
    this.partype = convert(data.partype, String);
    this.passive = convert(data.passive, PassiveDto);
    this.recommended = convert(data.recommended, [RecommendedDto]);
    this.skins = convert(data.skins, [SkinDto]);
    this.spells = convert(data.spells, [ChampionSpellDto]);
    this.stats = convert(data.stats, StatsDto);
    this.tags = convert(data.tags, [String]);
    this.title = convert(data.title, String);
  }
}

exports = module.exports = ChampionDto;
