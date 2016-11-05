'use strict';

const convert = require('../../util/convert.js');

const Frame = require('./frame.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/match~Timeline
 * @property {number} frameInterval
 * @property {Array.<module:LeagueWrapper/dto/match~Frame>} frames
 */
class Timeline {
  constructor(data) {
    this.frameInterval = convert(data.frameInterval, Number);
    this.frames = convert(data.frames, [Frame]);
  }
}

exports = module.exports = Timeline;
