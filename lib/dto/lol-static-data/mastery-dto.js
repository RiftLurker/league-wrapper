'use strict';

const convert = require('../../util/convert.js');

const ImageDto = require('./image-dto.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/lolStaticData~MasteryDto
 * @property {Array.<string>} description
 * @property {number} id
 * @property {module:LeagueWrapper/dto/lolStaticData~ImageDto} image
 * @property {string} masteryTree - Legal values: Cunning, Ferocity, Resolve // @todo: enum
 * @property {string} name
 * @property {string} prereq
 * @property {number} ranks
 * @property {Array.<string>} sanitizedDescription
 */
class MasteryDto {
  constructor(data) {
    this.description = convert(data.description, [String]);
    this.id = convert(data.id, Number);
    this.image = convert(data.image, ImageDto);
    this.masteryTree = convert(data.masteryTree, String);
    this.name = convert(data.name, String);
    this.prereq = convert(data.prereq, String);
    this.ranks = convert(data.ranks, Number);
    this.sanitizedDescription = convert(data.sanitizedDescription, [String]);
  }
}
exports = module.exports = MasteryDto;
