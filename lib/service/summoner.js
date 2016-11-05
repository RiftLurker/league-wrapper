'use strict';

const MasteryPagesDto = require('../dto/summoner/mastery-pages-dto.js');
const RunePagesDto = require('../dto/summoner/rune-pages-dto.js');
const SummonerDto = require('../dto/summoner/summoner-dto.js');

const Service = require('../service.js');

/**
 * @class
 * @alias module:LeagueWrapper/service~SummonerService
 * @extends Service
 */
class SummonerService extends Service {
  constructor(api) {
    super(api);
  }

  /**
   * @callback module:LeagueWrapper/service~SummonerService~getByNames
   * @param {?Error} error
   * @param {Object.<module:LeagueWrapper/dto/summoner~SummonerDto>} [data]
   */
  /**
   * @todo example
   * @param {string[]|string} summonerNames
   * @param {?module:LeagueWrapper/options~RequestOptions} [options]
   * @param {module:LeagueWrapper/service~SummonerService~getByNames} [callback]
   *
   * @return {Promise.<Object.<module:LeagueWrapper/dto/summoner~SummonerDto>>}
   */
  getByNames(summonerNames, options, callback) {
    if (typeof summonerNames === 'string') {
      summonerNames = [summonerNames];
    }
    if (summonerNames.length > 40) {
      return super._fail(new Error('Maximum allowed summoner names at once is 40'), callback);
    }

    options = Object.assign({
      path: '/api/lol/${region}/v1.4/summoner/by-name/${summonerNames}',
      params: {
        summonerNames: summonerNames.join(',')
      },
      returnType: [String, SummonerDto]
    }, options);

    return super.request(options).execute(callback);
  }

  /**
   * @callback module:LeagueWrapper/service~SummonerService~getByIds
   * @param {?Error} error
   * @param {Object.<module:LeagueWrapper/dto/summoner~SummonerDto>} [data]
   */
  /**
   * @todo example
   * @param {number[]} summonerIds
   * @param {?module:LeagueWrapper/options~RequestOptions} [options]
   * @param {module:LeagueWrapper/service~SummonerService~getByIds} [callback]
   *
   * @return {Promise.<Object.<module:LeagueWrapper/dto/summoner~SummonerDto>>}
   */
  getByIds(summonerIds, options, callback) {
    if (typeof summonerIds === 'string') {
      summonerIds = [summonerIds];
    }

    options = Object.assign({
      path: '/api/lol/${region}/v1.4/summoner/${summonerIds}',
      params: {
        summonerIds: summonerIds.join(',')
      },
      returnType: [String, SummonerDto]
    }, options);

    return super.request(options).execute(callback);
  }

  /**
   * @callback module:LeagueWrapper/service~SummonerService~getMasteries
   * @param {?Error} error
   * @param {Object.<module:LeagueWrapper/dto/summoner~MasteryPagesDto>} [data]
   */
  /**
   * @todo example
   * @param {number[]} summonerIds
   * @param {?module:LeagueWrapper/options~RequestOptions} [options]
   * @param {module:LeagueWrapper/service~SummonerService~getMasteries} [callback]
   *
   * @return {Promise.<Object.<module:LeagueWrapper/dto/summoner~MasteryPagesDto>>}
   */
  getMasteries(summonerIds, options, callback) {
    if (typeof summonerIds === 'string') {
      summonerIds = [summonerIds];
    }

    options = Object.assign({
      path: '/api/lol/${region}/v1.4/summoner/${summonerIds}/masteries',
      params: {
        summonerIds: summonerIds.join(',')
      },
      returnType: [String, MasteryPagesDto]
    }, options);

    return super.request(options).execute(callback);
  }

  /**
   * @callback module:LeagueWrapper/service~SummonerService~getNames
   * @param {?Error} error
   * @param {Object.<string>} [data]
   */
  /**
   * @todo example
   * @param {number[]} summonerIds
   * @param {?module:LeagueWrapper/options~RequestOptions} [options]
   * @param {module:LeagueWrapper/service~SummonerService~getNames} [callback]
   *
   * @return {Promise.<Object.<string>>}
   */
  getNames(summonerIds, options, callback) {
    if (typeof summonerIds === 'string') {
      summonerIds = [summonerIds];
    }

    options = Object.assign({
      path: '/api/lol/${region}/v1.4/summoner/${summonerIds}/name',
      params: {
        summonerIds: summonerIds.join(',')
      },
      returnType: [String, String]
    }, options);

    return super.request(options).execute(callback);
  }

  /**
   * @callback module:LeagueWrapper/service~SummonerService~getRunes
   * @param {?Error} error
   * @param {Object.<module:LeagueWrapper/dto/summoner~RunePagesDto>} [data]
   */
  /**
   * @todo example
   * @param {number[]} summonerIds
   * @param {?module:LeagueWrapper/options~RequestOptions} [options]
   * @param {module:LeagueWrapper/service~SummonerService~getRunes} [callback]
   *
   * @return {Promise.<Object<module:LeagueWrapper/dto/summoner~RunePagesDto>>}
   */
  getRunes(summonerIds, options, callback) {
    if (typeof summonerIds === 'string') {
      summonerIds = [summonerIds];
    }

    options = Object.assign({
      path: '/api/lol/${region}/v1.4/summoner/${summonerIds}/runes',
      params: {
        summonerIds: summonerIds.join(',')
      },
      returnType: [String, RunePagesDto]
    }, options);

    return super.request(options).execute(callback);
  }
}

exports = module.exports = SummonerService;
