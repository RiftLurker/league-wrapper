'use strict';

const ChampionDto = require('../dto/champion/champion-dto.js');
const ChampionListDto = require('../dto/champion/champion-list-dto.js');

const Service = require('../service.js');

/**
 * @class
 * @alias module:LeagueWrapper/service~ChampionService
 * @extends Service
 */
class ChampionService extends Service {
  /**
   * @param {module:LeagueWrapper~LeagueWrapper} api
   * @protected
   */
  constructor(api) {
    super(api);
  }

  /**
   * @callback module:LeagueWrapper/service~ChampionService~getAll
   * @param {?Error} error
   * @param {module:LeagueWrapper/dto/champion~ChampionListDto} [data]
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
   * @param {?module:LeagueWrapper/options~RequestOptions} [options]
   * @param {module:LeagueWrapper/service~ChampionService~getAll} [callback]
   *
   * @return {Promise.<module:LeagueWrapper/dto/champion~ChampionListDto>}
   */
  getAll(query, options, callback) {
    options = Object.assign({
      path: '/api/lol/${region}/v1.2/champion',
      query: query,
      returnType: ChampionListDto
    }, options);

    return super.request(options).execute(callback);
  }

  /**
   * @callback module:LeagueWrapper/service~ChampionService~getById
   * @param {?Error} error
   * @param {module:LeagueWrapper/dto/champion~ChampionDto} [data]
   */
  /**
   * @example
   * api.champion.getById(1).then(function(champion) {
   *   console.log(champion);
   * });
   *
   * @param {number} id
   * @param {?module:LeagueWrapper/options~RequestOptions} [options]
   * @param {module:LeagueWrapper/service~ChampionService~getById} [callback]
   *
   * @return {Promise.<module:LeagueWrapper/dto/champion~ChampionDto>}
   */
  getById(id, options, callback) {
    options = Object.assign({
      path: '/api/lol/${region}/v1.2/champion/${id}',
      params: {
        id: id
      },
      returnType: ChampionDto
    }, options);

    return super.request(options).execute(callback);
  }
}

exports = module.exports = ChampionService;

