'use strict';

const convert = require('../../util/convert.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/matchlist~MatchReference
 * @property {number} champion
 * @property {string} lane - Legal values: MID, MIDDLE, TOP, JUNGLE, BOT, BOTTOM // @todo: enum Lane
 * @property {number} matchId
 * @property {string} plattformId
 * @property {string} queue - Legal values: TEAM_BUILDER_DRAFT_RANKED_5x5, RANKED_SOLO_5x5, RANKED_TEAM_3x3, RANKED_TEAM_5x5 // @todo: enum Queue
 * @property {string] region
 * @property {string] role - Legal values: DUO, NONE, SOLO, DUO_CARRY, DUO_SUPPORT // @todo: enum Role
 * @property {string} season - Legal values: PRESEASON3, SEASON3, PRESEASON2014, SEASON2014, PRESEASON2015, SEASON2015, PRESEASON2016, SEASON2016 // @todo: enum Season
 * @property {number} timestamp
 */
class MatchReference {
  constructor(data) {
    // @todo
  }
}

exports = module.exports = MatchReference;
