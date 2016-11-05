'use strict';

const convert = require('../../util/convert.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/lolStaticData~GroupDto
 * @property {string} MaxGroupOwnable
 * @property {string} key
 */
class GroupDto {
  constructor(data) {
    this.MaxGroupOwnable = convert(data.MaxGroupOwnable, String);
    this.key = convert(data.key, String);
  }
}

exports = module.exports = GroupDto;
