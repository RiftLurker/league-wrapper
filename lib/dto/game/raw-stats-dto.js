'use strict';

const convert = require('../../util/convert.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/game~PlayerDto
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
class PlayerDto    {
  constructor(data) {
    // @todo
  }
}

exports = module.exports = PlayerDto   ;
