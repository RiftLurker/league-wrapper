'use strict';

const convert = require('../../util/convert.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/lolStaticData~MasteryTreeItemDto
 * @property {number} masteryId
 * @property {string} prereq
 */
class MasteryTreeItemDto {
  constructor(data) {
    this.masteryId = convert(data.masteryId, Number);
    this.prereq = convert(data.prereq, String);
  }
}

exports = module.exports = MasteryTreeItemDto;
