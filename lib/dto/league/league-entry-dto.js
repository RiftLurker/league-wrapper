'use strict';

const convert = require('../../util/convert.js');

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
    // @todo
  }
}

exports = module.exports = LeagueEntryDto  ;
