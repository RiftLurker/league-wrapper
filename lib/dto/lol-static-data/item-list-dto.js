'use strict';

const convert = require('../../util/convert.js');

const BasicDataDto = require('./basic-data-dto.js');
const GroupDto = require('./group-dto.js');
const ItemDto = require('./item-dto.js');
const ItemTreeDto = require('./item-tree-dto.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/lolStaticData~ItemListDto
 * @property {module:LeagueWrapper/dto/lolStaticData~BasicDataDto} basic
 * @property {Object.<module:LeagueWrapper/dto/lolStaticData~ItemDto>} data
 * @property {Array.<module:LeagueWrapper/dto/lolStaticData~GroupDto>} groups
 * @property {Array.<module:LeagueWrapper/dto/lolStaticData~ItemTreeDto>} tree
 * @property {string} type
 * @property {string} version
 */
class ItemListDto {
  constructor(data) {
    this.basic = convert(data.basic, BasicDataDto);
    this.data = convert(data.data, [String, ItemDto]);
    this.groups = convert(data.groups, [GroupDto]);
    this.tree = convert(data.tree, [ItemTreeDto]);
    this.type = convert(data.type, String);
    this.version = convert(data.version, String);

  }
}

exports = module.exports = ItemListDto;
