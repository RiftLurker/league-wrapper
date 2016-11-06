'use strict';

const convert = require('../../util/convert.js');

const BasicDataStatsDto = require('./basic-data-stats-dto.js');
const GoldDto = require('./gold-dto.js');
const ImageDto = require('./image-dto.js');
const MetaDataDto = require('./meta-data-dto.js');

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
    this.colloq = convert(data.colloq, String);
    this.consumeOnFull = convert(data.consumeOnFull, Boolean);
    this.consumed = convert(data.consumed, Boolean);
    this.depth = convert(data.depth, Number);
    this.description = convert(data.description, String);
    this.effect = convert(data.effect, [String, String]);
    this.from = convert(data.from, [String]);
    this.gold = convert(data.gold, GoldDto);
    this.group = convert(data.group, String);
    this.hideFromAll = convert(data.hideFromAll, Boolean);
    this.id = convert(data.id, Number);
    this.image = convert(data.image, ImageDto);
    this.inStore = convert(data.inStore, Boolean);
    this.into = convert(data.into, [String]);
    this.maps = convert(data.maps, [String, Boolean]);
    this.name = convert(data.name, String);
    this.plaintext = convert(data.plaintext, String);
    this.requiredChampion = convert(data.requiredChampion, String);
    this.rune = convert(data.rune, MetaDataDto);
    this.sanitizedDescription = convert(data.sanitizedDescription, String);
    this.specialRecipe = convert(data.specialRecipe, Number);
    this.stacks = convert(data.stacks, Number);
    this.stats = convert(data.stats, BasicDataStatsDto);
    this.tags = convert(data.tags, [String]);
  }
}

exports = module.exports = ItemDto;
