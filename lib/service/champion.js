'use strict';

const Service = require('../service.js');

/**
 * @class
 * @extends Service
 */
class ChampionService extends Service {
  constructor(api) {
    super(api, 'v1.2');
  }

  /**
   * @callback ChampionService~getAll
   * @param {?Error} error
   * @param {ChampionListDto} [data]
   */
  /**
   * @example
   * api.champion.getAll({
   *   freeToPlay: true
   * }).then(function(champions) {
   *   console.log(champions);
   * });
   *
   * @param {?Object} [query]
   * @param {boolean} [query.freeToPlay]
   * @param {ChampionService~getAll} [callback]
   *
   * @return {Promise.<ChampionListDto>}
   */
  getAll(query, callback) {
    return this.request(
      '/api/lol/${region}/v1.2/champion',
      {
        query: query
      }
    ).execute(callback);
  }

  /**
   * @callback ChampionService~getById
   * @param {?Error} error
   * @param {ChampionDto} [data]
   */
  /**
   * @example
   * api.champion.getById(1).then(function(champion) {
   *   console.log(champion);
   * });
   *
   * @param {number} id
   * @param {ChampionService~getById} [callback]
   *
   * @return {Promise.<ChampionDto>}
   */
  getById(id, callback) {
    return this.request(
      '/api/lol/${region}/v1.2/champion/${id}',
      {
        params: {
          id: id
        }
      }
    ).execute(callback);
  }
}

exports = module.exports = ChampionService;

