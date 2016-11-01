'use strict';

const convert = require('../../util/convert.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/stats~AggregatedStatsDto
 * @property {number} averageAssists - Dominion only.
 * @property {number} averageChampionsKilled - Dominion only.
 * @property {number} averageCombatPlayerScore - Dominion only.
 * @property {number} averageNodeCapture - Dominion only.
 * @property {number} averageNodeCaptureAssist - Dominion only.
 * @property {number} averageNodeNeutralize - Dominion only.
 * @property {number} averageNodeNeutralizeAssist - Dominion only.
 * @property {number} averageNumDeaths - Dominion only.
 * @property {number} averageObjectivePlayerScore - Dominion only.
 * @property {number} averageTeamObjective - Dominion only.
 * @property {number} averageTotalPlayerScore - Dominion only.
 * @property {number} botGamesPlayed
 * @property {number} killingSpree
 * @property {number} maxAssists - Dominion only.
 * @property {number} maxChampionsKilled
 * @property {number} maxCombatPlayerScore - Dominion only.
 * @property {number} maxLargestCriticalStrike
 * @property {number} maxLargestKillingSpree
 * @property {number} maxNodeCapture - Dominion only.
 * @property {number} maxNodeCaptureAssist - Dominion only.
 * @property {number} maxNodeNeutralize - Dominion only.
 * @property {number} maxNodeNeutralizeAssist - Dominion only.
 * @property {number} maxNumDeaths - Only returned for ranked statistics.
 * @property {number} maxObjectivePlayerScore - Dominion only.
 * @property {number} maxTeamObjective - Dominion only.
 * @property {number} maxTimePlayed
 * @property {number} maxTimeSpentLiving
 * @property {number} maxTotalPlayerScore - Dominion only.
 * @property {number} mostChampionKillsPerSession
 * @property {number} mostSpellsCast
 * @property {number} normalGamesPlayed
 * @property {number} rankedPremadeGamesPlayed
 * @property {number} rankedSoloGamesPlayed
 * @property {number} totalAssists
 * @property {number} totalChampionKills
 * @property {number} totalDamageDealt
 * @property {number} totalDamageTaken
 * @property {number} totalDeathsPerSession - Only returned for ranked statistics.
 * @property {number} totalDoubleKills
 * @property {number} totalFirstBlood
 * @property {number} totalGoldEarned
 * @property {number} totalHeal
 * @property {number} totalMagicDamageDealt
 * @property {number} totalMinionKills
 * @property {number} totalNeutralMinionsKilled
 * @property {number} totalNodeCapture - Dominion only.
 * @property {number} totalNodeNeutralize - Dominion only.
 * @property {number} totalPentaKills
 * @property {number} totalPhysicalDamageDealt
 * @property {number} totalQuadraKills
 * @property {number} totalSessionsLost
 * @property {number} totalSessionsPlayed
 * @property {number} totalSessionsWon
 * @property {number} totalTripleKills
 * @property {number} totalTurretsKilled
 * @property {number} totalUnrealKills
 */
class AggregatedStatsDto {
  constructor(data) {
    // @todo
  }
}

exports = module.exports = AggregatedStatsDto;
