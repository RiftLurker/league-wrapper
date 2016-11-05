'use strict';

const convert = require('../../util/convert.js');

const MasteryTreeItemDto = require('./mastery-tree-item-dto.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/lolStaticData~MasteryTreeListDto
 * @property {Array.<module:LeagueWrapper/dto/lolStaticData~MasteryTreeItemDto>} masteryTreeItems
 */
class MasteryTreeListDto {
  constructor(data) {
    this.masteryTreeItems = convert(data.masteryTreeItems, [MasteryTreeItemDto]);
  }
}
exports = module.exports = MasteryTreeListDto;
