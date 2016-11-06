'use strict';

const convert = require('../../util/convert.js');

const Position = require('./position.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/match~ParticipantFrame
 * @property {number} currentGold - Participant's current gold
 * @property {number} dominionScore - Dominion score of the participant
 * @property {number} jungleMinionsKilled - Number of jungle minions killed by participant
 * @property {number} level - Participant's current level
 * @property {number} minionsKilled - Number of minions killed by participant
 * @property {number} participantId - Participant ID
 * @property {module:LeagueWrapper/dto/match~Position} position - Participant's position
 * @property {number} teamScore - Team score of the participant
 * @property {number} totalGold - Participant's total gold
 * @property {number} xp - Experience earned by participant
 */
class ParticipantFrame {
  constructor(data) {
    this.currentGold = convert(data.currentGold, Number);
    this.dominionScore = convert(data.dominionScore, Number);
    this.jungleMinionsKilled = convert(data.jungleMinionsKilled, Number);
    this.level = convert(data.level, Number);
    this.minionsKilled = convert(data.minionsKilled, Number);
    this.participantId = convert(data.participantId, Number);
    this.position = convert(data.position, Position);
    this.teamScore = convert(data.teamScore, Number);
    this.totalGold = convert(data.totalGold, Number);
    this.xp = convert(data.xp, Number);
  }
}

exports = module.exports = ParticipantFrame;
