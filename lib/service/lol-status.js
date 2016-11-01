'use strict';

const Service = require('../service.js');

/**
 * @class
 * @alias module:LeagueWrapper/service~LolStatusService
 * @extends Service
 */
class LolStatusService extends Service {
  constructor(api) {
    super(api);
    this._host = 'http://status.leagueoflegends.com';
  }

  /**
   * @callback module:LeagueWrapper/service~LolStatusService~getAll
   * @param {?Error} error
   * @param {Array.<module:LeagueWrapper/dto/lolStatus~Shard>} [data]
   */
  /**
   * @todo example
   * @param {?module:LeagueWrapper/options~RequestOptions} [options]
   * @param {module:LeagueWrapper/service~LolStatusService~getAll} [callback]
   *
   * @return {Promise.<Array.<module:LeagueWrapper/dto/lolStatus~Shard>>}
   */
  getAll(options, callback) {
    options = Object.assign({
      path: '/shards',
      host: this._host
    }, options);

    return super.request(options).execute(callback);
  }

  /**
   * @callback module:LeagueWrapper/service~LolStatusService~getByShard
   * @param {?Error} error
   * @param {module:LeagueWrapper/dto/lolStatus~ShardStatus} [data]
   */
  /**
   * @todo example
   * @param {ShardEnum} shard
   * @param {?module:LeagueWrapper/options~RequestOptions} [options]
   * @param {module:LeagueWrapper/service~LolStatusService~getByShard} [callback]
   *
   * @return {Promise.<module:LeagueWrapper/dto/lolStatus~ShardStatus>}
   */
  getByShard(shard, options, callback) {
    options = Object.assign({
      path: '/shards/${shard}',
      params: {
        shard: shard
      },
      host: this._host
    }, options);

    return super.request(options).execute(callback);
  }
}

exports = module.exports = LolStatusService;

