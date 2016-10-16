'use strict';

const clone = require('clone');
const hashObject = require('object-hash');
const objectMerge = require('object-merge');

const Client = require('node-rest-client').Client;

const Cache = require('./cache.js');
const MemoryCache = require('./cache/memory.js');
const RedisCache = require('./cache/redis.js');

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

const client = new Client();

const defaults = {
  region: Region.EUW,
  cache: {
    ttl: 600,
    type: 'memory'
  }
};

// @todo: Validate Summoner Names
/**
 * @class
 */
class RiotApi {
  /**
   * @param {string} apiKey - API Key provided by RiotGames
   * @param {Object} [options]
   * @param {Region} [options.region] - Default region to fall back to if none provided
   * @param {Object} [options.cache]
   * @param {number} [options.cache.ttl=600] - Cache TTL in seconds
   * @param {string|Cache} [options.cache.type=memory] - Cache type (memory, redis or custom)
   * @param {string} [options.cache.redis] - Redis URI
   */
  constructor(apiKey, options) {
    this.apiKey = apiKey;
    this.options = objectMerge(clone(defaults), options);

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
   * @returns {ChampionService}
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
   * @returns {MatchlistService}
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
   * @returns {Cache}
   */
  get cache() {
    if (!this._cache) {
      let cache = this.options.cache.type;
      if (!(cache instanceof Cache)) {
        switch (cache) {
          case 'redis':
            cache = RedisCache;
            break;
          case 'memory':
          default:
            cache = MemoryCache;
            break;
        }
      }
      this._cache = new cache(this, this.options.cache);
    }
    return this._cache;
  }

  /**
   * @param {Region} region - Set default region to fall back to if none provided
   * @returns {RiotApi}
   */
  setRegion(region) {
    this.options.region = region;
    return this;
  }

  /**
   * @param {Error} error
   */
  handleError(error) {
    // @todo: Some general error logging
    console.log(error);
  }

  /**
   * @callback requestCallback
   * @param {?Error} error
   * @param {*} [data]
   *
   * @todo Correct type definition for service callbacks
   */
  /**
   * @param {string} path
   * @param {?Object} [options]
   * @param {Object} [options.params] - path parameters
   * @param {Object} [options.query] - query parameters
   * @param {Region} [options.region] - Region to request data from
   * @param {Object} [options.host] - host url (needed for {@link LolStatusService})
   * @param {boolean} [options.ratelimit=true]
   * @param {requestCallback} [callback]
   *
   * @return {Promise.<*>}
   */
  request(path, options, callback) {
    const self = this;

    return new Promise(function(resolve, reject) {
      options = options || {};
      options.params = options.params || {};
      options.query = options.query || {};
      // eslint-disable-next-line camelcase
      options.query.api_key = self.apiKey; // api_key is defined in snake_case by the REST API
      options.region = options.region || self.options.region;

      if (!options.region) {
        // @todo: Proper error naming
        const error = new Error('No region defined');
        return reject(error) || callback && callback(error);
      }
      // @fixme: matchlist doesn't work with uppercase region
      options.params.region = options.region.region.toLowerCase();
      options.params.plattformId = options.region.plattformId;

      options.host = options.host || options.region.host;

      const hash = hashObject({
        path: path,
        options: options
      });

      self.cache.get(hash)
        .then(function(data) {
          data.fromCache = true; // @todo: Remove
          return resolve(data) || callback && callback(null, data);
        })
        .catch(function(error) {
          if (error) {
            self.handleError(error);
          }

          const url = options.host + path;
          if (options.ratelimit) {
            // @todo: respect ratelimit
          }
          const request = client.get(
            url,
            {
              path: options.params,
              parameters: options.query
            },
            function(data, response) {
              // @todo: handle header data
              if (data.status) {
                // @todo: Proper error naming
                /*
                 * data: {status: {message: string, status_code: number}}
                 */
                const error = new Error(data.status.message + ' (Error ' + data.status.status_code + ')');
                return reject(error) || callback && callback(error);
              }
              self.cache.set(hash, data)
                .then(function(success) {
                  return resolve(data) || callback && callback(null, data);
                })
                .catch(function(error) {
                  if (error) {
                    self.handleError(error);
                  }
                }
              );
            }
          );

          request.on('requestTimeout', function (req) {
            // @todo: Retry?
            req.abort();
            // @todo: Proper error naming
            const error = new Error('Request timed out');
            return reject(error) || callback && callback(error);
          });
        }
      );
    }).catch(function(error) {
      self.handleError(error);
    });
  }
}

RiotApi.Cache = Cache;

RiotApi.ChampData = ChampData;
RiotApi.GameMode = GameMode;
RiotApi.GameType = GameType;
RiotApi.ItemData = ItemData;
RiotApi.Lane = Lane;
RiotApi.LeagueTier = LeagueTier;
RiotApi.Map = Map; // @todo: Check what to do with this
RiotApi.MasteryTree = MasteryTree;
RiotApi.MasteryData = MasteryData;
RiotApi.PlayerPosition = PlayerPosition;
RiotApi.PlayerRole = PlayerRole;
RiotApi.PlayerStatSummaryType = PlayerStatSummaryType;
RiotApi.Playstyle = Playstyle;
RiotApi.QueueType = QueueType;
RiotApi.Region = Region;
RiotApi.Role = Role;
RiotApi.RuneData = RuneData;
RiotApi.Season = Season;
RiotApi.ShardEnum = ShardEnum;
RiotApi.SpellData = SpellData;
RiotApi.SubType = SubType;
RiotApi.Team = Team;

exports = module.exports = RiotApi;
