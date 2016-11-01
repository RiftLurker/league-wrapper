'use strict';

const convert = require('../../util/convert.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/stats~RankedStatsDto
 * @property {Array.<module:LeagueWrapper/dto/stats~ChampionStatsDto>} champions - Collection of aggregated stats summarized by champion.
 * @property {number} modifyDate - Date stats were last modified specified as epoch milliseconds.
 * @property {number} summonerId - Summoner ID.
 */
class RankedStatsDto {
  constructor(data) {
    // @todo
  }
}

exports = module.exports = RankedStatsDto;
