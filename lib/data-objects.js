'use strict';

/**
 * @namespace ChampionListDto
 * @property {Array.<ChampionDto>} champions;
 */

/**
 * @namespace ChampionDto
 * @property {boolean} active;
 * @property {boolean} botEnabled;
 * @property {boolean} botMmEnabled;
 * @property {boolean} freeToPlay;
 * @property {number} id;
 * @property {boolean} rankedPlayEnabled;
 */

/**
 * @namespace ChampionMasteryDTO
 * @property {number} championId;
 * @property {number} championLevel;
 * @property {number} championPoints;
 * @property {number} championPointsSinceLastLevel;
 * @property {number} championPointsUntilNextLevel;
 * @property {boolean} chestGranted;
 * @property {number} lastPlayTime;
 * @property {number} playerId;
 */
/**
 * @namespace CurrentGameInfo
 * @property {Array.<BannedChampion>} bannedChampions
 * @property {number} gameId
 * @property {number} gameLength
 * @property {GameMode} gameMode
 * @property {number} gameQueueConfigId
 * @property {number} gameStartTime
 * @property {GameType} gameType
 * @property {number} mapId
 * @property {Observer} observers
 * @property {Array.<CurrentGameParticipant>} participants
 * @property {string} plattformId
 */
/**
 * @namespace BannedChampion
 * @property {number} championId
 * @property {number} pickTurn
 * @property {number} teamId
 */
/**
 * @namespace CurrentGameParticipant
 * @property {boolean} bot
 * @property {number} championId
 * @property {Array.<Mastery>} masteries
 * @property {number} profileIconId
 * @property {Array.<Rune>} runes
 * @property {number} spell1Id
 * @property {number} spell2Id
 * @property {number} summonerId
 * @property {string} summonersName
 * @property {number} teamId
 */
/**
 * @namespace Observer
 * @property {string} encryptionKey
 */
/**
 * @namespace Mastery
 * @property {number} masteryId
 * @property {number} rank
 */
/**
 * @namespace Rune
 * @property {number} count
 * @property {number} runeId
 */
/**
 * @namespace FeaturedGames
 * @property {number} clientRefreshInterval
 * @property {Array.<FeaturedGameInfo>} gameList
 */
/**
 * @namespace FeaturedGameInfo
 * @property {Array.<BannedChampion>} bannedChampions
 * @property {number} gameId
 * @property {number} gameLength
 * @property {GameMode} gameMode
 * @property {number} gameQueueConfigId
 * @property {number} gameStartTime
 * @property {GameType} gameType
 * @property {number} mapId
 * @property {Observer} observers
 * @property {Array.<Participant>} participants
 * @property {string} plattformId
 */
/**
 * @namespace Participant
 * @property {boolean} bot
 * @property {number} championId
 * @property {number} profileIconId
 * @property {number} spell1Id
 * @property {number} spell2Id
 * @property {string} summonerName
 * @property {number} teamId
 */
/**
 * @namespace RecentGamesDto
 * @property {Array.<GameDto>} games
 * @property {number} summonerId
 */
/**
 * @namespace GameDto
 * @property {number} championId
 * @property {number} createDate
 * @property {Array.<PlayerDto>} fellowPlayers
 * @property {number} gameId
 * @property {GameMode} gameMode
 * @property {GameType} gameType
 * @property {boolean} invalid
 * @property {number} ipEarned
 * @property {number} level
 * @property {number} mapId
 * @property {number} spell1
 * @property {number} spell2
 * @property {RawStatsDto} stats
 * @property {SubType} subType
 * @property {Team} teamId // @todo: Check if really useful
 */
/**
 * @namespace PlayerDto
 * @property {number} championId
 * @property {number} summonerId
 * @property {number} teamId
 */
