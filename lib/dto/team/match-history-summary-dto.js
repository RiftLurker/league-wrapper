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
    this.assists = convert(data.assists, Number);
    this.date = convert(data.date, Number);
    this.deaths = convert(data.deaths, Number);
    this.gameId = convert(data.gameId, Number);
    this.gameMode = convert(data.gameMode, String);
    this.invalid = convert(data.invalid, Boolean);
    this.kills = convert(data.kills, Number);
    this.mapId = convert(data.mapId, Number);
    this.opposingTeamKills = convert(data.opposingTeamKills, Number);
    this.opposingTeamName = convert(data.opposingTeamName, String);
    this.win = convert(data.win, Boolean);
  }
}

exports = module.exports = MatchHistorySummaryDto;
