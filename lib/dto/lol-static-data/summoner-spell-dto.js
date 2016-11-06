'use strict';

const convert = require('../../util/convert.js');

const ImageDto = require('./image-dto.js');
const LevelTipDto = require('./level-tip-dto.js');
const SpellVarsDto = require('./spell-vars-dto.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/lolStaticData~SummonerSpellDto
 * @property {Array.<Number>} cooldown
 * @property {string} cooldownBurn
 * @property {Array<Number>} cost
 * @property {string} costBurn
 * @property {string} costType
 * @property {string} description
 * @property {Array.<Array.<Number>>} effect - This field is a List of List of Double.
 * @property {Array.<string>} effectBurn
 * @property {number} id
 * @property {module:LeagueWrapper/dto/lolStaticData~ImageDto} image
 * @property {string} key
 * @property {module:LeagueWrapper/dto/lolStaticData~LevelTipDto} leveltip
 * @property {number} maxrank
 * @property {Array.<string>} modes
 * @property {string} name
 * @property {Array.<number>|String} range - This field is either a List of Integer or the String 'self' for spells that target one's own champion.
 * @property {string} rangeBurn
 * @property {string} resource
 * @property {string} sanitizedDescription
 * @property {string} sanitizedTooltip
 * @property {number} summonerLevel
 * @property {string} tooltip
 * @property {Array.<module:LeagueWrapper/dto/lolStaticData~SpellVarsDto>} vars
 */
class SummonerSpellDto {
  constructor(data) {
    this.cooldown = convert(data.cooldown, [Number]);
    this.cooldownBurn = convert(data.cooldownBurn, String);
    this.cost = convert(data.cost, [Number]);
    this.costBurn = convert(data.costBurn, String);
    this.costType = convert(data.costType, String);
    this.description = convert(data.description, String);
    this.effect = convert(data.effect, [[Number]]);
    this.effectBurn = convert(data.effectBurn, [String]);
    this.id = convert(data.id, Number);
    this.image = convert(data.image, ImageDto);
    this.key = convert(data.key, String);
    this.leveltip = convert(data.leveltip, LevelTipDto);
    this.maxrank = convert(data.maxrank, Number);
    this.modes = convert(data.modes, [String]);
    this.name = convert(data.name, String);
    this.range = convert(data.range, Object); // @todo: convertFunction
    this.rangeBurn = convert(data.rangeBurn, String);
    this.resource = convert(data.resource, String);
    this.sanitizedDescription = convert(data.sanitizedDescription, String);
    this.sanitizedTooltip = convert(data.sanitizedTooltip, String);
    this.summonerLevel = convert(data.summonerLevel, Number);
    this.tooltip = convert(data.tooltip, String);
    this.vars = convert(data.vars, [SpellVarsDto]);
  }
}
exports = module.exports = SummonerSpellDto;
