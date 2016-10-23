'use strict';

const Service = require('../service.js');

/**
 * @class
 * @extends Service
 */
class LolStaticDataService extends Service {
  constructor(api) {
    super(api, 'v1.2', false);
    this._host = 'https://global.api.pvp.net';
  }

  /**
   * @callback LolStaticDataService~getChampions
   * @param {?Error} error
   * @param {StaticChampionListDto} [data]
   */
  /**
   * @todo example
   * @param {Object} [query]
   * @param {string} [query.locale] // @todo: enum
   * @param {string} [query.version]
   * @param {boolean} [query.dataById]
   * @param {ChampData[]|ChampData} [query.champData]
   * @param {LolStaticDataService~getChampions} [callback]
   *
   * @return {Promise.<StaticChampionListDto>}
   */
  getChampions(query, callback) {
    return this.request(
      '/api/lol/static-data/${region}/v1.2/champion',
      {
        query: query,
        host: this._host
      }
    ).execute(callback);
  }

  /**
   * @callback LolStaticDataService~getChampionById
   * @param {?Error} error
   * @param {StaticChampionDto} [data]
   */
  /**
   * @todo example
   * @param {number} id
   * @param {Object} [query]
   * @param {string} [query.locale] // @todo: enum
   * @param {string} [query.version]
   * @param {boolean} [query.dataById]
   * @param {ChampData[]|ChampData} [query.champData]
   * @param {LolStaticDataService~getChampionById} [callback]
   *
   * @return {Promise.<StaticChampionDto>}
   */
  getChampionById(id, query, callback) {
    return this.request(
      '/api/lol/static-data/${region}/v1.2/champion/${id}',
      {
        params: {
          id: id
        },
        query: query,
        host: this._host
      }
    ).execute(callback);
  }

  /**
   * @callback LolStaticDataService~getItems
   * @param {?Error} error
   * @param {ItemListDto} [data]
   */
  /**
   * @todo example
   * @param {Object} [query]
   * @param {string} [query.locale] // @todo: enum
   * @param {string} [query.version]
   * @param {ItemData[]|ItemData} [query.itemListData]
   * @param {LolStaticDataService~getItems} [callback]
   *
   * @return {Promise.<ItemListDto>}
   */
  getItems(query, callback) {
    return this.request(
      '/api/lol/static-data/${region}/v1.2/item',
      {
        query: query,
        host: this._host
      }
    ).execute(callback);
  }

  /**
   * @callback LolStaticDataService~getItemById
   * @param {?Error} error
   * @param {ItemDto} [data]
   */
  /**
   * @todo example
   * @param {number} id
   * @param {Object} [query]
   * @param {string} [query.locale] // @todo: enum
   * @param {string} [query.version]
   * @param {ItemData[]|ItemData} [query.itemData]
   * @param {LolStaticDataService~getItemById} [callback]
   *
   * @return {Promise.<ItemDto>}
   */
  getItemById(id, query, callback) {
    return this.request(
      '/api/lol/static-data/${region}/v1.2/item/${id}',
      {
        params: {
          id: id
        },
        query: query,
        host: this._host
      }
    ).execute(callback);
  }

  /**
   * @callback LolStaticDataService~getLanguageStrings
   * @param {?Error} error
   * @param {LanguageStringsDto} [data]
   */
  /**
   * @todo example
   * @param {Object} [query]
   * @param {string} [query.locale] // @todo: enum
   * @param {string} [query.version]
   * @param {LolStaticDataService~getLanguageStrings} [callback]
   *
   * @return {Promise.<LanguageStringsDto>}
   */
  getLanguageStrings(query, callback) {
    return this.request(
      '/api/lol/static-data/${region}/v1.2/language-strings',
      {
        query: query,
        host: this._host
      }
    ).execute(callback);
  }

  /**
   * @callback LolStaticDataService~getLanguages
   * @param {?Error} error
   * @param {Array.<string>} [data]
   */
  /**
   * @todo example
   * @param {LolStaticDataService~getLanguages} [callback]
   *
   * @return {Promise.<Array.<string>>}
   */
  getLanguages(callback) {
    return this.request(
      '/api/lol/static-data/${region}/v1.2/languages',
      {
        host: this._host
      }
    ).execute(callback);
  }

  /**
   * @callback LolStaticDataService~getMap
   * @param {?Error} error
   * @param {MapDataDto} [data]
   */
  /**
   * @todo example
   * @param {Object} [query]
   * @param {string} [query.locale] // @todo: enum
   * @param {string} [query.version]
   * @param {LolStaticDataService~getMap} [callback]
   *
   * @return {Promise.<MapDataDto>}
   */
  getMap(query, callback) {
    return this.request(
      '/api/lol/static-data/${region}/v1.2/languages',
      {
        query: query,
        host: this._host
      }
    ).execute(callback);
  }

