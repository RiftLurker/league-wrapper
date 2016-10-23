'use strict';

const QueueType = require('../constant/queue-type.js');
const QueueTypeData = require('./queue-type/data.js');

/**
 * @class
 */
class QueueTypeHelper {
  constructor() {
    this.queueTypes = {};
  }
  /**
   * @param {QueueType} queueType
   * @returns {QueueTypeData}
   */
  getQueueTypeData(queueType) {
    return this.queueTypes[queueType];
  }

  /**
   * @param {QueueType} queueType
   * @param {QueueTypeData} queueTypeData
   * @protected
   */
  add(queueType, queueTypeData) {
    this.queueTypes[queueType] = queueTypeData;
  }
}

const singleton = new QueueTypeHelper();

/* eslint-disable camelcase */
singleton.add(QueueType.CUSTOM, new QueueTypeData('CUSTOM', 0, 'Custom games'));
singleton.add(QueueType.NORMAL_3x3, new QueueTypeData('NORMAL_3x3', 8, 'Normal 3v3 games'));
singleton.add(QueueType.NORMAL_5x5_BLIND, new QueueTypeData('NORMAL_5x5_BLIND', 2, 'Normal 5v5 Blind Pick games'));
singleton.add(QueueType.NORMAL_5x5_DRAFT, new QueueTypeData('NORMAL_5x5_DRAFT', 14, 'Normal 5v5 Draft Pick games'));
singleton.add(QueueType.RANKED_SOLO_5x5, new QueueTypeData('RANKED_SOLO_5x5', 4, 'Ranked Solo 5v5 games'));
singleton.add(QueueType.RANKED_PREMADE_5x5, new QueueTypeData('RANKED_PREMADE_5x5*', 6, 'Ranked Premade 5v5 games', true));
singleton.add(QueueType.RANKED_PREMADE_3x3, new QueueTypeData('RANKED_PREMADE_3x3*', 9, 'Ranked Premade 3v3 games', true));
singleton.add(QueueType.RANKED_TEAM_3x3, new QueueTypeData('RANKED_TEAM_3x3', 41, 'Ranked Team 3v3 games'));
singleton.add(QueueType.RANKED_TEAM_5x5, new QueueTypeData('RANKED_TEAM_5x5', 42, 'Ranked Team 5v5 games'));
singleton.add(QueueType.ODIN_5x5_BLIND, new QueueTypeData('ODIN_5x5_BLIND', 16, 'Dominion 5v5 Blind Pick games'));
singleton.add(QueueType.ODIN_5x5_DRAFT, new QueueTypeData('ODIN_5x5_DRAFT', 17, 'Dominion 5v5 Draft Pick games'));
singleton.add(QueueType.BOT_5x5, new QueueTypeData('BOT_5x5*', 7, 'Historical Summoner\'s Rift Coop vs AI games', true));
singleton.add(QueueType.BOT_ODIN_5x5, new QueueTypeData('BOT_ODIN_5x5', 25, 'Dominion Coop vs AI games'));
singleton.add(QueueType.BOT_5x5_INTRO, new QueueTypeData('BOT_5x5_INTRO', 31, 'Summoner\'s Rift Coop vs AI Intro Bot games'));
singleton.add(QueueType.BOT_5x5_BEGINNER, new QueueTypeData('BOT_5x5_BEGINNER', 32, 'Summoner\'s Rift Coop vs AI Beginner Bot games'));
singleton.add(QueueType.BOT_5x5_INTERMEDIATE, new QueueTypeData('BOT_5x5_INTERMEDIATE', 33, 'Historical Summoner\'s Rift Coop vs AI Intermediate Bot games'));
singleton.add(QueueType.BOT_TT_3x3, new QueueTypeData('BOT_TT_3x3', 52, 'Twisted Treeline Coop vs AI games'));
singleton.add(QueueType.GROUP_FINDER_5x5, new QueueTypeData('GROUP_FINDER_5x5', 61, 'Team Builder games'));
singleton.add(QueueType.ARAM_5x5, new QueueTypeData('ARAM_5x5', 65, 'ARAM games'));
singleton.add(QueueType.ONEFORALL_5x5, new QueueTypeData('ONEFORALL_5x5', 70, 'One for All games'));
singleton.add(QueueType.FIRSTBLOOD_1x1, new QueueTypeData('FIRSTBLOOD_1x1', 72, 'Snowdown Showdown 1v1 games'));
singleton.add(QueueType.FIRSTBLOOD_2x2, new QueueTypeData('FIRSTBLOOD_2x2', 73, 'Snowdown Showdown 2v2 games'));
singleton.add(QueueType.SR_6x6, new QueueTypeData('SR_6x6', 75, 'Summoner\'s Rift 6x6 Hexakill games'));
singleton.add(QueueType.URF_5x5, new QueueTypeData('URF_5x5', 76, 'Ultra Rapid Fire games'));
singleton.add(QueueType.ONEFORALL_MIRRORMODE_5x5, new QueueTypeData('ONEFORALL_MIRRORMODE_5x5', 78, 'One for All (Mirror mode)'));
singleton.add(QueueType.BOT_URF_5x5, new QueueTypeData('BOT_URF_5x5', 83, 'Ultra Rapid Fire games played against AI games'));
singleton.add(QueueType.NIGHTMARE_BOT_5x5_RANK1, new QueueTypeData('NIGHTMARE_BOT_5x5_RANK1', 91, 'Doom Bots Rank 1 games'));
singleton.add(QueueType.NIGHTMARE_BOT_5x5_RANK2, new QueueTypeData('NIGHTMARE_BOT_5x5_RANK2', 92, 'Doom Bots Rank 2 games'));
singleton.add(QueueType.NIGHTMARE_BOT_5x5_RANK5, new QueueTypeData('NIGHTMARE_BOT_5x5_RANK5', 93, 'Doom Bots Rank 5 games'));
singleton.add(QueueType.ASCENSION_5x5, new QueueTypeData('ASCENSION_5x5', 96, 'Ascension games'));
singleton.add(QueueType.HEXAKILL, new QueueTypeData('HEXAKILL', 98, 'Twisted Treeline 6x6 Hexakill games'));
singleton.add(QueueType.BILGEWATER_ARAM_5x5, new QueueTypeData('BILGEWATER_ARAM_5x5', 100, 'Butcher\'s Bridge games'));
singleton.add(QueueType.KING_PORO_5x5, new QueueTypeData('KING_PORO_5x5', 300, 'King Poro games'));
singleton.add(QueueType.COUNTER_PICK, new QueueTypeData('COUNTER_PICK', 310, 'Nemesis games'));
singleton.add(QueueType.BILGEWATER_5x5, new QueueTypeData('BILGEWATER_5x5', 313, 'Black Market Brawlers games'));
singleton.add(QueueType.SIEGE, new QueueTypeData('SIEGE', 315, 'Nexus Siege games'));
singleton.add(QueueType.DEFINITELY_NOT_DOMINION_5x5, new QueueTypeData('DEFINITELY_NOT_DOMINION_5x5', 317, 'Definitely Not Dominion games'));
singleton.add(QueueType.ARURF_5X5, new QueueTypeData('ARURF_5X5', 318, 'All Random URF games'));
singleton.add(QueueType.TEAM_BUILDER_DRAFT_UNRANKED_5x5, new QueueTypeData('TEAM_BUILDER_DRAFT_UNRANKED_5x5', 400, 'Normal 5v5 Draft Pick games'));
singleton.add(QueueType.TEAM_BUILDER_DRAFT_RANKED_5x5, new QueueTypeData('TEAM_BUILDER_DRAFT_RANKED_5x5', 410, 'Ranked 5v5 Draft Pick games'));
/* eslint-enable camelcase */

/**
 * @type {QueueTypeHelper}
 */
exports = module.exports = singleton;
