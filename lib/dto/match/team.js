'use strict';

const convert = require('../../util/convert.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/match~Team
 * @property {Array.<module:LeagueWrapper/dto/match~BannedChampion>} bans - If game was draft mode, contains banned champion data, otherwise null
 * @property {number} baronKills - Number of times the team killed baron
 * @property {number} dominionVictoryScore - If game was a dominion game, specifies the points the team had at game end, otherwise null
 * @property {number} dragonKills - Number of times the team killed dragon
 * @property {boolean} firstBaron - Flag indicating whether or not the team got the first baron kill
 * @property {boolean} firstBlood - Flag indicating whether or not the team got first blood
 * @property {boolean} firstDragon - Flag indicating whether or not the team got the first dragon kill
 * @property {boolean} firstInhibitor - Flag indicating whether or not the team destroyed the first inhibitor
 * @property {boolean} firstRiftHerald - Flag indicating whether or not the team got the first rift herald kill
 * @property {boolean} firstTower - Flag indicating whether or not the team destroyed the first tower
 * @property {number} inhibitorKills - Number of inhibitors the team destroyed
 * @property {number} riftHeraldKills - Number of times the team killed rift herald
 * @property {number} teamId - Team ID
 * @property {number} towerKills - Number of towers the team destroyed
 * @property {number} vilemawKills - Number of times the team killed vilemaw
 * @property {boolean} winner - Flag indicating whether or not the team won
 */
class Team {
  constructor(data) {
    // @todo
  }
}

exports = module.exports = Team;