/**
 * @namespace RawStatsDto
 * @property {number} assists
 * @property {number} barracksKilled
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
 * @property {number} legendaryItemsCreated
 * @property {number} level
 * @property {number} magicDamageDealtPlayer
 * @property {number} magicDamageDealtToChampions
 * @property {number} magicDamageTaken
 * @property {number} minionsDenied
 * @property {number} minionsKilled
 * @property {number} neutralMinionsKilled
 * @property {number} neutralMinionsKilledEnemyJungle
 * @property {number} neutralMinionsKilledYourJungle
 * @property {boolean} nexusKilled
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
 * @property {PlayerPosition} playerPosition
 * @property {PlayerRole} playerRole
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
 * @property {number} spell1Cast
 * @property {number} spell2Cast
 * @property {number} spell3Cast
 * @property {number} spell4Cast
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
 * @property {boolean} win
 */
/**
 * @namespace LeagueDto
 * @property {Array.<LeagueEntryDto>} entries
 * @property {string} name
 * @property {string} participantId
 * @property {string} queue // @todo: enum
 * @property {LeagueTier} tier
 */
/**
 * @namespace LeagueEntryDto
 * @property {string} division
 * @property {boolean} isFreshBlood
 * @property {boolean} isHotStreak
 * @property {boolean} isInactive
 * @property {boolean} isVeteran
 * @property {number} leaguePoints
 * @property {number} losses
 * @property {MiniSeriesDto} miniSeries
 * @property {string} playerOrTeamId
 * @property {string} playerOrTeamName
 * @property {Playstyle} playStyle
 * @property {number} wins
 */
/**
 * @namespace MiniSeriesDto
 * @property {number} losses
 * @property {string} progress
 * @property {number} target
 * @property {number} wins
 */
/**
 * @namespace StaticChampionListDto
 * @property {Object.<ChampionDto>} data
 * @property {string} format
 * @property {Object.<string>} keys
 * @property {string} type
 * @property {string} version
 */
/**
 * @namespace StaticChampionDto
 * @property {Array.<string>} allytips
 * @property {string] blurb
 * @property {Array.<string>} enemytips
 * @property {number} id
 * @property {ImageDto} image
 * @property {InfoDto} info
 * @property {string} key
 * @property {string} lore
 * @property {string} name
 * @property {string} partype
 * @property {PassiveDto} passive
 * @property {Array.<RecommendedDto>} recommended
 * @property {Array.<SkinDto>} skins
 * @property {Array.<ChampionSpellDto>} spells
 * @property {StatsDto} stats
 * @property {Array.<string>} tags
 * @property {string} title
 */
/**
 * @namespace ChampionSpellDto
 * @property {Array.<ImageDto>} altimages
 * @property {Array.<number>} cooldown
 * @property {string} cooldownBurn
 * @property {Array.<number>} cost
 * @property {string} costBurn
 * @property {string} costType
 * @property {string} description
 * @property {Array.<Array.<number>> effect // @todo: check "This field is a List of List of Double"
 * @property {Array.<string>} effectBurn
 * @property {ImageDto} image
 * @property {string} key
 * @property {LevelTipDto} leveltip
 * @property {number} maxrank
 * @property {string} name
 * @property {Object} range // @todo: This field is either a List of Integer or the String "self" for spells that target one's own champion
 * @property {string} rangeBurn
 * @property {string} resource
 * @property {string} sanitizedDescription
 * @property {string} sanitizedTooltip
 * @property {string} tooltip
 * @property {Array.<SpellVarsDto>} vars
 */
/**
 * @namespace ImageDto
 * @property {string} full
 * @property {string} group
 * @property {number} h
 * @property {string} sprite
 * @property {number} w
 * @property {number} x
 * @property {number} y
 */
/**
 * @namespace InfoDto
 * @property {number} attack
 * @property {number} defense
 * @property {number} difficulty
 * @property {number} magic
 */
/**
 * @namespace PassiveDto
 * @property {string} description
 * @property {ImageDto} image
 * @property {string} name
 * @property {string} sanitizedDescription
 */
/**
 * @namespace RecommendedDto
 * @property {Array.<BlockDto>} blocks
 * @property {string} champion
 * @property {string} map
 * @property {string} mode
 * @property {boolean} priority
 * @property {string} title
 * @property {string} type
 */
/**
 * @namespace SkinDto
 * @property {number} id
 * @property {string} name
 * @property {number} num
 */
