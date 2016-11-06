'use strict';

const convert = require('../../util/convert.js');

const Position = require('./position.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/match~Event
 * @property {string} ascendedType - The ascended type of the event. Only present if relevant. Note that CLEAR_ASCENDED refers to when a participants kills the ascended player. (Legal values: CHAMPION_ASCENDED, CLEAR_ASCENDED, MINION_ASCENDED) // @todo: enum
 * @property {Array.<Number>} assistingParticipantIds - The assisting participant IDs of the event. Only present if relevant.
 * @property {string} buildingType - The building type of the event. Only present if relevant. (Legal values: INHIBITOR_BUILDING, TOWER_BUILDING) // @todo: enum
 * @property {number} creatorId - The creator ID of the event. Only present if relevant.
 * @property {string} eventType - Event type. (Legal values: ASCENDED_EVENT, BUILDING_KILL, CAPTURE_POINT, CHAMPION_KILL, ELITE_MONSTER_KILL, ITEM_DESTROYED, ITEM_PURCHASED, ITEM_SOLD, ITEM_UNDO, PORO_KING_SUMMON, SKILL_LEVEL_UP, WARD_KILL, WARD_PLACED) // @todo: enum
 * @property {number} itemAfter - The ending item ID of the event. Only present if relevant.
 * @property {number} itemBefore - The starting item ID of the event. Only present if relevant.
 * @property {number} itemId - The item ID of the event. Only present if relevant.
 * @property {number} killerId - The killer ID of the event. Only present if relevant. Killer ID 0 indicates a minion.
 * @property {string} laneType - The lane type of the event. Only present if relevant. (Legal values: BOT_LANE, MID_LANE, TOP_LANE) // @todo: enum
 * @property {string} levelUpType - The level up type of the event. Only present if relevant. (Legal values: EVOLVE, NORMAL) // @todo: enum
 * @property {string} monsterType - The monster type of the event. Only present if relevant. (Legal values: BARON_NASHOR, BLUE_GOLEM, DRAGON, RED_LIZARD, RIFTHERALD, VILEMAW) // @todo: enum
 * @property {number} participantId - The participant ID of the event. Only present if relevant.
 * @property {string} pointCaptured - The point captured in the event. Only present if relevant. (Legal values: POINT_A, POINT_B, POINT_C, POINT_D, POINT_E) // @todo: enum
 * @property {module:LeagueWrapper/dto/match~Position} position - The position of the event. Only present if relevant.
 * @property {number} skillSlot - The skill slot of the event. Only present if relevant.
 * @property {number} teamId - The team ID of the event. Only present if relevant.
 * @property {number} timestamp - Represents how many milliseconds into the game the event occurred.
 * @property {string} towerType - The tower type of the event. Only present if relevant. (Legal values: BASE_TURRET, FOUNTAIN_TURRET, INNER_TURRET, NEXUS_TURRET, OUTER_TURRET, UNDEFINED_TURRET) // @todo: enum
 * @property {number} victimId - The victim ID of the event. Only present if relevant.
 * @property {string} wardType - The ward type of the event. Only present if relevant. (Legal values: BLUE_TRINKET, SIGHT_WARD, TEEMO_MUSHROOM, UNDEFINED, VISION_WARD, YELLOW_TRINKET, YELLOW_TRINKET_UPGRADE) // @todo: enum
 */
class Event {
  constructor(data) {
    this.ascendedType = convert(data.ascendedType, String);
    this.assistingParticipantIds = convert(data.assistingParticipantIds, [Number]);
    this.buildingType = convert(data.buildingType, String);
    this.creatorId = convert(data.creatorId, Number);
    this.eventType = convert(data.eventType, String);
    this.itemAfter = convert(data.itemAfter, Number);
    this.itemBefore = convert(data.itemBefore, Number);
    this.itemId = convert(data.itemId, Number);
    this.killerId = convert(data.killerId, Number);
    this.laneType = convert(data.laneType, String);
    this.levelUpType = convert(data.levelUpType, String);
    this.monsterType = convert(data.monsterType, String);
    this.participantId = convert(data.participantId, Number);
    this.pointCaptured = convert(data.pointCaptured, String);
    this.position = convert(data.position, Position);
    this.skillSlot = convert(data.skillSlot, Number);
    this.teamId = convert(data.teamId, Number);
    this.timestamp = convert(data.timestamp, Number);
    this.towerType = convert(data.towerType, String);
    this.victimId = convert(data.victimId, Number);
    this.wardType = convert(data.wardType, String);
  }
}

exports = module.exports = Event;
