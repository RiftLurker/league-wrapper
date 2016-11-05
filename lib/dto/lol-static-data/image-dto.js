'use strict';

const convert = require('../../util/convert.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/lolStaticData~ImageDto
 * @property {string} full
 * @property {string} group
 * @property {number} h
 * @property {string} sprite
 * @property {number} w
 * @property {number} x
 * @property {number} y
 */
class ImageDto {
  constructor(data) {
    this.full = convert(data.full, String);
    this.group = convert(data.group, String);
    this.h = convert(data.h, Number);
    this.sprite = convert(data.sprite, String);
    this.w = convert(data.w, Number);
    this.x = convert(data.x, Number);
    this.y = convert(data.y, Number);
  }
}

exports = module.exports = ImageDto;
