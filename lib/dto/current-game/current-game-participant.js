'use strict';

const convert = require('../../util/convert.js');

const Mastery = require('./mastery');
const Rune = require('./rune');

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
 * @property {string} summonerName - The summoner name of this participant
 * @property {number} teamId - The team ID of this participant, indicating the participant's team
 */
class CurrentGameParticipant {
  constructor(data) {
    this.bot = convert(data.bot, Boolean);
    this.championId = convert(data.championId, Number);
    this.masteries = convert(data.masteries, [Mastery]);
    this.profileIconId = convert(data.profileIconId, Number);
    this.runes = convert(data.masteries, [Rune]);
    this.spell1Id = convert(data.spell1Id, Number);
    this.spell2Id = convert(data.spell2Id, Number);
    this.summonerId = convert(data.summonerId, Number);
    this.summonerName = convert(data.summonerName, String);
    this.teamId = convert(data.teamId, Number);
  }
}

exports = module.exports = CurrentGameParticipant;
