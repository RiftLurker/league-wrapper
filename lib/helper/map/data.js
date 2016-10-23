'use strict';

class MapData {
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

exports = module.exports = MapData;
