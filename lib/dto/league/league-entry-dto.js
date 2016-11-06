'use strict';

const convert = require('../../util/convert.js');

const MiniSeriesDto = require('./mini-series-dto.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/league~LeagueEntryDto
 * @property {string} division - The league division of the participant.
 * @property {boolean} isFreshBlood - Specifies if the participant is fresh blood.
 * @property {boolean} isHotStreak - Specifies if the participant is on a hot streak.
 * @property {boolean} isInactive - Specifies if the participant is inactive.
 * @property {boolean} isVeteran - Specifies if the participant is a veteran.
 * @property {number} leaguePoints - The league points of the participant.
 * @property {number} losses - The number of losses for the participant.
 * @property {module:LeagueWrapper/dto/league~MiniSeriesDto} miniSeries - Mini series data for the participant. Only present if the participant is currently in a mini series.
 * @property {string} playerOrTeamId - The ID of the participant (i.e., summoner or team) represented by this entry.
 * @property {string} playerOrTeamName - The name of the the participant (i.e., summoner or team) represented by this entry.
 * @property {string} playStyle - The playstyle of the participant. (Legal values: NONE, SOLO, SQUAD, TEAM) // @todo: enum Playstyle
 * @property {number} wins - The number of wins for the participant.
 */
class LeagueEntryDto   {
  constructor(data) {
    this.division = convert(data.division, String);
    this.isFreshBlood = convert(data.isFreshBlood, Boolean);
    this.isHotStreak = convert(data.isHotStreak, Boolean);
    this.isInactive = convert(data.isInactive, Boolean);
    this.isVeteran = convert(data.isVeteran, Boolean);
    this.leaguePoints = convert(data.leaguePoints, Number);
    this.losses = convert(data.losses, Number);
    this.miniSeries = convert(data.miniSeries, MiniSeriesDto);
    this.playerOrTeamId = convert(data.playerOrTeamId, String);
    this.playerOrTeamName = convert(data.playerOrTeamName, String);
    this.playStyle = convert(data.playStyle, String);
    this.wins = convert(data.wins, Number);
  }
}

exports = module.exports = LeagueEntryDto  ;
