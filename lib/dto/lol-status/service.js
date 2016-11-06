'use strict';

const convert = require('../../util/convert.js');

const Incident = require('./incident.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/lolStatus~Service
 * @property {Array.<module:LeagueWrapper/dto/lolStatus~Incident>} incidents
 * @property {string} name
 * @property {string} slug
 * @property {string} status
 */
class Service {
  constructor(data) {
    this.incidents = convert(data.incidents, [Incident]);
    this.name = convert(data.name, String);
    this.slug = convert(data.slug, String);
    this.status = convert(data.status, String);
  }
}

exports = module.exports = Service;
