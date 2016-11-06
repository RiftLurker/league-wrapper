'use strict';

const convert = require('../../util/convert.js');
const ChampionDto = require('./champion-dto.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/champion~ChampionListDto
 * @property {Array.<module:LeagueWrapper/dto/champion~ChampionDto>} champions - The collection of champion information.
 */
class ChampionListDto {
  constructor(data) {
    this.champions = convert(data.champions, [ChampionDto]);
  }
}

exports = module.exports = ChampionListDto;
