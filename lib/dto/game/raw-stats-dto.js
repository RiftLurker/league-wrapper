'use strict';

const convert = require('../../util/convert.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/game~RawStatsDto
 * @property {number} assists
 * @property {number} barracksKilled - Number of enemy inhibitors killed.
 * @property {number} bountyLevel
 * @property {number} championsKilled
 * @property {number} combatPlayerScore
 * @property {number} consumablesPurchased
 * @property {number} damageDealtPlayer
 * @property {number} doubleKills
 * @property {number} firstBlood
 * @property {number} gold
 * @property {number} goldEarned
 * @property {number} goldSpent
 * @property {number} item0
 * @property {number} item1
 * @property {number} item2
 * @property {number} item3
 * @property {number} item4
 * @property {number} item5
 * @property {number} item6
 * @property {number} itemsPurchased
 * @property {number} killingSprees
 * @property {number} largestCriticalStrike
 * @property {number} largestKillingSpree
 * @property {number} largestMultiKill
 * @property {number} legendaryItemsCreated - Number of tier 3 items built.
 * @property {number} level
 * @property {number} magicDamageDealtPlayer
 * @property {number} magicDamageDealtToChampions
 * @property {number} magicDamageTaken
 * @property {number} minionsDenied
 * @property {number} minionsKilled
 * @property {number} neutralMinionsKilled
 * @property {number} neutralMinionsKilledEnemyJungle
 * @property {number} neutralMinionsKilledYourJungle
 * @property {boolean} nexusKilled - Flag specifying if the summoner got the killing blow on the nexus.
 * @property {number} nodeCapture
 * @property {number} nodeCaptureAssist
 * @property {number} nodeNeutralize
 * @property {number} nodeNeutralizeAssist
 * @property {number} numDeaths
 * @property {number} numItemsBought
 * @property {number} objectivePlayerScore
 * @property {number} pentaKills
 * @property {number} physicalDamageDealtPlayer
 * @property {number} physicalDamageDealtToChampions
 * @property {number} physicalDamageTaken
 * @property {number} playerPosition - Player position (Legal values: TOP(1), MIDDLE(2), JUNGLE(3), BOT(4)) // @todo: enum PlayerPosition
 * @property {number} playerRole - Player role (Legal values: DUO(1), SUPPORT(2), CARRY(3), SOLO(4)) // @todo: enum PlayerRole
 * @property {number} playerScore0
 * @property {number} playerScore1
 * @property {number} playerScore2
 * @property {number} playerScore3
 * @property {number} playerScore4
 * @property {number} playerScore5
 * @property {number} playerScore6
 * @property {number} playerScore7
 * @property {number} playerScore8
 * @property {number} playerScore9
 * @property {number} quadraKills
 * @property {number} sightWardsBought
 * @property {number} spell1Cast - Number of times first champion spell was cast.
 * @property {number} spell2Cast - Number of times second champion spell was cast.
 * @property {number} spell3Cast - Number of times third champion spell was cast.
 * @property {number} spell4Cast - Number of times fourth champion spell was cast.
 * @property {number} summonSpell1Cast
 * @property {number} summonSpell2Cast
 * @property {number} superMonsterKilled
 * @property {number} team
 * @property {number} teamObjective
 * @property {number} timePlayed
 * @property {number} totalDamageDealt
 * @property {number} totalDamageDealtToChampions
 * @property {number} totalDamageTaken
 * @property {number} totalHeal
 * @property {number} totalPlayerScore
 * @property {number} totalScoreRank
 * @property {number} totalTimeCrowdControlDealt
 * @property {number} totalUnitsHealed
 * @property {number} tripleKills
 * @property {number} trueDamageDealtPlayer
 * @property {number} trueDamageDealtToChampions
 * @property {number} trueDamageTaken
 * @property {number} turretsKilled
 * @property {number} unrealKills
 * @property {number} victoryPointTotal
 * @property {number} visionWardsBought
 * @property {number} wardKilled
 * @property {number} wardPlaced
 * @property {boolean} win - Flag specifying whether or not this game was won.
 */
class RawStatsDto    {
  constructor(data) {
    this.assists = convert(data.assists, Number);
    this.barracksKilled = convert(data.barracksKilled, Number);
    this.bountyLevel = convert(data.bountyLevel, Number);
    this.championsKilled = convert(data.championsKilled, Number);
    this.combatPlayerScore = convert(data.combatPlayerScore, Number);
    this.consumablesPurchased = convert(data.consumablesPurchased, Number);
    this.damageDealtPlayer = convert(data.damageDealtPlayer, Number);
    this.doubleKills = convert(data.doubleKills, Number);
    this.firstBlood = convert(data.firstBlood, Number);
    this.gold = convert(data.gold, Number);
    this.goldEarned = convert(data.goldEarned, Number);
    this.goldSpent = convert(data.goldSpent, Number);
    this.item0 = convert(data.item0, Number);
    this.item1 = convert(data.item1, Number);
    this.item2 = convert(data.item2, Number);
    this.item3 = convert(data.item3, Number);
    this.item4 = convert(data.item4, Number);
    this.item5 = convert(data.item5, Number);
    this.item6 = convert(data.item6, Number);
    this.itemsPurchased = convert(data.itemsPurchased, Number);
    this.killingSprees = convert(data.killingSprees, Number);
    this.largestCriticalStrike = convert(data.largestCriticalStrike, Number);
    this.largestKillingSpree = convert(data.largestKillingSpree, Number);
    this.largestMultiKill = convert(data.largestMultiKill, Number);
    this.legendaryItemsCreated = convert(data.legendaryItemsCreated, Number);
    this.level = convert(data.level, Number);
    this.magicDamageDealtPlayer = convert(data.magicDamageDealtPlayer, Number);
    this.magicDamageDealtToChampions = convert(data.magicDamageDealtToChampions, Number);
    this.magicDamageTaken = convert(data.magicDamageTaken, Number);
    this.minionsDenied = convert(data.minionsDenied, Number);
    this.minionsKilled = convert(data.minionsKilled, Number);
    this.neutralMinionsKilled = convert(data.neutralMinionsKilled, Number);
    this.neutralMinionsKilledEnemyJungle = convert(data.neutralMinionsKilledEnemyJungle, Number);
    this.neutralMinionsKilledYourJungle = convert(data.neutralMinionsKilledYourJungle, Number);
    this.nexusKilled = convert(data.nexusKilled, Boolean);
    this.nodeCapture = convert(data.nodeCapture, Number);
    this.nodeCaptureAssist = convert(data.nodeCaptureAssist, Number);
    this.nodeNeutralize = convert(data.nodeNeutralize, Number);
    this.nodeNeutralizeAssist = convert(data.nodeNeutralizeAssist, Number);
    this.numDeaths = convert(data.numDeaths, Number);
    this.numItemsBought = convert(data.numItemsBought, Number);
    this.objectivePlayerScore = convert(data.objectivePlayerScore, Number);
    this.pentaKills = convert(data.pentaKills, Number);
    this.physicalDamageDealtPlayer = convert(data.physicalDamageDealtPlayer, Number);
    this.physicalDamageDealtToChampions = convert(data.physicalDamageDealtToChampions, Number);
    this.physicalDamageTaken = convert(data.physicalDamageTaken, Number);
    this.playerPosition = convert(data.playerPosition, Number);
    this.playerRole = convert(data.playerRole, Number);
    this.playerScore0 = convert(data.playerScore0, Number);
    this.playerScore1 = convert(data.playerScore0, Number);
    this.playerScore2 = convert(data.playerScore0, Number);
    this.playerScore3 = convert(data.playerScore0, Number);
    this.playerScore4 = convert(data.playerScore0, Number);
    this.playerScore5 = convert(data.playerScore0, Number);
    this.playerScore6 = convert(data.playerScore0, Number);
    this.playerScore7 = convert(data.playerScore0, Number);
    this.playerScore8 = convert(data.playerScore0, Number);
    this.playerScore9 = convert(data.playerScore0, Number);
    this.quadraKills = convert(data.quadraKills, Number);
    this.sightWardsBought = convert(data.sightWardsBought, Number);
    this.spell1Cast = convert(data.spell1Cast, Number);
    this.spell2Cast = convert(data.spell2Cast, Number);
    this.spell3Cast = convert(data.spell3Cast, Number);
    this.spell4Cast = convert(data.spell4Cast, Number);
    this.summonSpell1Cast = convert(data.summonSpell1Cast, Number);
    this.summonSpell2Cast = convert(data.summonSpell2Cast, Number);
    this.superMonsterKilled = convert(data.superMonsterKilled, Number);
    this.team = convert(data.team, Number);
    this.teamObjective = convert(data.teamObjective, Number);
    this.timePlayed = convert(data.timePlayed, Number);
    this.totalDamageDealt = convert(data.totalDamageDealt, Number);
    this.totalDamageDealtToChampions = convert(data.totalDamageDealtToChampions, Number);
    this.totalDamageTaken = convert(data.totalDamageTaken, Number);
    this.totalHeal = convert(data.totalHeal, Number);
    this.totalPlayerScore = convert(data.totalPlayerScore, Number);
    this.totalScoreRank = convert(data.totalScoreRank, Number);
    this.totalTimeCrowdControlDealt = convert(data.totalTimeCrowdControlDealt, Number);
    this.totalUnitsHealed = convert(data.totalUnitsHealed, Number);
    this.tripleKills = convert(data.tripleKills, Number);
    this.trueDamageDealtPlayer = convert(data.trueDamageDealtPlayer, Number);
    this.trueDamageDealtToChampions = convert(data.trueDamageDealtToChampions, Number);
    this.trueDamageTaken = convert(data.trueDamageTaken, Number);
    this.turretsKilled = convert(data.turretsKilled, Number);
    this.unrealKills = convert(data.unrealKills, Number);
    this.victoryPointTotal = convert(data.victoryPointTotal, Number);
    this.visionWardsBought = convert(data.visionWardsBought, Number);
    this.wardKilled = convert(data.wardKilled, Number);
    this.wardPlaced = convert(data.wardPlaced, Number);
    this.win = convert(data.win, Boolean);
  }
}

exports = module.exports = RawStatsDto;
