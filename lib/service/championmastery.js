'use strict';

const Service = require('../service.js');

/**
 * @class
 * @extends Service
 */
class ChampionmasteryService extends Service {
  constructor(api) {
    super(api);
  }

  /**
   * @callback ChampionmasteryService~getByChampionId
   * @param {?Error} error
   * @param {ChampionMasteryDTO} [data]
   */
  /**
   * @todo example
   * @param {number} playerId
   * @param {number} championId
   * @param {ChampionmasteryService~getByChampionId} [callback]
   *
   * @return {Promise.<ChampionMasteryDTO>}
   */
  getByChampionId(playerId, championId, callback) {
    return this.request(
      '/championmastery/location/${platformId}/player/${playerId}/champion/${championId}',
      {
        params: {
          playerId: playerId,
          championId: championId
        }
      }
    ).execute(callback);
  }

  /**
   * @callback ChampionmasteryService~getChampions
   * @param {?Error} error
   * @param {Array.<ChampionMasteryDTO>} [data]
   */
  /**
   * @todo example
   * @param {number} playerId
   * @param {ChampionmasteryService~getChampions} [callback]
   *
   * @return {Promise.<Array.<ChampionMasteryDTO>>}
   */
  getChampions(playerId, callback) {
    return this.request(
      '/championmastery/location/${platformId}/player/${playerId}/champions',
      {
        params: {
          playerId: playerId
        }
      }
    ).execute(callback);
  }

  /**
   * @callback ChampionmasteryService~getScore
   * @param {?Error} error
   * @param {number} [data]
   */
  /**
   * @todo example
   * @param {number} playerId
   * @param {ChampionmasteryService~getScore} [callback]
   *
   * @return {Promise.<number>}
   */
  getScore(playerId, callback) {
    return this.request(
      '/championmastery/location/${platformId}/player/${playerId}/score',
      {
        params: {
          playerId: playerId
        }
      }
    ).execute(callback);
  }

  /**
   * @callback ChampionmasteryService~getTopChampions
   * @param {?Error} error
   * @param {Array.<ChampionMasteryDTO>} [data]
   */
  /**
   * @todo example
   * @param {number} playerId
   * @param {Object} [query]
   * @param {number} [query.count] - Number of entries to retrieve - defaults to 3
   * @param {ChampionmasteryService~getTopChampions} [callback]
   *
   * @return {Promise.<Array.<ChampionMasteryDTO>>}
   */
  getTopChampions(playerId, query, callback) {
    return this.request(
      '/championmastery/location/${platformId}/player/${playerId}/topchampions',
      {
        params: {
          playerId: playerId
        },
        query: query
      }
    ).execute(callback);
  }
}

exports = module.exports = ChampionmasteryService;

