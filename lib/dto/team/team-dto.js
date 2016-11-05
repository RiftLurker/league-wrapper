'use strict';

const convert = require('../../util/convert.js');

const MatchHistorySummaryDto = require('./match-history-summary-dto.js');
const RosterDto = require('./roster-dto.js');
const TeamStatDetailDto = require('./team-stat-detail-dto.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/team~TeamDto
 * @property {number} createDate - Date that team was created specified as epoch milliseconds.
 * @property {string} fullId
 * @property {number} lastGameDate - Date that last game played by team ended specified as epoch milliseconds.
 * @property {number} lastJoinDate - Date that last member joined specified as epoch milliseconds.
 * @property {number} lastJoinedRankedTeamQueueDate - Date that team last joined the ranked team queue specified as epoch milliseconds.
 * @property {Array.<module:LeagueWrapper/dto/team~MatchHistorySummaryDto>} matchHistory
 * @property {number} modifyDate - Date that team was last modified specified as epoch milliseconds.
 * @property {string} name
 * @property {module:LeagueWrapper/dto/team~RosterDto} roster
 * @property {number} secondLastJoinDate - Date that second to last member joined specified as epoch milliseconds.
 * @property {string} status
 * @property {string} tag
 * @property {Array.<module:LeagueWrapper/dto/team~TeamStatDetailDto>} teamStatDetail
 * @property {number} thirdLastJoinDate - Date that third to last member joined specified as epoch milliseconds.
 */
class TeamDto {
  constructor(data) {
    this.createDate = convert(data.createDate, Number);
    this.fullId = convert(data.fullId, String);
    this.lastGameDate = convert(data.lastGameDate, Number);
    this.lastJoinDate = convert(data.lastJoinDate, Number);
    this.lastJoinedRankedTeamQueueDate = convert(data.lastJoinedRankedTeamQueueDate, Number);
    this.matchHistory = convert(data.matchHistory, [MatchHistorySummaryDto]);
    this.modifyDate = convert(data.modifyDate, Number);
    this.name = convert(data.name, String);
    this.roster = convert(data.roster, RosterDto);
    this.secondLastJoinDate = convert(data.secondLastJoinDate, Number);
    this.status = convert(data.status, String);
    this.tag = convert(data.tag, String);
    this.teamStatDetail = convert(data.teamStatDetail, [TeamStatDetailDto]);
    this.thirdLastJoinDate = convert(data.thirdLastJoinDate, Number);
  }
}

exports = module.exports = TeamDto;
