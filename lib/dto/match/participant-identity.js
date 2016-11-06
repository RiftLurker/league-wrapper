'use strict';

const convert = require('../../util/convert.js');

const Player = require('./player.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/match~ParticipantIdentity
 * @property {number} id - Participant ID
 * @property {module:LeagueWrapper/dto/match~Player} player - Player information
 */
class ParticipantIdentity {
  constructor(data) {
    this.id = convert(data.id, Number);
    this.player = convert(data.player, Player);
  }
}

exports = module.exports = ParticipantIdentity;
