'use strict';

const convert = require('../../util/convert.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/currentGame~Observer
 * @property {string} encryptionKey - Key used to decrypt the spectator grid game data for playback
 */
class Observer {
  constructor(data) {
    this.encryptionKey = convert(data.encryptionKey, String);
  }
}

exports = module.exports = Observer;
