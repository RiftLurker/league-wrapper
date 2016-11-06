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
    this.averageAssists = convert(data.averageAssists, Number);
    this.averageChampionsKilled = convert(data.averageChampionsKilled, Number);
    this.averageCombatPlayerScore = convert(data.averageCombatPlayerScore, Number);
    this.averageNodeCapture = convert(data.averageNodeCapture, Number);
    this.averageNodeCaptureAssist = convert(data.averageNodeCaptureAssist, Number);
    this.averageNodeNeutralize = convert(data.averageNodeNeutralize, Number);
    this.averageNodeNeutralizeAssist = convert(data.averageNodeNeutralizeAssist, Number);
    this.averageNumDeaths = convert(data.averageNumDeaths, Number);
    this.averageObjectivePlayerScore = convert(data.averageObjectivePlayerScore, Number);
    this.averageTeamObjective = convert(data.averageTeamObjective, Number);
    this.averageTotalPlayerScore = convert(data.averageTotalPlayerScore, Number);
    this.botGamesPlayed = convert(data.botGamesPlayed, Number);
    this.killingSpree = convert(data.killingSpree, Number);
    this.maxAssists = convert(data.maxAssists, Number);
    this.maxChampionsKilled = convert(data.maxChampionsKilled, Number);
    this.maxCombatPlayerScore = convert(data.maxCombatPlayerScore, Number);
    this.maxLargestCriticalStrike = convert(data.maxLargestCriticalStrike, Number);
    this.maxLargestKillingSpree = convert(data.maxLargestKillingSpree, Number);
    this.maxNodeCapture = convert(data.maxNodeCapture, Number);
    this.maxNodeCaptureAssist = convert(data.maxNodeCaptureAssist, Number);
    this.maxNodeNeutralize = convert(data.maxNodeNeutralize, Number);
    this.maxNodeNeutralizeAssist = convert(data.maxNodeNeutralizeAssist, Number);
    this.maxNumDeaths = convert(data.maxNumDeaths, Number);
    this.maxObjectivePlayerScore = convert(data.maxObjectivePlayerScore, Number);
    this.maxTeamObjective = convert(data.maxTeamObjective, Number);
    this.maxTimePlayed = convert(data.maxTimePlayed, Number);
    this.maxTimeSpentLiving = convert(data.maxTimeSpentLiving, Number);
    this.maxTotalPlayerScore = convert(data.maxTotalPlayerScore, Number);
    this.mostChampionKillsPerSession = convert(data.mostChampionKillsPerSession, Number);
    this.mostSpellsCast = convert(data.mostSpellsCast, Number);
    this.normalGamesPlayed = convert(data.normalGamesPlayed, Number);
    this.rankedPremadeGamesPlayed = convert(data.rankedPremadeGamesPlayed, Number);
    this.rankedSoloGamesPlayed = convert(data.rankedSoloGamesPlayed, Number);
    this.totalAssists = convert(data.totalAssists, Number);
    this.totalChampionKills = convert(data.totalChampionKills, Number);
    this.totalDamageDealt = convert(data.totalDamageDealt, Number);
    this.totalDamageTaken = convert(data.totalDamageTaken, Number);
    this.totalDeathsPerSession = convert(data.totalDeathsPerSession, Number);
    this.totalDoubleKills = convert(data.totalDoubleKills, Number);
    this.totalFirstBlood = convert(data.totalFirstBlood, Number);
    this.totalGoldEarned = convert(data.totalGoldEarned, Number);
    this.totalHeal = convert(data.totalHeal, Number);
    this.totalMagicDamageDealt = convert(data.totalMagicDamageDealt, Number);
    this.totalMinionKills = convert(data.totalMinionKills, Number);
    this.totalNeutralMinionsKilled = convert(data.totalNeutralMinionsKilled, Number);
    this.totalNodeCapture = convert(data.totalNodeCapture, Number);
    this.totalNodeNeutralize = convert(data.totalNodeNeutralize, Number);
    this.totalPentaKills = convert(data.totalPentaKills, Number);
    this.totalPhysicalDamageDealt = convert(data.totalPhysicalDamageDealt, Number);
    this.totalQuadraKills = convert(data.totalQuadraKills, Number);
    this.totalSessionsLost = convert(data.totalSessionsLost, Number);
    this.totalSessionsPlayed = convert(data.totalSessionsPlayed, Number);
    this.totalSessionsWon = convert(data.totalSessionsWon, Number);
    this.totalTripleKills = convert(data.totalTripleKills, Number);
    this.totalTurretsKilled = convert(data.totalTurretsKilled, Number);
    this.totalUnrealKills = convert(data.totalUnrealKills, Number);
  }
}

exports = module.exports = AggregatedStatsDto;
