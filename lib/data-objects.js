'use strict';

/**
 * @typedef {Object} ChampionService~ChampionListDto
 * @property {Array.<ChampionService~ChampionDto>} champions;
 */
/**
 * @typedef {Object} ChampionService~ChampionDto
 * @property {boolean} active;
 * @property {boolean} botEnabled;
 * @property {boolean} botMmEnabled;
 * @property {boolean} freeToPlay;
 * @property {number} id;
 * @property {boolean} rankedPlayEnabled;
 */
/**
 * @typedef {Object} ChampionmasteryService~ChampionMasteryDTO
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
 * @typedef {Object} CurrentGameService~CurrentGameInfo
 * @property {Array.<CurrentGameService~BannedChampion>} bannedChampions
 * @property {number} gameId
 * @property {number} gameLength
 * @property {GameMode} gameMode
 * @property {number} gameQueueConfigId
 * @property {number} gameStartTime
 * @property {GameType} gameType
 * @property {number} mapId
 * @property {CurrentGameService~Observer} observers
 * @property {Array.<CurrentGameService~CurrentGameParticipant>} participants
 * @property {string} plattformId
 */
/**
 * @typedef {Object} CurrentGameService~BannedChampion
 * @property {number} championId
 * @property {number} pickTurn
 * @property {number} teamId
 */
/**
 * @typedef {Object} CurrentGameService~CurrentGameParticipant
 * @property {boolean} bot
 * @property {number} championId
 * @property {Array.<CurrentGameService~Mastery>} masteries
 * @property {number} profileIconId
 * @property {Array.<CurrentGameService~Rune>} runes
 * @property {number} spell1Id
 * @property {number} spell2Id
 * @property {number} summonerId
 * @property {string} summonersName
 * @property {number} teamId
 */
/**
 * @typedef {Object} CurrentGameService~Observer
 * @property {string} encryptionKey
 */
/**
 * @typedef {Object} CurrentGameService~Mastery
 * @property {number} masteryId
 * @property {number} rank
 */
/**
 * @typedef {Object} CurrentGameService~Rune
 * @property {number} count
 * @property {number} runeId
 */
/**
 * @typedef {Object} FeaturedGamesService~FeaturedGames
 * @property {number} clientRefreshInterval
 * @property {Array.<FeaturedGamesService~FeaturedGameInfo>} gameList
 */
/**
 * @typedef {Object} FeaturedGamesService~FeaturedGameInfo
 * @property {Array.<CurrentGameService~BannedChampion>} bannedChampions
 * @property {number} gameId
 * @property {number} gameLength
 * @property {GameMode} gameMode
 * @property {number} gameQueueConfigId
 * @property {number} gameStartTime
 * @property {GameType} gameType
 * @property {number} mapId
 * @property {CurrentGameService~Observer} observers
 * @property {Array.<FeaturedGamesService~Participant>} participants
 * @property {string} plattformId
 */
/**
 * @typedef {Object} FeaturedGamesService~Participant
 * @property {boolean} bot
 * @property {number} championId
 * @property {number} profileIconId
 * @property {number} spell1Id
 * @property {number} spell2Id
 * @property {string} summonerName
 * @property {number} teamId
 */
/**
 * @typedef {Object} GameService~RecentGamesDto
 * @property {Array.<GameService~GameDto>} games
 * @property {number} summonerId
 */
/**
 * @typedef {Object} GameService~GameDto
 * @property {number} championId
 * @property {number} createDate
 * @property {Array.<GameService~PlayerDto>} fellowPlayers
 * @property {number} gameId
 * @property {GameMode} gameMode
 * @property {GameType} gameType
 * @property {boolean} invalid
 * @property {number} ipEarned
 * @property {number} level
 * @property {number} mapId
 * @property {number} spell1
 * @property {number} spell2
 * @property {GameService~RawStatsDto} stats
 * @property {SubType} subType
 * @property {number} teamId // @todo specify properties: enum
 */
/**
 * @typedef {Object} GameService~PlayerDto
 * @property {number} championId
 * @property {number} summonerId
 * @property {number} teamId
 */
/**
 * @typedef {Object} GameService~RawStatsDto
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
 * @typedef {Object} LeagueService~LeagueDto
 * @property {Array.<LeagueService~LeagueEntryDto>} entries
 * @property {string} name
 * @property {string} participantId
 * @property {string} queue // @todo specify properties: enum
 * @property {LeagueTier} tier
 */
/**
 * @typedef {Object} LeagueService~LeagueEntryDto
 * @property {string} division
 * @property {boolean} isFreshBlood
 * @property {boolean} isHotStreak
 * @property {boolean} isInactive
 * @property {boolean} isVeteran
 * @property {number} leaguePoints
 * @property {number} losses
 * @property {LeagueService~MiniSeriesDto} miniSeries
 * @property {string} playerOrTeamId
 * @property {string} playerOrTeamName
 * @property {Playstyle} playStyle
 * @property {number} wins
 */
