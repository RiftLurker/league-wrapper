'use strict';

class Map {
  /**
   * @param {number} mapId
   * @param {string} name
   * @param {string} note
   */
  constructor(mapId, name, note) {
    this.mapId = mapId;
    this.name = name;
    this.note = note;
  }
}

Map.SUMMONERS_RIFT_ORIGINAL = new Map(1, 'Summoner\'s Rift', 'Original Summer Variant');
Map.SUMMONERS_RIFT_AUTUMN = new Map(2, 'Summoner\'s Rift', 'Original Autumn Variant');
Map.PROVING_GROUNDS = new Map(3, 'The Proving Grounds', 'Tutorial Map');
Map.TWISTED_TREELINE_ORIGINAL = new Map(4, 'Twisted Treeline', 'Original Version');
Map.CRYSTAL_SCAR = new Map(8, 'The Crystal Scar', 'Dominion Map');
Map.TWISTED_TREELINE_CURRENT = new Map(10, 'Twisted Treeline', 'Current Version');
Map.SUMMONERS_RIGHT_CURRENT = new Map(11, 'Summoner\'s Rift', 'Current Version');
Map.HOWLING_ABYSS = new Map(12, 'Howling Abyss', 'ARAM Map');
Map.BUTCHERS_BRIDGE = new Map(14, 'Butcher\'s Bridge', 'ARAM Map');

exports = module.exports = Map;
