'use strict';

const convert = require('../../util/convert.js');

const Message = require('./message.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/lolStatus~Incident
 * @property {boolean} active
 * @property {string} created_at
 * @property {number} id
 * @property {Array.<module:LeagueWrapper/dto/lolStatus~Message>} updates
 */
class Incident {
  constructor(data) {
    this.active = convert(data.active, Boolean);
    this.created_at = convert(data.created_at, String); // eslint-disable-line camelcase
    this.id = convert(data.id, Number);
    this.updates = convert(data.updates, [Message]);
  }
}

exports = module.exports = Incident;
