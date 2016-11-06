'use strict';

const convert = require('../../util/convert.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/lolStaticData~LevelTipDto
 * @property {Array.<string>} effect
 * @property {Array.<string>} label
 */
class LevelTipDto {
  constructor(data) {
    this.effect = convert(data.effect, [String]);
    this.label = convert(data.label, [String]);
  }
}

exports = module.exports = LevelTipDto;
