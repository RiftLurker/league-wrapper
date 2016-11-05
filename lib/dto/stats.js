'use strict';

const AggregatedStatsDto = require('./stats/aggregated-stats-dto.js');
const ChampionStatsDto = require('./stats/champion-stats-dto.js');
const PlayerStatsSummaryDto = require('./stats/player-stats-summary-dto.js');
const PlayerStatsSummaryListDto = require('./stats/player-stats-summary-list-dto.js');
const RankedStatsDto = require('./stats/ranked-stats-dto.js');

/**
 * @module module:LeagueWrapper/dto/stats
 */

/**
 * @type {{AggregatedStatsDto, ChampionStatsDto, PlayerStatsSummaryDto, PlayerStatsSummaryListDto, RankedStatsDto}}
 */
exports = module.exports = {
  AggregatedStatsDto,
  ChampionStatsDto,
  PlayerStatsSummaryDto,
  PlayerStatsSummaryListDto,
  RankedStatsDto
};
