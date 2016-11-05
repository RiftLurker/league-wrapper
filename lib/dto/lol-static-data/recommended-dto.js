'use strict';

const convert = require('../../util/convert.js');

const BlockDto = require('./block-dto.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/lolStaticData~RecommendedDto
 * @property {Array.<module:LeagueWrapper/dto/lolStaticData~BlockDto>} blocks
 * @property {string} champion
 * @property {string} map
 * @property {string} mode
 * @property {boolean} priority
 * @property {string} title
 * @property {string} type
 */
class RecommendedDto {
  constructor(data) {
    this.blocks = convert(data.blocks, [BlockDto]);
    this.champion = convert(data.champion, String);
    this.map = convert(data.map, String);
    this.mode = convert(data.mode, String);
    this.priority = convert(data.priority, Boolean);
    this.title = convert(data.title, String);
    this.type = convert(data.type, String);
  }
}

exports = module.exports = RecommendedDto;
