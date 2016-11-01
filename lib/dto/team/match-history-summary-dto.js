'use strict';

const convert = require('../../util/convert.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/team~MatchHistorySummaryDto
 * @property {number} assists
 * @property {number} date - Date that match was completed specified as epoch milliseconds.
 * @property {number} deaths
 * @property {number} gameId
 * @property {string} gameMode
 * @property {boolean} invalid
 * @property {number} kills
 * @property {number} mapId
 * @property {number} opposingTeamKills
 * @property {string} opposingTeamName}
 * @property {boolean} win
 */
class MatchHistorySummaryDto {
  constructor(data) {
    // @todo
  }
}

exports = module.exports = MatchHistorySummaryDto;
