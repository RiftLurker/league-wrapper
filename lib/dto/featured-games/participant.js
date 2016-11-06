'use strict';

const convert = require('../../util/convert.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/featuredGames~Participant
 * @property {boolean} bot - Flag indicating whether or not this participant is a bot
 * @property {number} championId - The ID of the champion played by this participant
 * @property {number} profileIconId - The ID of the profile icon used by this participant
 * @property {number} spell1Id - The ID of the first summoner spell used by this participant
 * @property {number} spell2Id - The ID of the second summoner spell used by this participant
 * @property {string} summonerName - The summoner name of this participant
 * @property {number} teamId - The team ID of this participant, indicating the participant's team
 */
class Participant {
  constructor(data) {
    this.bot = convert(data.bot, Boolean);
    this.championId = convert(data.championId, Number);
    this.profileIconId = convert(data.profileIconId, Number);
    this.spell1Id = convert(data.spell1Id, Number);
    this.spell2Id = convert(data.spell2Id, Number);
    this.summonerName = convert(data.summonerName, String);
    this.teamId = convert(data.teamId, Number);
  }
}

exports = module.exports = Participant;
