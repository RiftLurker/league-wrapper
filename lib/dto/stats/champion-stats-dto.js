'use strict';

const convert = require('../../util/convert.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/stats~ChampionStatsDto
 * @property {number} id - Champion ID. Note that champion ID 0 represents the combined stats for all champions. For static information correlating to champion IDs, please refer to the LoL Static Data API.
 * @property {StatsService~AggregatedStatsDto} stats - Aggregated stats associated with the champion.
 */
class ChampionStatsDto {
  constructor(data) {
    // @todo
  }
}

exports = module.exports = ChampionStatsDto;
