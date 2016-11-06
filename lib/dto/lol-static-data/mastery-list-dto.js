'use strict';

const convert = require('../../util/convert.js');

const MasteryDto = require('./mastery-dto.js');
const MasteryTreeDto = require('./mastery-tree-dto.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/lolStaticData~MasteryListDto
 * @property {Object.<module:LeagueWrapper/dto/lolStaticData~MasteryDto>} data
 * @property {module:LeagueWrapper/dto/lolStaticData~MasteryTreeDto} tree
 * @property {string} type
 * @property {string} version
 */
class MasteryListDto {
  constructor(data) {
    this.data = convert(data.data, [String, MasteryDto]);
    this.tree = convert(data.tree, MasteryTreeDto);
    this.type = convert(data.type, String);
    this.version = convert(data.version, String);
  }
}
exports = module.exports = MasteryListDto;
