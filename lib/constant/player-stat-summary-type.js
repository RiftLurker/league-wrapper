'use strict';

/* eslint-disable camelcase */
/**
 * @readonly
 * @enum
 */
const PlayerStatSummaryType = {
  UNRANKED: 'Unranked',
  UNRANKED_3x3: 'Unranked3x3',
  ODIN_UNRANKED: 'OdinUnranked',
  ARAM_UNRANKED_5x5: 'AramUnranked5x5',
  COOP_VS_AI: 'CoopVsAI',
  COOP_VS_AI_3x3: 'CoopVsAI3x3',
  RANKED_SOLO_5x5: 'RankedSolo5x5',
  RANKED_TEAM_3x3: 'RankedTeam3x3',
  RANKED_TEAM_5x5: 'RankedTeam5x5',
  ONE_FOR_ALL_5x5: 'OneForAll5x5',
  FIRST_BLOOD_1x1: 'FirstBlood1x1',
  FIRST_BLOOD_2x2: 'FirstBlood2x2',
  SUMMONERS_RIGHT_6x6: 'SummonersRift6x6',
  CAP_5x5: 'CAP5x5',
  URF: 'URF',
  URF_BOTS: 'URFBots',
  NIGHTMARE_BOT: 'NightmareBot',
  ASCENSION: 'Ascension',
  HEXAKILL: 'Hexakill',
  KING_PORO: 'KingPoro',
  COUNTER_PICK: 'CounterPick',
  BILGEWATER: 'Bilgewater',
  SIEGE: 'Siege'
};
/* eslint-enable camelcase */

exports = module.exports = PlayerStatSummaryType;
