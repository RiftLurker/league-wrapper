'use strict';

const convert = require('../../util/convert.js');

const MasteryTreeListDto = require('./mastery-tree-list-dto.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/lolStaticData~MasteryTreeDto
 * @property {Array.<module:LeagueWrapper/dto/lolStaticData~MasteryTreeListDto>} Cunning
 * @property {Array.<module:LeagueWrapper/dto/lolStaticData~MasteryTreeListDto>} Ferocity
 * @property {Array.<module:LeagueWrapper/dto/lolStaticData~MasteryTreeListDto>} Resolve
 */
class MasteryTreeDto {
  constructor(data) {
    this.Cunning = convert(data.Cunning, [MasteryTreeListDto]);
    this.Ferocity = convert(data.Ferocity, [MasteryTreeListDto]);
    this.Resolve = convert(data.Resolve, [MasteryTreeListDto]);
  }
}

exports = module.exports = MasteryTreeDto;
