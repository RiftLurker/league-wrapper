
/**
 * @typedef {Object} LolStaticDataService~BasicDataStatsDto
 * @todo specify properties
 */
/**
 * @typedef {Object} LolStaticDataService~GoldDto
 * @todo specify properties
 */
/**
 * @typedef {Object} LolStaticDataService~MetaDataDto
 * @todo specify properties
 */
/**
 * @typedef {Object} LolStaticDataService~LanguageStringsDto
 * @todo specify properties
 */
/**
 * @typedef {Object} LolStaticDataService~MapDataDto
 * @todo specify properties
 */
/**
 * @typedef {Object} LolStaticDataService~MapDetailsDto
 * @todo specify properties
 */
/**
 * @typedef {Object} LolStaticDataService~MasteryListDto
 * @todo specify properties
 */
/**
 * @typedef {Object} LolStaticDataService~MasteryTreeDto
 * @todo specify properties
 */
/**
 * @typedef {Object} LolStaticDataService~MasteryTryListDto
 * @todo specify properties
 */
/**
 * @typedef {Object} LolStaticDataService~MasteryTreeItemDto
 * @todo specify properties
 */
/**
 * @typedef {Object} LolStaticDataService~RealmDto
 * @todo specify properties
 */
/**
 * @typedef {Object} LolStaticDataService~RuneListDto
 * @todo specify properties
 */
/**
 * @typedef {Object} LolStaticDataService~RuneDto
 * @todo specify properties
 */
/**
 * @typedef {Object} LolStaticDataService~SummonerSpellListDto
 * @todo specify properties
 */
/**
 * @typedef {Object} LolStaticDataService~SummonerSpellDto
 * @todo specify properties
 */
/**
 * @typedef {Object} MatchService~Team
 * @todo specify properties
 */
/**
 * @typedef {Object} MatchService~Timeline
 * @todo specify properties
 */
/**
 * @typedef {Object} MatchService~ParticipantStats
 * @todo specify properties
 */
/**
 * @typedef {Object} MatchService~ParticipantTimeline
 * @todo specify properties
 */
/**
 * @typedef {Object} MatchService~Player
 * @todo specify properties
 */
/**
 * @typedef {Object} MatchService~Frame
 * @todo specify properties
 */
/**
 * @typedef {Object} MatchService~ParticipantTimelineData
 * @todo specify properties
 */
/**
 * @typedef {Object} MatchService~Event
 * @todo specify properties
 */
/**
 * @typedef {Object} MatchService~ParticipantFrame
 * @todo specify properties
 */
/**
 * @typedef {Object} MatchService~Position
 * @todo specify properties
 */
/**
 * @typedef {Object} MatchlistService~MatchList
 * @todo specify properties
 */
/**
 * @typedef {Object} MatchlistService~MatchReference
 * @property {number} champion
 * @property {Lane} lane
 * @property {number} matchId
 * @property {string} plattformId
 * @property {string} queue // @todo specify properties: enum
 * @property {string] region
 * @property {Role] role
 * @property {Season} season
 * @property {number} timestamp
 */
/**
 * @typedef {Object} StatsService~RankedStatsDto
 * @property {Array.<StatsService~ChampionStatsDto>} champions
 * @property {number} modifyDate
 * @property {number} summonerId
 */
/**
 * @typedef {Object} StatsService~ChampionStatsDto
 * @property {number} id
 * @property {StatsService~AggregatedStatsDto} stats
 */
/**
 * @typedef {Object} StatsService~AggregatedStatsDto
 * @property {number} averageAssists
 * @property {number} averageChampionsKilled
 * @property {number} averageCombatPlayerScore
 * @property {number} averageNodeCapture
 * @property {number} averageNodeCaptureAssist
 * @property {number} averageNodeNeutralize
 * @property {number} averageNodeNeutralizeAssist
 * @property {number} averageNumDeaths
 * @property {number} averageObjectivePlayerScore
 * @property {number} averageTeamObjective
 * @property {number} averageTotalPlayerScore
 * @property {number} botGamesPlayed
 * @property {number} killingSpree
 * @property {number} maxAssists
 * @property {number} maxChampionsKilled
 * @property {number} maxCombatPlayerScore
 * @property {number} maxLargestCriticalStrike
 * @property {number} maxLargestKillingSpree
 * @property {number} maxNodeCapture
 * @property {number} maxNodeCaptureAssist
 * @property {number} maxNodeNeutralize
 * @property {number} maxNodeNeutralizeAssist
 * @property {number} maxNumDeaths
 * @property {number} maxObjectivePlayerScore
 * @property {number} maxTeamObjective
 * @property {number} maxTimePlayed
 * @property {number} maxTimeSpentLiving
 * @property {number} maxTotalPlayerScore
 * @property {number} mostChampionKillsPerSession
 * @property {number} mostSpellsCast
 * @property {number} normalGamesPlayed
 * @property {number} rankedPremadeGamesPlayed
 * @property {number} rankedSoloGamesPlayed
 * @property {number} totalAssists
 * @property {number} totalChampionKills
 * @property {number} totalDamageDealt
 * @property {number} totalDamageTaken
 * @property {number} totalDeathsPerSession
 * @property {number} totalDoubleKills
 * @property {number} totalFirstBlood
 * @property {number} totalGoldEarned
 * @property {number} totalHeal
 * @property {number} totalMagicDamageDealt
 * @property {number} totalMinionKills
 * @property {number} totalNeutralMinionsKilled
 * @property {number} totalNodeCapture
 * @property {number} totalNodeNeutralize
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
/**
 * @typedef {Object} StatsService~PlayerStatsSummaryListDto
 * @property {Array.<StatsService~PlayerStatsSummaryDto>} playerStatSummaries
 * @property {number} summonerId
 */
/**
 * @typedef {Object} StatsService~PlayerStatsSummaryDto
 * @property {StatsService~AggregatedStatsDto} aggregatedStats
 * @property {number} losses
 * @property {number} modifyDate
 * @property {PlayerStatSummaryType} playerStatSummaryType
 * @property {number} wins
 */
