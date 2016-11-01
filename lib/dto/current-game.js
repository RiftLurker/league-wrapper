'use strict';

const BannedChampion = require('./current-game/banned-champion.js');
const CurrentGameInfo = require('./current-game/current-game-info.js');
const CurrentGameParticipant = require('./current-game/current-game-participant.js');
const Mastery = require('./current-game/mastery.js');
const Observer = require('./current-game/observer.js');
const Rune = require('./current-game/rune.js');

/**
 * @module module:LeagueWrapper/dto/currentGame
 */

/**
 * @type {{BannedChampion, CurrentGameInfo, CurrentGameParticipant, Mastery, Observer, Rune}}
 */
exports = module.exports = {
  BannedChampion,
  CurrentGameInfo,
  CurrentGameParticipant,
  Mastery,
  Observer,
  Rune
};
