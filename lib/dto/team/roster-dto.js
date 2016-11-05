'use strict';

const convert = require('../../util/convert.js');

const TeamMemberInfoDto = require('./team-member-info-dto.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/team~RosterDto
 * @property {Array.<module:LeagueWrapper/dto/team~TeamMemberInfoDto>} memberList
 * @property {number} ownerId
 */
class RosterDto {
  constructor(data) {
    this.memberList = convert(data.memberList, [TeamMemberInfoDto]);
    this.ownerId = convert(data.ownerId, Number);
  }
}

exports = module.exports = RosterDto;
