'use strict';

class QueueType {
  /**
   * @param {string} gameQueueConfigId
   * @param {number} queueType
   * @param {string} name
   * @param {boolean} [deprecated]
   */
  constructor(gameQueueConfigId, queueType, name, deprecated) {
    this.gameQueueConfigId = gameQueueConfigId;
    this.queueType = queueType;
    this.name = name;
    this.deprecated = deprecated || false;
  }
  toQueryString() {
    return this.gameQueueConfigId;
  }
}

/* eslint-disable camelcase */
QueueType.CUSTOM = new QueueType('CUSTOM', 0, 'Custom games');
QueueType.NORMAL_3x3 = new QueueType('NORMAL_3x3', 8, 'Normal 3v3 games');
QueueType.NORMAL_5x5_BLIND = new QueueType('NORMAL_5x5_BLIND', 2, 'Normal 5v5 Blind Pick games');
QueueType.NORMAL_5x5_DRAFT = new QueueType('NORMAL_5x5_DRAFT', 14, 'Normal 5v5 Draft Pick games');
QueueType.RANKED_SOLO_5x5 = new QueueType('RANKED_SOLO_5x5', 4, 'Ranked Solo 5v5 games');
QueueType.RANKED_PREMADE_5x5 = new QueueType('RANKED_PREMADE_5x5*', 6, 'Ranked Premade 5v5 games', true);
QueueType.RANKED_PREMADE_3x3 = new QueueType('RANKED_PREMADE_3x3*', 9, 'Ranked Premade 3v3 games', true);
QueueType.RANKED_TEAM_3x3 = new QueueType('RANKED_TEAM_3x3', 41, 'Ranked Team 3v3 games');
QueueType.RANKED_TEAM_5x5 = new QueueType('RANKED_TEAM_5x5', 42, 'Ranked Team 5v5 games');
QueueType.ODIN_5x5_BLIND = new QueueType('ODIN_5x5_BLIND', 16, 'Dominion 5v5 Blind Pick games');
QueueType.ODIN_5x5_DRAFT = new QueueType('ODIN_5x5_DRAFT', 17, 'Dominion 5v5 Draft Pick games');
QueueType.BOT_5x5 = new QueueType('BOT_5x5*', 7, 'Historical Summoner\'s Rift Coop vs AI games', true);
QueueType.BOT_ODIN_5x5 = new QueueType('BOT_ODIN_5x5', 25, 'Dominion Coop vs AI games');
QueueType.BOT_5x5_INTRO = new QueueType('BOT_5x5_INTRO', 31, 'Summoner\'s Rift Coop vs AI Intro Bot games');
QueueType.BOT_5x5_BEGINNER = new QueueType('BOT_5x5_BEGINNER', 32, 'Summoner\'s Rift Coop vs AI Beginner Bot games');
QueueType.BOT_5x5_INTERMEDIATE = new QueueType('BOT_5x5_INTERMEDIATE', 33, 'Historical Summoner\'s Rift Coop vs AI Intermediate Bot games');
QueueType.BOT_TT_3x3 = new QueueType('BOT_TT_3x3', 52, 'Twisted Treeline Coop vs AI games');
QueueType.GROUP_FINDER_5x5 = new QueueType('GROUP_FINDER_5x5', 61, 'Team Builder games');
QueueType.ARAM_5x5 = new QueueType('ARAM_5x5', 65, 'ARAM games');
QueueType.ONEFORALL_5x5 = new QueueType('ONEFORALL_5x5', 70, 'One for All games');
QueueType.FIRSTBLOOD_1x1 = new QueueType('FIRSTBLOOD_1x1', 72, 'Snowdown Showdown 1v1 games');
QueueType.FIRSTBLOOD_2x2 = new QueueType('FIRSTBLOOD_2x2', 73, 'Snowdown Showdown 2v2 games');
QueueType.SR_6x6 = new QueueType('SR_6x6', 75, 'Summoner\'s Rift 6x6 Hexakill games');
QueueType.URF_5x5 = new QueueType('URF_5x5', 76, 'Ultra Rapid Fire games');
QueueType.ONEFORALL_MIRRORMODE_5x5 = new QueueType('ONEFORALL_MIRRORMODE_5x5', 78, 'One for All (Mirror mode)');
QueueType.BOT_URF_5x5 = new QueueType('BOT_URF_5x5', 83, 'Ultra Rapid Fire games played against AI games');
QueueType.NIGHTMARE_BOT_5x5_RANK1 = new QueueType('NIGHTMARE_BOT_5x5_RANK1', 91, 'Doom Bots Rank 1 games');
QueueType.NIGHTMARE_BOT_5x5_RANK2 = new QueueType('NIGHTMARE_BOT_5x5_RANK2', 92, 'Doom Bots Rank 2 games');
QueueType.NIGHTMARE_BOT_5x5_RANK5 = new QueueType('NIGHTMARE_BOT_5x5_RANK5', 93, 'Doom Bots Rank 5 games');
QueueType.ASCENSION_5x5 = new QueueType('ASCENSION_5x5', 96, 'Ascension games');
QueueType.HEXAKILL = new QueueType('HEXAKILL', 98, 'Twisted Treeline 6x6 Hexakill games');
QueueType.BILGEWATER_ARAM_5x5 = new QueueType('BILGEWATER_ARAM_5x5', 100, 'Butcher\'s Bridge games');
QueueType.KING_PORO_5x5 = new QueueType('KING_PORO_5x5', 300, 'King Poro games');
QueueType.COUNTER_PICK = new QueueType('COUNTER_PICK', 310, 'Nemesis games');
QueueType.BILGEWATER_5x5 = new QueueType('BILGEWATER_5x5', 313, 'Black Market Brawlers games');
QueueType.SIEGE = new QueueType('SIEGE', 315, 'Nexus Siege games');
QueueType.DEFINITELY_NOT_DOMINION_5x5 = new QueueType('DEFINITELY_NOT_DOMINION_5x5', 317, 'Definitely Not Dominion games');
QueueType.ARURF_5X5 = new QueueType('ARURF_5X5', 318, 'All Random URF games');
QueueType.TEAM_BUILDER_DRAFT_UNRANKED_5x5 = new QueueType('TEAM_BUILDER_DRAFT_UNRANKED_5x5', 400, 'Normal 5v5 Draft Pick games');
QueueType.TEAM_BUILDER_DRAFT_RANKED_5x5 = new QueueType('TEAM_BUILDER_DRAFT_RANKED_5x5', 410, 'Ranked 5v5 Draft Pick games');
/* eslint-enable camelcase */

exports = module.exports = QueueType;
