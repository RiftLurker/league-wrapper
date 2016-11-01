'use strict';

const convert = require('../../util/convert.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/stats~PlayerStatsSummaryDto
 * @property {module:LeagueWrapper/dto/stats~AggregatedStatsDto} aggregatedStats - Aggregated stats.
 * @property {number} losses - Number of losses for this queue type. Returned for ranked queue types only.
 * @property {number} modifyDate - Date stats were last modified specified as epoch milliseconds.
 * @property {string} playerStatSummaryType - Player stats summary type. (Legal values: AramUnranked5x5, Ascension, Bilgewater, CAP5x5, CoopVsAI, CoopVsAI3x3, CounterPick, FirstBlood1x1, FirstBlood2x2, Hexakill, KingPoro, NightmareBot, OdinUnranked, OneForAll5x5, RankedPremade3x3, RankedPremade5x5, RankedSolo5x5, RankedTeam3x3, RankedTeam5x5, SummonersRift6x6, Unranked, Unranked3x3, URF, URFBots) // @todo: enum PlayerStatSummaryType
 * @property {number} wins - Number of wins for this queue type.
 */
class PlayerStatsSummaryDto {
  constructor(data) {
    // @todo
  }
}

exports = module.exports = PlayerStatsSummaryDto;
