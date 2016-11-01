'use strict';

const convert = require('../../util/convert.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/league~MiniSeriesDto
 * @property {number} Number of current losses in the mini series.
 * @property {string} String showing the current, sequential mini series progress where 'W' represents a win, 'L' represents a loss, and 'N' represents a game that hasn't been played yet.
 * @property {number} Number of wins required for promotion.
 * @property {number} Number of current wins in the mini series.
 */
class MiniSeriesDto    {
  constructor(data) {
    // @todo
  }
}

exports = module.exports = MiniSeriesDto   ;
