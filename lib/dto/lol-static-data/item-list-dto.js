'use strict';

const convert = require('../../util/convert.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/lolStaticData~ItemListDto
 * @property {module:LeagueWrapper/dto/lolStaticData~BasicDataDto} basic
 * @property {Object.<module:LeagueWrapper/dto/lolStaticData~ItemDto>} data
 * @property {Array.<module:LeagueWrapper/dto/lolStaticData~GroupDto>} groups
 * @property {Array.<module:LeagueWrapper/dto/lolStaticData~ItemTreeDto>} tree
 * @property {string} type
 * @property {version} type
 */
class ItemListDto {
  constructor(data) {
    // @todo
  }
}

exports = module.exports = ItemListDto;
