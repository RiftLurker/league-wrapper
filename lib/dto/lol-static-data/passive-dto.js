'use strict';

const convert = require('../../util/convert.js');

const ImageDto = require('./image-dto.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/lolStaticData~PassiveDto
 * @property {string} description
 * @property {module:LeagueWrapper/dto/lolStaticData~ImageDto} image
 * @property {string} name
 * @property {string} sanitizedDescription
 */
class PassiveDto {
  constructor(data) {
    this.description = convert(data.description, String);
    this.image = convert(data.image, ImageDto);
    this.name = convert(data.name, String);
    this.sanitizedDescription = convert(data.sanitizedDescription, String);
  }
}

exports = module.exports = PassiveDto;
