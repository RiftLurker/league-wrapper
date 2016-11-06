'use strict';

const convert = require('../../util/convert.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/lolStaticData~InfoDto
 * @property {number} attack
 * @property {number} defense
 * @property {number} difficulty
 * @property {number} magic
 */
class InfoDto {
  constructor(data) {
    this.attack = convert(data.attack, Number);
    this.defense = convert(data.defense, Number);
    this.difficulty = convert(data.difficulty, Number);
    this.magic = convert(data.magic, Number);
  }
}

exports = module.exports = InfoDto;