  /**
   * @callback LolStaticDataService~getMasteries
   * @param {?Error} error
   * @param {MasteryListDto} [data]
   */
  /**
   * @todo example
   * @param {Object} [query]
   * @param {string} [query.locale] // @todo: enum
   * @param {string} [query.version]
   * @param {MasteryData} [query.masteryListData]
   * @param {LolStaticDataService~getMasteries} [callback]
   *
   * @return {Promise.<MasteryListDto>}
   */
  getMasteries(query, callback) {
    return this.request(
      '/api/lol/static-data/${region}/v1.2/mastery',
      {
        query: query,
        host: this._host
      }
    ).execute(callback);
  }

  /**
   * @callback LolStaticDataService~getMasteryById
   * @param {?Error} error
   * @param {MasteryDto} [data]
   */
  /**
   * @todo example
   * @param {number} id
   * @param {Object} [query]
   * @param {string} [query.locale] // @todo: enum
   * @param {string} [query.version]
   * @param {MasteryData} [query.masteryData]
   * @param {LolStaticDataService~getMasteryById} [callback]
   *
   * @return {Promise.<MasteryDto>}
   */
  getMasteryById(id, query, callback) {
    return this.request(
      '/api/lol/static-data/${region}/v1.2/mastery/${id}',
      {
        params: {
          id: id
        },
        query: query,
        host: this._host
      }
    ).execute(callback);
  }

  /**
   * @callback LolStaticDataService~getRealm
   * @param {?Error} error
   * @param {RealmDto} [data]
   */
  /**
   * @todo example
   * @param {LolStaticDataService~getRealm} [callback]
   *
   * @return {Promise.<RealmDto>}
   */
  getRealm(callback) {
    return this.request(
      '/api/lol/static-data/${region}/v1.2/realm',
      {
        host: this._host
      }
    ).execute(callback);
  }

  /**
   * @callback LolStaticDataService~getRunes
   * @param {?Error} error
   * @param {RuneListDto} [data]
   */
  /**
   * @todo example
   * @param {Object} [query]
   * @param {string} [query.locale] // @todo: enum
   * @param {string} [query.version]
   * @param {RuneData} [query.runeListData]
   * @param {LolStaticDataService~getRunes} [callback]
   *
   * @return {Promise.<RuneListDto>}
   */
  getRunes(query, callback) {
    return this.request(
      '/api/lol/static-data/${region}/v1.2/rune/',
      {
        query: query,
        host: this._host
      }
    ).execute(callback);
  }

  /**
   * @callback LolStaticDataService~getRuneById
   * @param {?Error} error
   * @param {RuneDto} [data]
   */
  /**
   * @todo example
   * @param {number} id
   * @param {Object} [query]
   * @param {string} [query.locale] // @todo: enum
   * @param {string} [query.version]
   * @param {RuneData} [query.runeData]
   * @param {LolStaticDataService~getRuneById} [callback]
   *
   * @return {Promise.<RuneDto>}
   */
  getRuneById(id, query, callback) {
    return this.request(
      '/api/lol/static-data/${region}/v1.2/rune/${id}',
      {
        params: {
          id: id
        },
        query: query,
        host: this._host
      }
    ).execute(callback);
  }

  /**
   * @callback LolStaticDataService~getSummonerSpells
   * @param {?Error} error
   * @param {SummonerSpellListDto} [data]
   */
  /**
   * @todo example
   * @param {Object} [query]
   * @param {string} [query.locale] // @todo: enum
   * @param {string} [query.version]
   * @param {boolean} [query.dataById]
   * @param {SpellData} [query.spellData]
   * @param {LolStaticDataService~getSummonerSpells} [callback]
   *
   * @return {Promise.<SummonerSpellListDto>}
   */
  getSummonerSpells(query, callback) {
    return this.request(
      '/api/lol/static-data/${region}/v1.2/summoner-spell',
      {
        query: query,
        host: this._host
      }
    ).execute(callback);
  }

  /**
   * @callback LolStaticDataService~getSummonerSpellById
   * @param {?Error} error
   * @param {SummonerSpellDto} [data]
   */
  /**
   * @todo example
   * @param {number} id
   * @param {Object} [query]
   * @param {string} [query.locale] // @todo: enum
   * @param {string} [query.version]
   * @param {boolean} [query.dataById]
   * @param {SpellData} [query.spellData]
   * @param {LolStaticDataService~getSummonerSpellById} [callback]
   *
   * @return {Promise.<SummonerSpellDto>}
   */
  getSummonerSpellById(id, query, callback) {
    return this.request(
      '/api/lol/static-data/${region}/v1.2/summoner-spell/${id}',
      {
        params: {
          id: id
        },
        query: query,
        host: this._host
      }
    ).execute(callback);
  }

  /**
   * @callback LolStaticDataService~getVersions
   * @param {?Error} error
   * @param {Array.<string>} [data]
   */
  /**
   * @todo example
   * @param {LolStaticDataService~getVersions} [callback]
   *
   * @return {Promise.<Array.<string>>}
   */
  getVersions(callback) {
    return this.request(
      '/api/lol/static-data/${region}/v1.2/versions',
      {
        host: this._host
      }
    ).execute(callback);
  }
}

exports = module.exports = LolStaticDataService;

