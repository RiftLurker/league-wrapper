'use strict';

const convert = require('../../util/convert.js');

const Participant = require('./participant.js');
const ParticipantIdentity = require('./participant-identity.js');
const Team = require('./team.js');
const Timeline = require('./timeline.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/match~MatchDetail
 * @property {number} mapId - Match map ID
 * @property {number} matchCreation - Match creation time. Designates when the team select lobby is created and/or the match is made through match making, not when the game actually starts.
 * @property {number} matchDuration - Match duration
 * @property {string} matchId - ID of the match // @todo enum: GameMode
 * @property {string} matchMode - Match mode (Legal values: CLASSIC, ODIN, ARAM, TUTORIAL, ONEFORALL, ASCENSION, FIRSTBLOOD, KINGPORO) // @todo enum: GameMode
 * @property {string} matchType - Match type (Legal values: CUSTOM_GAME, MATCHED_GAME, TUTORIAL_GAME) // @todo enum: GameType
 * @property {string} matchVersion - Match version
 * @property {Array.<module:LeagueWrapper/dto/match~ParticipantIdentity>} participantIdentities - Participant identity information
 * @property {Array.<module:LeagueWrapper/dto/match~Participant>} participants - Participant information
 * @property {string} platformId - Platform ID of the match
 * @property {string} queueType - Match queue type (Legal values: CUSTOM, NORMAL_5x5_BLIND, RANKED_SOLO_5x5, RANKED_PREMADE_5x5, BOT_5x5, NORMAL_3x3, RANKED_PREMADE_3x3, NORMAL_5x5_DRAFT, ODIN_5x5_BLIND, ODIN_5x5_DRAFT, BOT_ODIN_5x5, BOT_5x5_INTRO, BOT_5x5_BEGINNER, BOT_5x5_INTERMEDIATE, RANKED_TEAM_3x3, RANKED_TEAM_5x5, BOT_TT_3x3, GROUP_FINDER_5x5, ARAM_5x5, ONEFORALL_5x5, FIRSTBLOOD_1x1, FIRSTBLOOD_2x2, SR_6x6, URF_5x5, ONEFORALL_MIRRORMODE_5x5, BOT_URF_5x5, NIGHTMARE_BOT_5x5_RANK1, NIGHTMARE_BOT_5x5_RANK2, NIGHTMARE_BOT_5x5_RANK5, ASCENSION_5x5, HEXAKILL, BILGEWATER_ARAM_5x5, KING_PORO_5x5, COUNTER_PICK, BILGEWATER_5x5, TEAM_BUILDER_DRAFT_UNRANKED_5x5, TEAM_BUILDER_DRAFT_RANKED_5x5) // @todo enum: QueueType
 * @property {string} region - Region where the match was played // @todo enum: region?
 * @property {string} season - Season match was played (Legal values: PRESEASON3, SEASON3, PRESEASON2014, SEASON2014, PRESEASON2015, SEASON2015, PRESEASON2016, SEASON2016) // @todo enum: Season
 * @property {Array.<module:LeagueWrapper/dto/match~Team>} teams - Team information
 * @property {module:LeagueWrapper/dto/match~Timeline} timeline - Match timeline data (not included by default)
 */
class MatchDetail {
  constructor(data) {
    this.mapId = convert(data.mapId, Number);
    this.matchCreation = convert(data.matchCreation, Number);
    this.matchDuration = convert(data.matchDuration, Number);
    this.matchId = convert(data.matchId, String);
    this.matchMode = convert(data.matchMode, String);
    this.matchType = convert(data.matchType, String);
    this.matchVersion = convert(data.matchVersion, String);
    this.participantIdentities = convert(data.participantIdentities, [ParticipantIdentity]);
    this.participants = convert(data.participants, [Participant]);
    this.platformId = convert(data.platformId, String);
    this.queueType = convert(data.queueType, String);
    this.region = convert(data.region, String);
    this.season = convert(data.season, String);
    this.teams = convert(data.teams, [Team]);
    this.timeline = convert(data.timeline, Timeline);
  }
}

exports = module.exports = MatchDetail;
