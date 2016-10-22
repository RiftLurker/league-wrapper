'use strict';

const Service = require('../service.js');

/**
 * @extends Service
 */
class SummonerService extends Service {
  constructor(api) {
    super(api, 'v1.4');
  }

  /**
   * @callback SummonerService~getByNames
   * @param {?Error} error
   * @param {Object.<SummonerDto>} [data]
   */
  /**
   * @todo example
   * @param {string[]|string} summonerNames
   * @param {SummonerService~getByNames} [callback]
   *
   * @return {Promise.<Object.<SummonerDto>>}
   */
  getByNames(summonerNames, callback) {
    if (typeof summonerNames === 'string') {
      summonerNames = [summonerNames];
    }
    if (summonerNames.length > 40) {
      return this._fail(new Error('Maximum allowed summoner names at once is 40'), callback);
    }
    return this.request(
      '/api/lol/${region}/v1.4/summoner/by-name/${summonerNames}',
      {
        params: {
          summonerNames: summonerNames.join(',')
        }
      }
    ).execute(callback);
  }

  /**
   * @callback SummonerService~getByIds
   * @param {?Error} error
   * @param {Object.<SummonerDto>} [data]
   */
  /**
   * @todo example
   * @param {number[]} summonerIds
   * @param {SummonerService~getByIds} [callback]
   *
   * @return {Promise.<Object.<SummonerDto>>}
   */
  getByIds(summonerIds, callback) {
    if (typeof summonerIds === 'string') {
      summonerIds = [summonerIds];
    }
    return this.request(
      '/api/lol/${region}/v1.4/summoner/${summonerIds}',
      {
        params: {
          summonerIds: summonerIds.join(',')
        }
      }
    ).execute(callback);
  }

  /**
   * @callback SummonerService~getMasteries
   * @param {?Error} error
   * @param {Object.<MasteryPagesDto>} [data]
   */
  /**
   * @todo example
   * @param {number[]} summonerIds
   * @param {SummonerService~getMasteries} [callback]
   *
   * @return {Promise.<Object.<MasteryPagesDto>>}
   */
  getMasteries(summonerIds, callback) {
    if (typeof summonerIds === 'string') {
      summonerIds = [summonerIds];
    }
    return this.request(
      '/api/lol/${region}/v1.4/summoner/${summonerIds}/masteries',
      {
        params: {
          summonerIds: summonerIds.join(',')
        }
      }
    ).execute(callback);
  }

  /**
   * @callback SummonerService~getNames
   * @param {?Error} error
   * @param {Object.<string>} [data]
   */
  /**
   * @todo example
   * @param {number[]} summonerIds
   * @param {SummonerService~getNames} [callback]
   *
   * @return {Promise.<Object.<string>>}
   */
  getNames(summonerIds, callback) {
    if (typeof summonerIds === 'string') {
      summonerIds = [summonerIds];
    }
    return this.request(
      '/api/lol/${region}/v1.4/summoner/${summonerIds}/name',
      {
        params: {
          summonerIds: summonerIds.join(',')
        }
      }
    ).execute(callback);
  }

  /**
   * @callback SummonerService~getRunes
   * @param {?Error} error
   * @param {Object.<RunePagesDto>} [data]
   */
  /**
   * @todo example
   * @param {number[]} summonerIds
   * @param {SummonerService~getRunes} [callback]
   *
   * @return {Promise.<Object<RunePagesDto>>}
   */
  getRunes(summonerIds, callback) {
    if (typeof summonerIds === 'string') {
      summonerIds = [summonerIds];
    }
    return this.request(
      '/api/lol/${region}/v1.4/summoner/${summonerIds}/runes',
      {
        params: {
          summonerIds: summonerIds.join(',')
        }
      }
    ).execute(callback);
  }
}

exports = module.exports = SummonerService;

