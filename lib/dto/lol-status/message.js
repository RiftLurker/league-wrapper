'use strict';

const convert = require('../../util/convert.js');

const Translation = require('./translation.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/lolStatus~Message
 * @property {string} author
 * @property {string} content
 * @property {string} created_at
 * @property {string} id
 * @property {string} severity
 * @property {Array.<module:LeagueWrapper/dto/lolStatus~Translation>} translations
 * @property {string] updated_at
 */
class Message {
  constructor(data) {
    this.author = convert(data.author, String);
    this.content = convert(data.content, String);
    this.created_at = convert(data.created_at, String); // eslint-disable-line camelcase
    this.id = convert(data.id, String);
    this.severity = convert(data.severity, String);
    this.translations = convert(data.translations, [Translation]);
    this.updated_at = convert(data.updated_at, String); // eslint-disable-line camelcase
  }
}

exports = module.exports = Message;