/**
 * @namespace StatsDto
 * @property {number} armor
 * @property {number} armorperlevel
 * @property {number} attackdamage
 * @property {number} attackdamageperlevel
 * @property {number} attackrange
 * @property {number} attackspeedoffset
 * @property {number} attackspeedperlevel
 * @property {number} crit
 * @property {number} critperlevel
 * @property {number} hp
 * @property {number} hpperlevel
 * @property {number} hpregen
 * @property {number} hpregenperlevel
 * @property {number} movespeed
 * @property {number} mp
 * @property {number} mpperlevel
 * @property {number} mpregen
 * @property {number} mpregenperlevel
 * @property {number} spellblock
 * @property {number} spellblockperlevel
 */
/**
 * @namespace LevelTipDto
 * @property {Array.<string>} effect
 * @property {Array.<string>} label
 */
/**
 * @namespace SpellVarsDto
 * @property {Array.<number>} coeff
 * @property {string} dyn
 * @property {string} key
 * @property {string} link
 * @property {string} ranksWith
 */
/**
 * @namespace BlockDto
 * @property {Array.<BlockItemDto>} items
 * @property {boolean} recMath
 * @property {string} type
 */
/**
 * @namespace BlockItemDto
 * @property {number} count
 * @property {number} id
 */
/**
 * @namespace ItemListDto
 */
/**
 * @namespace BasicDataDto
 */
/**
 * @namespace GroupDto
 */
/**
 * @namespace ItemDto
 */
/**
 * @namespace ItemTreeDto
 */
/**
 * @namespace BasicDataStatsDto
 */
/**
 * @namespace GoldDto
 */
/**
 * @namespace MetaDataDto
 */
/**
 * @namespace LanguageStringsDto
 */
/**
 * @namespace MapDataDto
 */
/**
 * @namespace MapDetailsDto
 */
/**
 * @namespace MasteryListDto
 */
/**
 * @namespace MasteryTreeDto
 */
/**
 * @namespace MasteryTryListDto
 */
/**
 * @namespace MasteryTreeItemDto
 */
/**
 * @namespace RealmDto
 */
/**
 * @namespace RuneListDto
 */
/**
 * @namespace RuneDto
 */
/**
 * @namespace SummonerSpellListDto
 */
/**
 * @namespace SummonerSpellDto
 */
/**
 * @namespace Shard
 * @property {string} hostname
 * @property {Array.<String>} locales
 * @property {string} name
 * @property {string} region_tag
 * @property {string} slug
 */
/**
 * @namespace ShardStatus
 * @property {string} hostname
 * @property {Array.<String>} locales
 * @property {string} name
 * @property {string} region_tag
 * @property {Array.<Service>} services
 * @property {string} slug
 */
/**
 * @namespace Service
 * @property {Array.<Incident>} incidents
 * @property {string} name
 * @property {string} slug
 * @property {string} status
 */
/**
 * @namespace Incident
 * @property {boolean} active
 * @property {string} created_at
 * @property {number} id
 * @property {Array.<Message>} updates
 */
/**
 * @namespace Message
 * @property {string} author
 * @property {string} content
 * @property {string} created_at
 * @property {string} id
 * @property {string} severity
 * @property {Array.<Translation>} translations
 * @property {string] updated_at
 */
/**
 * @namespace Translation
 * @property {string} content
 * @property {string} locale
 * @property {string} updated_at
 */
/**
 * @namespace MatchDetail
 * @property {number} mapId
 * @property {number} matchCreation
 * @property {number} matchDuration
 * @property {GameMode} matchMode
 * @property {GameType} matchType
 * @property {string} matchVersion
 * @property {Array.<ParticipantIdentity>} participantIdentities
 * @property {Array.<MatchParticipant>} participants
 * @property {string} plattformId
 * @property {string} queueType // @todo: enum
 * @property {string} region // @todo: region?
 * @property {Season} season
 * @property {Array.<Team>} teams
 * @property {Timeline} timeline
 */
