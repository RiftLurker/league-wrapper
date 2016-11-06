'use strict';

const convert = require('../../util/convert.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/match~ParticipantTimelineData
 * @property {number} tenToTwenty - Value per minute from 10 min to 20 min
 * @property {number} thirtyToEnd - Value per minute from 30 min to the end of the game
 * @property {number} twentyToThirty - Value per minute from 20 min to 30 min
 * @property {number} zeroToTen - Value per minute from the beginning of the game to 10 min
 */
class ParticipantTimelineData {
  constructor(data) {
    this.tenToTwenty = convert(data.tenToTwenty, Number);
    this.thirtyToEnd = convert(data.thirtyToEnd, Number);
    this.twentyToThirty = convert(data.twentyToThirty, Number);
    this.zeroToTen = convert(data.zeroToTen, Number);
  }
}

exports = module.exports = ParticipantTimelineData;
