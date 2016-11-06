'use strict';

const convert = require('../../util/convert.js');

/**
 * @class
 * @alias module:LeagueWrapper/dto/summoner~RuneSlotDto
 * @property {number} runeId - Rune ID associated with the rune slot. For static information correlating to rune IDs, please refer to the LoL Static Data API.
 * @property {number} runeSlotId - Rune slot ID.
 */
class RuneSlotDto {
  constructor(data) {
    this.runeId = convert(data.runeId, Number);
    this.runeSlotId = convert(data.runeSlotId, Number);
  }
}

exports = module.exports = RuneSlotDto;
