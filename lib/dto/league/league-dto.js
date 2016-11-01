'use strict';

const convert = require('../../util/convert.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/league~LeagueDto
 * @property {Array.<module:LeagueWrapper/dto/league~LeagueEntryDto>} entries - The requested league entries.
 * @property {string} name - This name is an internal place-holder name only. Display and localization of names in the game client are handled client-side.
 * @property {string} participantId - Specifies the relevant participant that is a member of this league (i.e., a requested summoner ID, a requested team ID, or the ID of a team to which one of the requested summoners belongs). Only present when full league is requested so that participant's entry can be identified. Not present when individual entry is requested.
 * @property {string} queue - The league's queue type. (Legal values: RANKED_SOLO_5x5, RANKED_TEAM_3x3, RANKED_TEAM_5x5) // @todo: enum Queue
 * @property {string} tier - The league's tier. (Legal values: CHALLENGER, MASTER, DIAMOND, PLATINUM, GOLD, SILVER, BRONZE) // @todo: enum LeagueTier
 */
class LeagueDto   {
  constructor(data) {
    // @todo
  }
}

exports = module.exports = LeagueDto  ;
