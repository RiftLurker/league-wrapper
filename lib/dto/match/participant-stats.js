'use strict';

const convert = require('../../util/convert.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/match~ParticipantStats
 * @property {number} assists - Number of assists
 * @property {number} champLevel - Champion level achieved
 * @property {number} combatPlayerScore - If game was a dominion game, player's combat score, otherwise 0
 * @property {number} deaths - Number of deaths
 * @property {number} doubleKills - Number of double kills
 * @property {boolean} firstBloodAssist - Flag indicating if participant got an assist on first blood
 * @property {boolean} firstBloodKill - Flag indicating if participant got first blood
 * @property {boolean} firstInhibitorAssist - Flag indicating if participant got an assist on the first inhibitor
 * @property {boolean} firstInhibitorKill - Flag indicating if participant destroyed the first inhibitor
 * @property {boolean} firstTowerAssist - Flag indicating if participant got an assist on the first tower
 * @property {boolean} firstTowerKill - Flag indicating if participant destroyed the first tower
 * @property {number} goldEarned - Gold earned
 * @property {number} goldSpent - Gold spent
 * @property {number} inhibitorKills - Number of inhibitor kills
 * @property {number} item0 - First item ID
 * @property {number} item1 - Second item ID
 * @property {number} item2 - Third item ID
 * @property {number} item3 - Fourth item ID
 * @property {number} item4 - Fifth item ID
 * @property {number} item5 - Sixth item ID
 * @property {number} item6 - Seventh item ID
 * @property {number} killingSprees - Number of killing sprees
 * @property {number} kills - Number of kills
 * @property {number} largestCriticalStrike - Largest critical strike
 * @property {number} largestKillingSpree - Largest killing spree
 * @property {number} largestMultiKill - Largest multi kill
 * @property {number} magicDamageDealt - Magical damage dealt
 * @property {number} magicDamageDealtToChampions - Magical damage dealt to champions
 * @property {number} magicDamageTaken - Magic damage taken
 * @property {number} minionsKilled - Minions killed
 * @property {number} neutralMinionsKilled - Neutral minions killed
 * @property {number} neutralMinionsKilledEnemyJungle - Neutral jungle minions killed in the enemy team's jungle
 * @property {number} neutralMinionsKilledTeamJungle - Neutral jungle minions killed in your team's jungle
 * @property {number} nodeCapture - If game was a dominion game, number of node captures
 * @property {number} nodeCaptureAssist - If game was a dominion game, number of node capture assists
 * @property {number} nodeNeutralize - If game was a dominion game, number of node neutralizations
 * @property {number} nodeNeutralizeAssist - If game was a dominion game, number of node neutralization assists
 * @property {number} objectivePlayerScore - If game was a dominion game, player's objectives score, otherwise 0
 * @property {number} pentaKills - Number of penta kills
 * @property {number} physicalDamageDealt - Physical damage dealt
 * @property {number} physicalDamageDealtToChampions - Physical damage dealt to champions
 * @property {number} physicalDamageTaken - Physical damage taken
 * @property {number} quadraKills - Number of quadra kills
 * @property {number} sightWardsBoughtInGame - Sight wards purchased
 * @property {number} teamObjective - If game was a dominion game, number of completed team objectives (i.e., quests)
 * @property {number} totalDamageDealt - Total damage dealt
 * @property {number} totalDamageDealtToChampions - Total damage dealt to champions
 * @property {number} totalDamageTaken - Total damage taken
 * @property {number} totalHeal - Total heal amount
 * @property {number} totalPlayerScore - If game was a dominion game, player's total score, otherwise 0
 * @property {number} totalScoreRank - If game was a dominion game, team rank of the player's total score (e.g., 1-5)
 * @property {number} totalTimeCrowdControlDealt - Total dealt crowd control time
 * @property {number} totalUnitsHealed - Total units healed
 * @property {number} towerKills - Number of tower kills
 * @property {number} tripleKills - Number of triple kills
 * @property {number} trueDamageDealt - True damage dealt
 * @property {number} trueDamageDealtToChampions - True damage dealt to champions
 * @property {number} trueDamageTaken - True damage taken
 * @property {number} unrealKills - Number of unreal kills
 * @property {number} visionWardsBoughtInGame - Vision wards purchased
 * @property {number} wardsKilled - Number of wards killed
 * @property {number} wardsPlaced - Number of wards placed
 * @property {boolean} winner - Flag indicating whether or not the participant won
 */
class ParticipantStats {
  constructor(data) {
    this.assists = convert(data.assists, Number);
    this.champLevel = convert(data.champLevel, Number);
    this.combatPlayerScore = convert(data.combatPlayerScore, Number);
    this.deaths = convert(data.deaths, Number);
    this.doubleKills = convert(data.doubleKills, Number);
    this.firstBloodAssist = convert(data.firstBloodAssist, Number);
    this.firstBloodKill = convert(data.firstBloodKill, Number);
    this.firstInhibitorAssist = convert(data.firstInhibitorAssist, Number);
    this.firstInhibitorKill = convert(data.firstInhibitorKill, Number);
    this.firstTowerAssist = convert(data.firstTowerAssist, Number);
    this.firstTowerKill = convert(data.firstTowerKill, Number);
    this.goldEarned = convert(data.goldEarned, Number);
    this.goldSpent = convert(data.goldSpent, Number);
    this.inhibitorKills = convert(data.inhibitorKills, Number);
    this.item0 = convert(data.item0, Number);
    this.item1 = convert(data.item1, Number);
    this.item2 = convert(data.item2, Number);
    this.item3 = convert(data.item3, Number);
    this.item4 = convert(data.item4, Number);
    this.item5 = convert(data.item5, Number);
    this.item6 = convert(data.item6, Number);
    this.killingSprees = convert(data.killingSprees, Number);
    this.kills = convert(data.kills, Number);
    this.largestCriticalStrike = convert(data.largestCriticalStrike, Number);
    this.largestKillingSpree = convert(data.largestKillingSpree, Number);
    this.largestMultiKill = convert(data.largestMultiKill, Number);
    this.magicDamageDealt = convert(data.magicDamageDealt, Number);
    this.magicDamageDealtToChampions = convert(data.magicDamageDealtToChampions, Number);
    this.magicDamageTaken = convert(data.magicDamageTaken, Number);
    this.minionsKilled = convert(data.minionsKilled, Number);
    this.neutralMinionsKilled = convert(data.neutralMinionsKilled, Number);
    this.neutralMinionsKilledEnemyJungle = convert(data.neutralMinionsKilledEnemyJungle, Number);
    this.neutralMinionsKilledTeamJungle = convert(data.neutralMinionsKilledTeamJungle, Number);
    this.nodeCapture = convert(data.nodeCapture, Number);
    this.nodeCaptureAssist = convert(data.nodeCaptureAssist, Number);
    this.nodeNeutralize = convert(data.nodeNeutralize, Number);
    this.nodeNeutralizeAssist = convert(data.nodeNeutralizeAssist, Number);
    this.objectivePlayerScore = convert(data.objectivePlayerScore, Number);
    this.pentaKills = convert(data.pentaKills, Number);
    this.physicalDamageDealt = convert(data.physicalDamageDealt, Number);
    this.physicalDamageDealtToChampions = convert(data.physicalDamageDealtToChampions, Number);
    this.physicalDamageTaken = convert(data.physicalDamageTaken, Number);
    this.quadraKills = convert(data.quadraKills, Number);
    this.sightWardsBoughtInGame = convert(data.sightWardsBoughtInGame, Number);
    this.teamObjective = convert(data.teamObjective, Number);
    this.totalDamageDealt = convert(data.totalDamageDealt, Number);
    this.totalDamageDealtToChampions = convert(data.totalDamageDealtToChampions, Number);
    this.totalDamageTaken = convert(data.totalDamageTaken, Number);
    this.totalHeal = convert(data.totalHeal, Number);
    this.totalPlayerScore = convert(data.totalPlayerScore, Number);
    this.totalScoreRank = convert(data.totalScoreRank, Number);
    this.totalTimeCrowdControlDealt = convert(data.totalTimeCrowdControlDealt, Number);
    this.totalUnitsHealed = convert(data.totalUnitsHealed, Number);
    this.towerKills = convert(data.towerKills, Number);
    this.tripleKills = convert(data.tripleKills, Number);
    this.trueDamageDealt = convert(data.trueDamageDealt, Number);
    this.trueDamageDealtToChampions = convert(data.trueDamageDealtToChampions, Number);
    this.trueDamageTaken = convert(data.trueDamageTaken, Number);
    this.unrealKills = convert(data.unrealKills, Number);
    this.visionWardsBoughtInGame = convert(data.visionWardsBoughtInGame, Number);
    this.wardsKilled = convert(data.wardsKilled, Number);
    this.wardsPlaced = convert(data.wardsPlaced, Number);
    this.winner = convert(data.winner, Boolean);
  }
}

exports = module.exports = ParticipantStats;
