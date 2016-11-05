'use strict';

const convert = require('../../util/convert.js');

const PlayerStatsSummaryDto = require('./player-stats-summary-dto.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/stats~PlayerStatsSummaryListDto
 * @property {Array.<module:LeagueWrapper/dto/stats~PlayerStatsSummaryDto>} playerStatSummaries - Collection of player stats summaries associated with the summoner.
 * @property {number} summonerId - Summoner ID.
 */
class PlayerStatsSummaryListDto {
  constructor(data) {
    this.playerStatSummaries = convert(data.playerStatSummaries, [PlayerStatsSummaryDto]);
    this.summonerId = convert(data.summonerId, Number);
  }
}

exports = module.exports = PlayerStatsSummaryListDto;
