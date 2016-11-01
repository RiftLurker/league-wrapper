'use strict';

const convert = require('../../util/convert.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/team~TeamMemberInfoDto
 * @property {number} inviteDate - Date that team member was invited to team specified as epoch milliseconds.
 * @property {number} joinDate - Date that team member joined team specified as epoch milliseconds.
 * @property {number} playerId
 * @property {string} status
 */
class TeamMemberInfoDto {
  constructor(data) {
    // @todo
  }
}

exports = module.exports = TeamMemberInfoDto;
