'use strict';

const convert = require('../../util/convert.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/match~Participant
 * @property {number} championId - Champion ID
 * @property {string} highestAchievedSeasonTier - Highest ranked tier achieved for the previous season, if any, otherwise null. Used to display border in game loading screen. (Legal values: CHALLENGER, MASTER, DIAMOND, PLATINUM, GOLD, SILVER, BRONZE, UNRANKED) // @todo: enum LeagueTier
 * @property {Array.<module:LeagueWrapper/dto/match~Mastery>} masteries - List of mastery information
 * @property {number} participantId - Participant ID
 * @property {Array.<module:LeagueWrapper/dto/match~Rune>} runes - List of rune information
 * @property {number} spell1Id - First summoner spell ID
 * @property {number} spell2Id - Second summoner spell ID
 * @property {module:LeagueWrapper/dto/match~ParticipantStats} stats - Participant statistics
 * @property {number} teamId - Team ID
 * @property {module:LeagueWrapper/dto/match~ParticipantTimeline} timeline - Timeline data. Delta fields refer to values for the specified period (e.g., the gold per minute over the first 10 minutes of the game versus the second 20 minutes of the game. Diffs fields refer to the deltas versus the calculated lane opponent(s).
 */
class Participant {
  constructor(data) {
    // @todo
  }
}

exports = module.exports = Participant;