/**
 * @namespace MatchParticipant
 * @property {number} championId,
 * @property {LeagueTier} highestAchievedSeasonTier
 * @property {Array.<Mastery>} masteries
 * @property {number} participantId
 * @property {Array.<Rune>} runes
 * @property {number} spell1Id
 * @property {number} spell2Id
 * @property {ParticipantStats} stats
 * @property {number} teamId
 * @property {ParticipantTimeline} timeline
 */
/**
 * @namespace ParticipantIdentity
 */
/**
 * @namespace Team
 */
/**
 * @namespace Timeline
 */
/**
 * @namespace ParticipantStats
 */
/**
 * @namespace ParticipantTimeline
 */
/**
 * @namespace Player
 */
/**
 * @namespace Frame
 */
/**
 * @namespace ParticipantTimelineData
 */
/**
 * @namespace Event
 */
/**
 * @namespace ParticipantFrame
 */
/**
 * @namespace Position
 */
/**
 * @namespace MatchList
 */
/**
 * @namespace MatchReference
 * @property {number} champion
 * @property {Lane} lane
 * @property {number} matchId
 * @property {string} plattformId
 * @property {string} queue // @todo: enum
 * @property {string] region
 * @property {Role] role
 * @property {Season} season
 * @property {number} timestamp
 */
/**
 * @namespace RankedStatsDto
 * @property {Array.<ChampionStatsDto>} champions
 * @property {number} modifyDate
 * @property {number} summonerId
 */
/**
 * @namespace ChampionStatsDto
 * @property {number} id
 * @property {AggregatedStatsDto} stats
 */
/**
 * @namespace AggregatedStatsDto
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
 * @namespace PlayerStatsSummaryListDto
 * @property {Array.<PlayerStatsSummaryDto>} playerStatSummaries
 * @property {number} summonerId
 */
/**
 * @namespace PlayerStatsSummaryDto
 * @property {AggregatedStatsDto} aggregatedStats
 * @property {number} losses
 * @property {number} modifyDate
 * @property {PlayerStatSummaryType} playerStatSummaryType
 * @property {number} wins
 */
/**
 * @namespace SummonerDto
 */
/**
 * @namespace MasteryPagesDto
 */
/**
 * @namespace MasteryPageDto
 */
/**
 * @namespace MasteryDto
 * @property {Array.<string>} description
 * @property {number} id
 * @property {ImageDto} image
 * @property {MasteryTree} masteryTree
 * @property {string} name
 * @property {name} prereq
 * @property {number} ranks
 * @property {Array.<string>} sanitizedDescription
 */
/**
 * @namespace RunePagesDto
 */
/**
 * @namespace RunePageDto
 */
/**
 * @namespace RuneSlotDto
 */
/**
 * @namespace TeamDto
 * @property {number} createDate
 * @property {string} fullId
 * @property {number} lastGameDate
 * @property {number} lastJoinDate
 * @property {number} lastJoinedRankedTeamQueueDate
 * @property {Array.<MatchHistorySummaryDto>} matchHistory
 * @property {number} modifyDate
 * @property {string} name
 * @property {RosterDto} roster
 * @property {number} secondLastJoinDate
 * @property {string} status
 * @property {string} tag
 * @property {Array.<TeamStatDetailDto>} teamStatDetail
 * @property {number} thirdLastJoinDate
 */
/**
 * @namespace MatchHistorySummaryDto
 * @property {number} assists
 * @property {number} date
 * @property {number} deaths
 * @property {number} gameId
 * @property {string} gameMode
 * @property {boolean} invalid
 * @property {number} kills
 * @property {number} mapId
 * @property {number} opposingTeamKills
 * @property {string} opposingTeamName}
 * @property {boolean} win
 */
/**
 * @namespace RosterDto
 * @property {Array.<TeamMemberInfoDto>} memberList
 * @property {number} ownerId
 */
/**
 * @namespace TeamStatDetailDto
 * @property {number} averageGamesPlayed
 * @property {number} losses
 * @property {string} teamStatType
 * @property {number} wins
 */
/**
 * @namespace TeamMemberInfoDto
 * @property {number} inviteDate
 * @property {number} joinDate
 * @property {number} playerId
 * @property {string} status
 */