/**
 * @typedef {Object} LeagueService~MiniSeriesDto
 * @property {number} losses
 * @property {string} progress
 * @property {number} target
 * @property {number} wins
 */
/**
 * @typedef {Object} LolStaticDataService~ChampionListDto // @todo specify properties: Rename
 * @property {Object.<LolStaticDataService~ChampionDto>} data
 * @property {string} format
 * @property {Object.<string>} keys
 * @property {string} type
 * @property {string} version
 */
/**
 * @typedef {Object} LolStaticDataService~ChampionDto // @todo specify properties: Rename
 * @property {Array.<string>} allytips
 * @property {string] blurb
 * @property {Array.<string>} enemytips
 * @property {number} id
 * @property {LolStaticDataService~ImageDto} image
 * @property {LolStaticDataService~InfoDto} info
 * @property {string} key
 * @property {string} lore
 * @property {string} name
 * @property {string} partype
 * @property {LolStaticDataService~PassiveDto} passive
 * @property {Array.<LolStaticDataService~RecommendedDto>} recommended
 * @property {Array.<LolStaticDataService~SkinDto>} skins
 * @property {Array.<LolStaticDataService~ChampionSpellDto>} spells
 * @property {LolStaticDataService~StatsDto} stats
 * @property {Array.<string>} tags
 * @property {string} title
 */
/**
 * @typedef {Object} LolStaticDataService~ChampionSpellDto
 * @property {Array.<LolStaticDataService~ImageDto>} altimages
 * @property {Array.<number>} cooldown
 * @property {string} cooldownBurn
 * @property {Array.<number>} cost
 * @property {string} costBurn
 * @property {string} costType
 * @property {string} description
 * @property {Array.<Array.<number>> effect // @todo specify properties: check "This field is a List of List of Double"
 * @property {Array.<string>} effectBurn
 * @property {LolStaticDataService~ImageDto} image
 * @property {string} key
 * @property {LolStaticDataService~LevelTipDto} leveltip
 * @property {number} maxrank
 * @property {string} name
 * @property {Object} range // @todo specify properties: This field is either a List of Integer or the String "self" for spells that target one's own champion
 * @property {string} rangeBurn
 * @property {string} resource
 * @property {string} sanitizedDescription
 * @property {string} sanitizedTooltip
 * @property {string} tooltip
 * @property {Array.<LolStaticDataService~SpellVarsDto>} vars
 */
/**
 * @typedef {Object} LolStaticDataService~ImageDto
 * @property {string} full
 * @property {string} group
 * @property {number} h
 * @property {string} sprite
 * @property {number} w
 * @property {number} x
 * @property {number} y
 */
/**
 * @typedef {Object} LolStaticDataService~InfoDto
 * @property {number} attack
 * @property {number} defense
 * @property {number} difficulty
 * @property {number} magic
 */
/**
 * @typedef {Object} LolStaticDataService~PassiveDto
 * @property {string} description
 * @property {LolStaticDataService~ImageDto} image
 * @property {string} name
 * @property {string} sanitizedDescription
 */
/**
 * @typedef {Object} LolStaticDataService~RecommendedDto
 * @property {Array.<LolStaticDataService~BlockDto>} blocks
 * @property {string} champion
 * @property {string} map
 * @property {string} mode
 * @property {boolean} priority
 * @property {string} title
 * @property {string} type
 */
/**
 * @typedef {Object} LolStaticDataService~SkinDto
 * @property {number} id
 * @property {string} name
 * @property {number} num
 */
/**
 * @typedef {Object} LolStaticDataService~StatsDto
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
 * @typedef {Object} LolStaticDataService~LevelTipDto
 * @property {Array.<string>} effect
 * @property {Array.<string>} label
 */
/**
 * @typedef {Object} LolStaticDataService~SpellVarsDto
 * @property {Array.<number>} coeff
 * @property {string} dyn
 * @property {string} key
 * @property {string} link
 * @property {string} ranksWith
 */
/**
 * @typedef {Object} LolStaticDataService~BlockDto
 * @property {Array.<LolStaticDataService~BlockItemDto>} items
 * @property {boolean} recMath
 * @property {string} type
 */
/**
 * @typedef {Object} LolStaticDataService~BlockItemDto
 * @property {number} count
 * @property {number} id
 */
/**
 * @typedef {Object} LolStaticDataService~ItemListDto
 * @todo specify properties
 */
/**
 * @typedef {Object} LolStaticDataService~BasicDataDto
 * @todo specify properties
 */
/**
 * @typedef {Object} LolStaticDataService~GroupDto
 * @todo specify properties
 */
/**
 * @typedef {Object} LolStaticDataService~ItemDto
 * @todo specify properties
 */
