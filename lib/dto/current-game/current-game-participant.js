'use strict';

const convert = require('../../util/convert.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/currentGame~CurrentGameParticipant
 * @property {boolean} bot - Flag indicating whether or not this participant is a bot
 * @property {number} championId - The ID of the champion played by this participant
 * @property {Array.<module:LeagueWrapper/dto/currentGame~Mastery>} masteries - The masteries used by this participant
 * @property {number} profileIconId - The ID of the profile icon used by this participant
 * @property {Array.<module:LeagueWrapper/dto/currentGame~Rune>} runes - The runes used by this participant
 * @property {number} spell1Id - The ID of the first summoner spell used by this participant
 * @property {number} spell2Id - The ID of the second summoner spell used by this participant
 * @property {number} summonerId - The summoner ID of this participant
 * @property {string} summonersName - The summoner name of this participant
 * @property {number} teamId - The team ID of this participant, indicating the participant's team
 */
class CurrentGameParticipant {
  constructor(data) {
    // @todo
  }
}

exports = module.exports = CurrentGameParticipant;
