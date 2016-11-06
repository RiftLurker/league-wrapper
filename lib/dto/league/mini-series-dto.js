'use strict';

const convert = require('../../util/convert.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/league~MiniSeriesDto
 * @property {number} losses - Number of current losses in the mini series.
 * @property {string} progress - String showing the current, sequential mini series progress where 'W' represents a win, 'L' represents a loss, and 'N' represents a game that hasn't been played yet.
 * @property {number} target - Number of wins required for promotion.
 * @property {number} wins - Number of current wins in the mini series.
 */
class MiniSeriesDto    {
  constructor(data) {
    this.losses = convert(data.losses, Number);
    this.progress = convert(data.progress, String);
    this.target = convert(data.target, Number);
    this.wins = convert(data.wins, Number);
  }
}

exports = module.exports = MiniSeriesDto   ;
