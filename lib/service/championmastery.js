'use strict';

const ChampionmasteryDto = require('../dto/championmastery.js');

const Service = require('../service.js');

/**
 * @class
 * @alias module:LeagueWrapper/service~ChampionmasteryService
 * @extends Service
 */
class ChampionmasteryService extends Service {
  constructor(api) {
    super(api);
  }

  /**
   * @callback module:LeagueWrapper/service~ChampionmasteryService~getByChampionId
   * @param {?Error} error
   * @param {module:LeagueWrapper/dto/championmastery~ChampionMasteryDto} [data]
   */
  /**
   * @todo example
   * @param {number} playerId
   * @param {number} championId
   * @param {?module:LeagueWrapper/options~RequestOptions} [options]
   * @param {module:LeagueWrapper/service~ChampionmasteryService~getByChampionId} [callback]
   *
   * @return {Promise.<module:LeagueWrapper/dto/championmastery~ChampionMasteryDto>}
   */
  getByChampionId(playerId, championId, options, callback) {
    options = Object.assign({
      path: '/championmastery/location/${platformId}/player/${playerId}/champion/${championId}',
      params: {
        playerId: playerId,
        championId: championId
      },
      returnType: ChampionmasteryDto.ChampionMasteryDto
    }, options);

    return super.request(options).execute(callback);
  }

  /**
   * @callback module:LeagueWrapper/service~ChampionmasteryService~getChampions
   * @param {?Error} error
   * @param {Array.<module:LeagueWrapper/dto/championmastery~ChampionMasteryDto>} [data]
   */
  /**
   * @todo example
   * @param {number} playerId
   * @param {?module:LeagueWrapper/options~RequestOptions} [options]
   * @param {module:LeagueWrapper/service~ChampionmasteryService~getChampions} [callback]
   *
   * @return {Promise.<Array.<module:LeagueWrapper/dto/championmastery~ChampionMasteryDto>>}
   */
  getChampions(playerId, options, callback) {
    options = Object.assign({
      path: '/championmastery/location/${platformId}/player/${playerId}/champions',
      params: {
        playerId: playerId
      },
      returnType: ChampionmasteryDto.ChampionMasteryDto
    }, options);

    return super.request(options).execute(callback);
  }

  /**
   * @callback module:LeagueWrapper/service~ChampionmasteryService~getScore
   * @param {?Error} error
   * @param {number} [data]
   */
  /**
   * @todo example
   * @param {number} playerId
   * @param {?module:LeagueWrapper/options~RequestOptions} [options]
   * @param {module:LeagueWrapper/service~ChampionmasteryService~getScore} [callback]
   *
   * @return {Promise.<number>}
   */
  getScore(playerId, options, callback) {
    options = Object.assign({
      path: '/championmastery/location/${platformId}/player/${playerId}/score',
      params: {
        playerId: playerId
      },
      returnType: Number
    }, options);

    return super.request(options).execute(callback);
  }

  /**
   * @callback module:LeagueWrapper/service~ChampionmasteryService~getTopChampions
   * @param {?Error} error
   * @param {Array.<module:LeagueWrapper/dto/championmastery~ChampionMasteryDto>} [data]
   */
  /**
   * @todo example
   * @param {number} playerId
   * @param {Object} [query]
   * @param {number} [query.count] - Number of entries to retrieve - defaults to 3
   * @param {?module:LeagueWrapper/options~RequestOptions} [options]
   * @param {module:LeagueWrapper/service~ChampionmasteryService~getTopChampions} [callback]
   *
   * @return {Promise.<Array.<module:LeagueWrapper/dto/championmastery~ChampionMasteryDto>>}
   */
  getTopChampions(playerId, query, options, callback) {
    options = Object.assign({
      path: '/championmastery/location/${platformId}/player/${playerId}/topchampions',
      params: {
        playerId: playerId
      },
      query: query,
      returnType: [ChampionmasteryDto.ChampionMasteryDto]
    }, options);

    return super.request(options).execute(callback);
  }
}

exports = module.exports = ChampionmasteryService;

