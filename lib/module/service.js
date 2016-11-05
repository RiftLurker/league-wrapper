'use strict';

const ChampionService = require('../service/champion.js');
const ChampionmasteryService = require('../service/championmastery.js');
const CurrentGameService = require('../service/current-game.js');
const FeaturedGamesService = require('../service/featured-games.js');
const GameService = require('../service/game.js');
const LeagueService = require('../service/league.js');
const LolStaticDataService = require('../service/lol-static-data.js');
const LolStatusService = require('../service/lol-status.js');
const MatchService = require('../service/match.js');
const MatchlistService = require('../service/matchlist.js');
const StatsService = require('../service/stats.js');
const SummonerService = require('../service/summoner.js');
const TeamService = require('../service/team.js');

/**
 * @module module:LeagueWrapper/service
 */

exports = module.exports = {
  ChampionService,
  ChampionmasteryService,
  CurrentGameService,
  FeaturedGamesService,
  GameService,
  LeagueService,
  LolStaticDataService,
  LolStatusService,
  MatchService,
  MatchlistService,
  StatsService,
  SummonerService,
  TeamService
};
