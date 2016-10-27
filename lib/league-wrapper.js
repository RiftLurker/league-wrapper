'use strict';

const ChampData = require('./constant/champ-data.js');
const GameMode = require('./constant/game-mode.js');
const GameType = require('./constant/game-type.js');
const ItemData = require('./constant/item-data.js');
const Lane = require('./constant/lane.js');
const LeagueTier = require('./constant/league-tier.js');
const Map = require('./constant/map.js');
const MasteryData = require('./constant/mastery-data.js');
const MasteryTree = require('./constant/mastery-tree.js');
const PlayerPosition = require('./constant/player-position.js');
const PlayerRole = require('./constant/player-role.js');
const PlayerStatSummaryType = require('./constant/player-stat-summary-type.js');
const Playstyle = require('./constant/playstyle.js');
const QueueType = require('./constant/queue-type.js');
const Region = require('./constant/region.js');
const Role = require('./constant/role.js');
const RuneData = require('./constant/rune-data.js');
const Season = require('./constant/season.js');
const ShardEnum = require('./constant/shard-enum.js');
const SpellData = require('./constant/spell-data.js');
const SubType = require('./constant/sub-type.js');
const Team = require('./constant/team.js');

const ChampionService = require('./service/champion.js');
const ChampionmasteryService = require('./service/championmastery.js');
const CurrentGameService = require('./service/current-game.js');
const FeaturedGamesService = require('./service/featured-games');
const GameService = require('./service/game.js');
const LeagueService = require('./service/league.js');
const LolStaticDataService = require('./service/lol-static-data.js');
const LolStatusService = require('./service/lol-status.js');
const MatchService = require('./service/match.js');
const MatchlistService = require('./service/matchlist.js');
const StatsService = require('./service/stats.js');
const SummonerService = require('./service/summoner.js');
const TeamService = require('./service/team.js');

const RateLimit = require('./rate-limit.js');

const defaults = {
  region: Region.EUW,
  rateLimits: [
    new RateLimit(10, 10),
    new RateLimit(500, 10 * 60)
  ]
};

// @todo: Work on good cache implementation
// @todo: Validate Summoner Names
/**
 * @class
 */
class LeagueWrapper {
  /**
   * @param {string} apiKey - API Key provided by RiotGames
   * @param {Object} [options]
   * @param {Region} [options.region] - Default region to fall back to if none provided
   * @param {RateLimit|RateLimit[]} [options.rateLimits]
   * @todo: Document default rateLimits
   */
  constructor(apiKey, options) {
    this.apiKey = apiKey;
    this.options = Object.assign({}, defaults, options);

    this.services = {};
  }

  /**
   * @param {string} name
   * @param {function} serviceClass
   * @returns {*}
   * @private
   */
  _service(name, serviceClass) {
    if (!this.services[name]) {
      this.services[name] = new serviceClass(this);
    }
    return this.services[name];
  }

  /**
   * @returns {ChampionService}
   */
  get champion() {
    return this._service('champion', ChampionService);
  }

  /**
   * @returns {ChampionmasteryService}
   */
  get championmastery() {
    return this._service('championmastery', ChampionmasteryService);
  }

  /**
   * @returns {CurrentGameService}
   */
  get currentGame() {
    return this._service('currentGame', CurrentGameService);
  }

  /**
   * @returns {FeaturedGamesService}
   */
  get featuredGames() {
    return this._service('featuredGames', FeaturedGamesService);
  }

  /**
   * @returns {GameService}
   */
  get game() {
    return this._service('game', GameService);
  }

  /**
   * @returns {LeagueService}
   */
  get league() {
    return this._service('league', LeagueService);
  }

  /**
   * @returns {LolStaticDataService}
   */
  get lolStaticData() {
    return this._service('lolStaticData', LolStaticDataService);
  }

  /**
   * @returns {LolStatusService}
   */
  get lolStatus() {
    return this._service('lolStatus', LolStatusService);
  }

  /**
   * @returns {MatchService}
   */
  get match() {
    return this._service('match', MatchService);
  }

  /**
   * @returns {MatchlistService}
   */
  get matchlist() {
    return this._service('matchlist', MatchlistService);
  }

  /**
   * @returns {StatsService}
   */
  get stats() {
    return this._service('stats', StatsService);
  }

  /**
   * @returns {SummonerService}
   */
  get summoner() {
    return this._service('summoner', SummonerService);
  }

  /**
   * @returns {TeamService}
   */
  get team() {
    return this._service('team', TeamService);
  }

  /**
   * @param {Region} region - Set default region to fall back to if none provided
   * @returns {LeagueWrapper}
   */
  setRegion(region) {
    this.options.region = region;
    return this;
  }

  /**
   * @returns {Region}
   */
  getRegion() {
    return this.options.region;
  }

  /**
   * @returns {Array.<RateLimit>}
   */
  getRateLimits() {
    let rateLimits = this.options.rateLimits;
    if (!Array.isArray(rateLimits)) {
      rateLimits = [rateLimits];
    }
    return rateLimits;
  }
}

LeagueWrapper.ChampData = ChampData;
LeagueWrapper.GameMode = GameMode;
LeagueWrapper.GameType = GameType;
LeagueWrapper.ItemData = ItemData;
LeagueWrapper.Lane = Lane;
LeagueWrapper.LeagueTier = LeagueTier;
LeagueWrapper.Map = Map; // @todo: Check what to do with this
LeagueWrapper.MasteryTree = MasteryTree;
LeagueWrapper.MasteryData = MasteryData;
LeagueWrapper.PlayerPosition = PlayerPosition;
LeagueWrapper.PlayerRole = PlayerRole;
LeagueWrapper.PlayerStatSummaryType = PlayerStatSummaryType;
LeagueWrapper.Playstyle = Playstyle;
LeagueWrapper.QueueType = QueueType;
LeagueWrapper.Region = Region;
LeagueWrapper.Role = Role;
LeagueWrapper.RuneData = RuneData;
LeagueWrapper.Season = Season;
LeagueWrapper.ShardEnum = ShardEnum;
LeagueWrapper.SpellData = SpellData;
LeagueWrapper.SubType = SubType;
LeagueWrapper.Team = Team;

LeagueWrapper.RateLimit = RateLimit;

exports = module.exports = LeagueWrapper;
