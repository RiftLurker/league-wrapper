'use strict';

const convert = require('../../util/convert.js');

const AggregatedStatsDto = require('./aggregated-stats-dto.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/stats~ChampionStatsDto
 * @property {number} id - Champion ID. Note that champion ID 0 represents the combined stats for all champions. For static information correlating to champion IDs, please refer to the LoL Static Data API.
 * @property {module:LeagueWrapper/dto/stats~AggregatedStatsDto} stats - Aggregated stats associated with the champion.
 */
class ChampionStatsDto {
  constructor(data) {
    this.id = convert(data.id, Number);
    this.stats = convert(data.stats, AggregatedStatsDto);
  }
}

exports = module.exports = ChampionStatsDto;
