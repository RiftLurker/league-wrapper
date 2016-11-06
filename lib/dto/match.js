'use strict';

const BannedChampion = require('./match/banned-champion.js');
const Event = require('./match/event.js');
const Frame = require('./match/frame.js');
const Mastery = require('./match/mastery.js');
const MatchDetail = require('./match/match-detail.js');
const Participant = require('./match/participant.js');
const ParticipantFrame = require('./match/participant-frame.js');
const ParticipantIdentity = require('./match/participant-identity.js');
const ParticipantStats = require('./match/participant-stats.js');
const ParticipantTimeline = require('./match/participant-timeline.js');
const ParticipantTimelineData = require('./match/participant-timeline-data.js');
const Player = require('./match/player.js');
const Position = require('./match/position.js');
const Rune = require('./match/rune.js');
const Team = require('./match/team.js');
const Timeline = require('./match/timeline.js');

/**
 * @module module:LeagueWrapper/dto/match
 */

exports = module.exports = {
  BannedChampion,
  Event,
  Frame,
  Mastery,
  MatchDetail,
  Participant,
  ParticipantFrame,
  ParticipantIdentity,
  ParticipantStats,
  ParticipantTimeline,
  ParticipantTimelineData,
  Player,
  Position,
  Rune,
  Team,
  Timeline
};
