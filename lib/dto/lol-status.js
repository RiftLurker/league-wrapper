'use strict';

const Incident = require('./lol-status/incident.js');
const Message = require('./lol-status/message.js');
const Service = require('./lol-status/service.js');
const Shard = require('./lol-status/shard.js');
const ShardStatus = require('./lol-status/shard-status.js');
const Translation = require('./lol-status/translation.js');

/**
 * @module module:LeagueWrapper/dto/lolStatus
 */

/**
 * @type {{Incident, Message, Service, Shard, ShardStatus, Translation}}
 */
exports = module.exports = {
  Incident,
  Message,
  Service,
  Shard,
  ShardStatus,
  Translation
};
