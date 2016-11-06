'use strict';

const convert = require('../../util/convert.js');

const ImageDto = require('./image-dto.js');
const LevelTipDto = require('./level-tip-dto.js');
const SpellVarsDto = require('./spell-vars-dto.js');

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
    this.altimages = convert(data.altimages, [ImageDto]);
    this.cooldown = convert(data.cooldown, [Number]);
    this.cooldownBurn = convert(data.cooldownBurn, String);
    this.cost = convert(data.cost, [Number]);
    this.costBurn = convert(data.costBurn, String);
    this.costType = convert(data.costType, String);
    this.description = convert(data.description, String);
    this.effect = convert(data.effect, [[Number]]);
    this.effectBurn = convert(data.effectBurn, [String]);
    this.image = convert(data.image, ImageDto);
    this.key = convert(data.key, String);
    this.leveltip = convert(data.leveltip, LevelTipDto);
    this.maxrank = convert(data.maxrank, Number);
    this.name = convert(data.name, String);
    this.range = convert(data.range, Object); // @todo: convertFunction
    this.rangeBurn = convert(data.rangeBurn, String);
    this.resource = convert(data.resource, String);
    this.sanitizedDescription = convert(data.sanitizedDescription, String);
    this.sanitizedTooltip = convert(data.sanitizedTooltip, String);
    this.tooltip = convert(data.tooltip, String);
    this.vars = convert(data.vars, [SpellVarsDto]);
  }
}

exports = module.exports = ChampionSpellDto;
