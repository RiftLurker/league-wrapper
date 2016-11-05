'use strict';

const MasteryDto = require('./summoner/mastery-dto.js');
const MasteryPageDto = require('./summoner/mastery-page-dto.js');
const MasteryPagesDto = require('./summoner/mastery-pages-dto.js');
const RunePageDto = require('./summoner/rune-page-dto.js');
const RunePagesDto = require('./summoner/rune-pages-dto.js');
const RuneSlotDto = require('./summoner/rune-slot-dto.js');
const SummonerDto = require('./summoner/summoner-dto.js');

/**
 * @module module:LeagueWrapper/dto/summoner
 */

/**
 * @type {{MasteryDto, MasteryPageDto, MasteryPagesDto, RunePageDto, RunePagesDto, RuneSlotDto, SummonerDto}}
 */
exports = module.exports = {
  MasteryDto,
  MasteryPageDto,
  MasteryPagesDto,
  RunePageDto,
  RunePagesDto,
  RuneSlotDto,
  SummonerDto
};
