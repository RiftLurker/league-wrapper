'use strict';

const Service = require('../service.js');

/**
 * @class
 * @extends Service
 */
class LolStatusService extends Service {
  constructor(api) {
    super(api, 'v1.0', false);
    this._host = 'http://status.leagueoflegends.com';
  }

  /**
   * @callback LolStatusService~getAll
   * @param {?Error} error
   * @param {Array.<LolStatusService~Shard>} [data]
   */
  /**
   * @todo example
   * @param {LolStatusService~getAll} [callback]
   *
   * @return {Promise.<Array.<LolStatusService~Shard>>}
   */
  getAll(callback) {
    return this.request(
      '/shards',
      {
        host: this._host
      }
    ).execute(callback);
  }

  /**
   * @callback LolStatusService~getByShard
   * @param {?Error} error
   * @param {LolStatusService~ShardStatus} [data]
   */
  /**
   * @todo example
   * @param {ShardEnum} shard
   * @param {LolStatusService~getByShard} [callback]
   *
   * @return {Promise.<LolStatusService~ShardStatus>}
   */
  getByShard(shard, callback) {
    return this.request(
      '/shards/${shard}',
      {
        host: this._host,
        params: {
          shard: shard
        }
      }
    ).execute(callback);
  }
}

exports = module.exports = LolStatusService;

