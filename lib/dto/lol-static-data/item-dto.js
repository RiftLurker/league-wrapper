'use strict';

const convert = require('../../util/convert.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/lolStaticData~ItemDto
 * @property {string} colloq
 * @property {boolean} consumeOnFull
 * @property {boolean} consumed
 * @property {number} depth
 * @property {string} description
 * @property {Object.<string>} effect
 * @property {Array.<string>} from
 * @property {module:LeagueWrapper/dto/lolStaticData~GoldDto} gold - Data Dragon includes the gold field for basic data, which is shared by both rune and item. However, only items have a gold field on them, representing their gold cost in the store. Since runes are not sold in the store, they have no gold cost.
 * @property {string} group
 * @property {boolean} hideFromAll
 * @property {number} id
 * @property {module:LeagueWrapper/dto/lolStaticData~ImageDto} image
 * @property {boolean} inStore
 * @property {Array.<string>} into
 * @property {Object.<boolean>} maps
 * @property {string} name
 * @property {string} plaintext
 * @property {string} requiredChampion
 * @property {module:LeagueWrapper/dto/lolStaticData~MetaDataDto} rune
 * @property {string} sanitizedDescription
 * @property {number} specialRecipe
 * @property {number} stacks
 * @property {module:LeagueWrapper/dto/lolStaticData~BasicDataStatsDto} stats
 * @property {Array.<string>} tags
 */
class ItemDto {
  constructor(data) {
    // @todo
  }
}

exports = module.exports = ItemDto;
