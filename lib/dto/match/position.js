'use strict';

const convert = require('../../util/convert.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/match~Position
 * @property {number} x
 * @property {number} y
 */
class Position {
  constructor(data) {
    this.x = convert(data.x, Number);
    this.y = convert(data.y, Number);
  }
}

exports = module.exports = Position;