/**
 * @typedef {Object} LolStaticDataService~ItemTreeDto
 * @todo specify properties
 */
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
 * @typedef {Object} LolStatusService~Shard
 * @property {string} hostname
 * @property {Array.<String>} locales
 * @property {string} name
 * @property {string} region_tag
 * @property {string} slug
 */
/**
 * @typedef {Object} LolStatusService~ShardStatus
 * @property {string} hostname
 * @property {Array.<String>} locales
 * @property {string} name
 * @property {string} region_tag
 * @property {Array.<LolStatusService~Service>} services
 * @property {string} slug
 */
/**
 * @typedef {Object} LolStatusService~Service
 * @property {Array.<LolStatusService~Incident>} incidents
 * @property {string} name
 * @property {string} slug
 * @property {string} status
 */
/**
 * @typedef {Object} LolStatusService~Incident
 * @property {boolean} active
 * @property {string} created_at
 * @property {number} id
 * @property {Array.<LolStatusService~Message>} updates
 */
/**
 * @typedef {Object} LolStatusService~Message
 * @property {string} author
 * @property {string} content
 * @property {string} created_at
 * @property {string} id
 * @property {string} severity
 * @property {Array.<LolStatusService~Translation>} translations
 * @property {string] updated_at
 */
/**
 * @typedef {Object} LolStatusService~Translation
 * @property {string} content
 * @property {string} locale
 * @property {string} updated_at
 */
/**
 * @typedef {Object} MatchService~MatchDetail
 * @property {number} mapId
 * @property {number} matchCreation
 * @property {number} matchDuration
 * @property {GameMode} matchMode
 * @property {GameType} matchType
 * @property {string} matchVersion
 * @property {Array.<MatchService~ParticipantIdentity>} participantIdentities
 * @property {Array.<MatchService~MatchParticipant>} participants
 * @property {string} plattformId
 * @property {string} queueType // @todo specify properties: enum
 * @property {string} region // @todo specify properties: region?
 * @property {Season} season
 * @property {Array.<MatchService~Team>} teams
 * @property {MatchService~Timeline} timeline
 */
/**
 * @typedef {Object} MatchService~MatchParticipant
 * @property {number} championId,
 * @property {LeagueTier} highestAchievedSeasonTier
 * @property {Array.<CurrentGameService~Mastery>} masteries
 * @property {number} participantId
 * @property {Array.<CurrentGameService~Rune>} runes
 * @property {number} spell1Id
 * @property {number} spell2Id
 * @property {MatchService~ParticipantStats} stats
 * @property {number} teamId
 * @property {MatchService~ParticipantTimeline} timeline
 */
/**
 * @typedef {Object} MatchService~ParticipantIdentity
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
/**
 * @typedef {Object} SummonerService~SummonerDto
 * @todo specify properties
 */
/**
 * @typedef {Object} SummonerService~MasteryPagesDto
 * @todo specify properties
 */
/**
 * @typedef {Object} SummonerService~MasteryPageDto
 * @todo specify properties
 */
/**
 * @typedef {Object} SummonerService~MasteryDto
 * @property {Array.<string>} description
 * @property {number} id
 * @property {LolStaticDataService~ImageDto} image
 * @property {MasteryTree} masteryTree
 * @property {string} name
 * @property {name} prereq
 * @property {number} ranks
 * @property {Array.<string>} sanitizedDescription
 */
/**
 * @typedef {Object} SummonerService~RunePagesDto
 * @todo specify properties
 */
/**
 * @typedef {Object} SummonerService~RunePageDto
 * @todo specify properties
 */
/**
 * @typedef {Object} SummonerService~RuneSlotDto
 * @todo specify properties
 */
/**
 * @typedef {Object} TeamService~TeamDto
 * @property {number} createDate
 * @property {string} fullId
 * @property {number} lastGameDate
 * @property {number} lastJoinDate
 * @property {number} lastJoinedRankedTeamQueueDate
 * @property {Array.<TeamService~MatchHistorySummaryDto>} matchHistory
 * @property {number} modifyDate
 * @property {string} name
 * @property {TeamService~RosterDto} roster
 * @property {number} secondLastJoinDate
 * @property {string} status
 * @property {string} tag
 * @property {Array.<TeamService~TeamStatDetailDto>} teamStatDetail
 * @property {number} thirdLastJoinDate
 */
/**
 * @typedef {Object} TeamService~MatchHistorySummaryDto
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
 * @typedef {Object} TeamService~RosterDto
 * @property {Array.<TeamService~TeamMemberInfoDto>} memberList
 * @property {number} ownerId
 */
/**
 * @typedef {Object} TeamService~TeamStatDetailDto
 * @property {number} averageGamesPlayed
 * @property {number} losses
 * @property {string} teamStatType
 * @property {number} wins
 */
/**
 * @typedef {Object} TeamService~TeamMemberInfoDto
 * @property {number} inviteDate
 * @property {number} joinDate
 * @property {number} playerId
 * @property {string} status
 */
