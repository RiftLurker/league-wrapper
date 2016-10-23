'use strict';

const Map = require('../constant/map.js');
const MapData = require('./map/data.js');

/**
 * @class
 */
class MapHelper {
  constructor() {
    this.queueTypes = {};
  }
  /**
   * @param {Map} map
   * @returns {MapData}
   */
  getMapData(map) {
    return this.queueTypes[map];
  }

  /**
   * @param {Map} map
   * @param {MapData} mapData
   * @protected
   */
  add(map, mapData) {
    this.queueTypes[map] = mapData;
  }
}

const singleton = new MapHelper();

singleton.add(Map.SUMMONERS_RIFT_ORIGINAL, new MapData(1, 'Summoner\'s Rift', 'Original Summer Variant'));
singleton.add(Map.SUMMONERS_RIFT_AUTUMN, new MapData(2, 'Summoner\'s Rift', 'Original Autumn Variant'));
singleton.add(Map.PROVING_GROUNDS, new MapData(3, 'The Proving Grounds', 'Tutorial Map'));
singleton.add(Map.TWISTED_TREELINE_ORIGINAL, new MapData(4, 'Twisted Treeline', 'Original Version'));
singleton.add(Map.CRYSTAL_SCAR, new MapData(8, 'The Crystal Scar', 'Dominion Map'));
singleton.add(Map.TWISTED_TREELINE_CURRENT, new MapData(10, 'Twisted Treeline', 'Current Version'));
singleton.add(Map.SUMMONERS_RIGHT_CURRENT, new MapData(11, 'Summoner\'s Rift', 'Current Version'));
singleton.add(Map.HOWLING_ABYSS, new MapData(12, 'Howling Abyss', 'ARAM Map'));
singleton.add(Map.BUTCHERS_BRIDGE, new MapData(14, 'Butcher\'s Bridge', 'ARAM Map'));

/**
 * @type {MapHelper}
 */
exports = module.exports = singleton;
