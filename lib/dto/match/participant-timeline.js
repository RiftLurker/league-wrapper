'use strict';

const convert = require('../../util/convert.js');

const ParticipantTimelineData = require('./participant-timeline-data.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/match~ParticipantTimeline
 * @property {module:LeagueWrapper/dto/match~ParticipantTimelineData} ancientGolemAssistsPerMinCounts - Ancient golem assists per minute timeline counts
 * @property {module:LeagueWrapper/dto/match~ParticipantTimelineData} ancientGolemKillsPerMinCounts - Ancient golem kills per minute timeline counts
 * @property {module:LeagueWrapper/dto/match~ParticipantTimelineData} assistedLaneDeathsPerMinDeltas - Assisted lane deaths per minute timeline data
 * @property {module:LeagueWrapper/dto/match~ParticipantTimelineData} assistedLaneKillsPerMinDeltas - Assisted lane kills per minute timeline data
 * @property {module:LeagueWrapper/dto/match~ParticipantTimelineData} baronAssistsPerMinCounts - Baron assists per minute timeline counts
 * @property {module:LeagueWrapper/dto/match~ParticipantTimelineData} baronKillsPerMinCounts - Baron kills per minute timeline counts
 * @property {module:LeagueWrapper/dto/match~ParticipantTimelineData} creepsPerMinDeltas - Creeps per minute timeline data
 * @property {module:LeagueWrapper/dto/match~ParticipantTimelineData} csDiffPerMinDeltas - Creep score difference per minute timeline data
 * @property {module:LeagueWrapper/dto/match~ParticipantTimelineData} damageTakenDiffPerMinDeltas - Damage taken difference per minute timeline data
 * @property {module:LeagueWrapper/dto/match~ParticipantTimelineData} damageTakenPerMinDeltas - Damage taken per minute timeline data
 * @property {module:LeagueWrapper/dto/match~ParticipantTimelineData} dragonAssistsPerMinCounts - Dragon assists per minute timeline counts
 * @property {module:LeagueWrapper/dto/match~ParticipantTimelineData} dragonKillsPerMinCounts - Dragon kills per minute timeline counts
 * @property {module:LeagueWrapper/dto/match~ParticipantTimelineData} elderLizardAssistsPerMinCounts - Elder lizard assists per minute timeline counts
 * @property {module:LeagueWrapper/dto/match~ParticipantTimelineData} elderLizardKillsPerMinCounts - Elder lizard kills per minute timeline counts
 * @property {module:LeagueWrapper/dto/match~ParticipantTimelineData} goldPerMinDeltas - Gold per minute timeline data
 * @property {module:LeagueWrapper/dto/match~ParticipantTimelineData} inhibitorAssistsPerMinCounts - Inhibitor assists per minute timeline counts
 * @property {module:LeagueWrapper/dto/match~ParticipantTimelineData} inhibitorKillsPerMinCounts - Inhibitor kills per minute timeline counts
 * @property {string} lane - Participant's lane (Legal values: MID, MIDDLE, TOP, JUNGLE, BOT, BOTTOM) // @todo: enum
 * @property {string} role - Participant's role (Legal values: DUO, NONE, SOLO, DUO_CARRY, DUO_SUPPORT) // @todo: enum
 * @property {module:LeagueWrapper/dto/match~ParticipantTimelineData} towerAssistsPerMinCounts - Tower assists per minute timeline counts
 * @property {module:LeagueWrapper/dto/match~ParticipantTimelineData} towerKillsPerMinCounts - Tower kills per minute timeline counts
 * @property {module:LeagueWrapper/dto/match~ParticipantTimelineData} towerKillsPerMinDeltas - Tower kills per minute timeline data
 * @property {module:LeagueWrapper/dto/match~ParticipantTimelineData} vilemawAssistsPerMinCounts - Vilemaw assists per minute timeline counts
 * @property {module:LeagueWrapper/dto/match~ParticipantTimelineData} vilemawKillsPerMinCounts - Vilemaw kills per minute timeline counts
 * @property {module:LeagueWrapper/dto/match~ParticipantTimelineData} wardsPerMinDeltas - Wards placed per minute timeline data
 * @property {module:LeagueWrapper/dto/match~ParticipantTimelineData} xpDiffPerMinDeltas - Experience difference per minute timeline data
 * @property {module:LeagueWrapper/dto/match~ParticipantTimelineData} xpPerMinDeltas - Experience per minute timeline data
 */
class ParticipantTimeline {
  constructor(data) {
    this.ancientGolemAssistsPerMinCounts = convert(data.ancientGolemAssistsPerMinCounts, ParticipantTimelineData);
    this.ancientGolemKillsPerMinCounts = convert(data.ancientGolemKillsPerMinCounts, ParticipantTimelineData);
    this.assistedLaneDeathsPerMinDeltas = convert(data.assistedLaneDeathsPerMinDeltas, ParticipantTimelineData);
    this.assistedLaneKillsPerMinDeltas = convert(data.assistedLaneKillsPerMinDeltas, ParticipantTimelineData);
    this.baronAssistsPerMinCounts = convert(data.baronAssistsPerMinCounts, ParticipantTimelineData);
    this.baronKillsPerMinCounts = convert(data.baronKillsPerMinCounts, ParticipantTimelineData);
    this.creepsPerMinDeltas = convert(data.creepsPerMinDeltas, ParticipantTimelineData);
    this.csDiffPerMinDeltas = convert(data.csDiffPerMinDeltas, ParticipantTimelineData);
    this.damageTakenDiffPerMinDeltas = convert(data.damageTakenDiffPerMinDeltas, ParticipantTimelineData);
    this.damageTakenPerMinDeltas = convert(data.damageTakenPerMinDeltas, ParticipantTimelineData);
    this.dragonAssistsPerMinCounts = convert(data.dragonAssistsPerMinCounts, ParticipantTimelineData);
    this.dragonKillsPerMinCounts = convert(data.dragonKillsPerMinCounts, ParticipantTimelineData);
    this.elderLizardAssistsPerMinCounts = convert(data.elderLizardAssistsPerMinCounts, ParticipantTimelineData);
    this.elderLizardKillsPerMinCounts = convert(data.elderLizardKillsPerMinCounts, ParticipantTimelineData);
    this.goldPerMinDeltas = convert(data.goldPerMinDeltas, ParticipantTimelineData);
    this.inhibitorAssistsPerMinCounts = convert(data.inhibitorAssistsPerMinCounts, ParticipantTimelineData);
    this.inhibitorKillsPerMinCounts = convert(data.inhibitorKillsPerMinCounts, ParticipantTimelineData);
    this.lane = convert(data.lane, String);
    this.role = convert(data.role, String);
    this.towerAssistsPerMinCounts = convert(data.towerAssistsPerMinCounts, ParticipantTimelineData);
    this.towerKillsPerMinCounts = convert(data.towerKillsPerMinCounts, ParticipantTimelineData);
    this.towerKillsPerMinDeltas = convert(data.towerKillsPerMinDeltas, ParticipantTimelineData);
    this.vilemawAssistsPerMinCounts = convert(data.vilemawAssistsPerMinCounts, ParticipantTimelineData);
    this.vilemawKillsPerMinCounts = convert(data.vilemawKillsPerMinCounts, ParticipantTimelineData);
    this.wardsPerMinDeltas = convert(data.wardsPerMinDeltas, ParticipantTimelineData);
    this.xpDiffPerMinDeltas = convert(data.xpDiffPerMinDeltas, ParticipantTimelineData);
    this.xpPerMinDeltas = convert(data.xpPerMinDeltas, ParticipantTimelineData);
  }
}

exports = module.exports = ParticipantTimeline;
