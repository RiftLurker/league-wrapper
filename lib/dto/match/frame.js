'use strict';

const convert = require('../../util/convert.js');

const Event = require('./event.js');
const ParticipantFrame = require('./participant-frame.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/match~Frame
 * @property {Array.<module:LeagueWrapper/dto/match~Event>} events - List of events for this frame.
 * @property {Object.<module:LeagueWrapper/dto/match~ParticipantFrame>} participantFrames - Map of each participant ID to the participant's information for the frame.
 * @property {number} timestamp - Represents how many milliseconds into the game the frame occurred.
 */
class Frame {
  constructor(data) {
    this.events = convert(data.events, [Event]);
    this.participantFrames = convert(data.participantFrames, [String, ParticipantFrame]);
    this.timestamp = convert(data.timestamp, Number);
  }
}

exports = module.exports = Frame;
