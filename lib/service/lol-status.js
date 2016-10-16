'use strict';

const Service = require('../service.js');

/**
 * @class
 * @extends Service
 */
class LolStatusService extends Service {
  constructor(api) {
    super(api, 'v1.0');
    this._host = 'http://status.leagueoflegends.com';
  }

  /**
   * @callback LolStatusService~getAll
   * @param {?Error} error
   * @param {Array.<Shard>} [data]
   */
  /**
   * @param {LolStatusService~getAll} [callback]
   *
   * @return {Promise.<Array.<Shard>>}
   */
  getAll(callback) {
    return this.api.request(
      '/shards',
      {
        host: this._host
      },
      this._dataHandler(callback)
    );
  }

  /**
   * @callback LolStatusService~getByShard
   * @param {?Error} error
   * @param {ShardStatus} [data]
   */
  /**
   * @param {ShardEnum} shard
   * @param {LolStatusService~getByShard} [callback]
   *
   * @return {Promise.<ShardStatus>}
   */
  getByShard(shard, callback) {
    return this.api.request(
      '/shards/${shard}',
      {
        host: this._host,
        params: {
          shard: shard
        }
      },
      this._dataHandler(callback)
    );
  }
}

exports = module.exports = LolStatusService;

