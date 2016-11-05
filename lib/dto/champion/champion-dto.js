'use strict';

const convert = require('../../util/convert.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/champion~ChampionDto
 * @property {boolean} active - Indicates if the champion is active.
 * @property {boolean} botEnabled - Bot enabled flag (for custom games).
 * @property {boolean} botMmEnabled - Bot Match Made enabled flag (for Co-op vs. AI games).
 * @property {boolean} freeToPlay - Indicates if the champion is free to play. Free to play champions are rotated periodically.
 * @property {number} id - Champion ID. For static information correlating to champion IDs, please refer to the LoL Static Data API.
 * @property {boolean} rankedPlayEnabled - Ranked play enabled flag.
 */
class ChampionDto {
  constructor(data) {
    this.active = convert(data.active, Boolean);
    this.botEnabled = convert(data.botEnabled, Boolean);
    this.botMmEnabled = convert(data.botMmEnabled, Boolean);
    this.freeToPlay = convert(data.freeToPlay, Boolean);
    this.id = convert(data.id, Number);
    this.rankedPlayEnabled = convert(data.rankedPlayEnabled, Boolean);
  }
}

exports = module.exports = ChampionDto;
