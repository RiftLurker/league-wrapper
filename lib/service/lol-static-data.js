'use strict';

const ChampionDto = require('../dto/lol-static-data/champion-dto.js');
const ChampionListDto = require('../dto/lol-static-data/champion-list-dto.js');
const ItemDto = require('../dto/lol-static-data/item-dto.js');
const ItemListDto = require('../dto/lol-static-data/item-list-dto.js');
const LanguageStringsDto = require('../dto/lol-static-data/language-strings-dto.js');
const MapDataDto = require('../dto/lol-static-data/map-data-dto.js');
const MasteryDto = require('../dto/lol-static-data/mastery-dto.js');
const MasteryListDto = require('../dto/lol-static-data/mastery-list-dto.js');
const RealmDto = require('../dto/lol-static-data/realm-dto.js');
const RuneDto = require('../dto/lol-static-data/rune-dto.js');
const RuneListDto = require('../dto/lol-static-data/rune-list-dto.js');
const SummonerSpellDto = require('../dto/lol-static-data/summoner-spell-dto.js');
const SummonerSpellListDto = require('../dto/lol-static-data/summoner-spell-list-dto.js');

const Region = require('../constant/region.js');

const Service = require('../service.js');

/**
 * @class
 * @alias module:LeagueWrapper/service~LolStaticDataService
 * @extends Service
 */
class LolStaticDataService extends Service {
  constructor(api) {
    super(api);
  }

  /**
   * @callback module:LeagueWrapper/service~LolStaticDataService~getChampions
   * @param {?Error} error
   * @param {module:LeagueWrapper/dto/lolStaticData~ChampionListDto} [data]
   */
  /**
   * @todo example
   * @param {Object} [query]
   * @param {string} [query.locale] // @todo: enum
   * @param {string} [query.version]
   * @param {boolean} [query.dataById]
   * @param {ChampData[]|ChampData} [query.champData]
   * @param {?module:LeagueWrapper/options~RequestOptions} [options]
   * @param {module:LeagueWrapper/service~LolStaticDataService~getChampions} [callback]
   *
   * @return {Promise.<module:LeagueWrapper/dto/lolStaticData~ChampionListDto>}
   */
  getChampions(query, options, callback) {
    options = Object.assign({
      path: '/api/lol/static-data/${region}/v1.2/champion',
      query: query,
      host: Region.GLOBAL.getHostUrl(),
      returnType: ChampionListDto
    }, options);

    return super.request(options).execute(callback);
  }

  /**
   * @callback module:LeagueWrapper/service~LolStaticDataService~getChampionById
   * @param {?Error} error
   * @param {module:LeagueWrapper/dto/lolStaticData~ChampionDto} [data]
   */
  /**
   * @todo example
   * @param {number} id
   * @param {Object} [query]
   * @param {string} [query.locale] // @todo: enum
   * @param {string} [query.version]
   * @param {boolean} [query.dataById]
   * @param {ChampData[]|ChampData} [query.champData]
   * @param {?module:LeagueWrapper/options~RequestOptions} [options]
   * @param {module:LeagueWrapper/service~LolStaticDataService~getChampionById} [callback]
   *
   * @return {Promise.<module:LeagueWrapper/dto/lolStaticData~ChampionDto>}
   */
  getChampionById(id, query, options, callback) {
    options = Object.assign({
      path: '/api/lol/static-data/${region}/v1.2/champion/${id}',
      params: {
        id: id
      },
      query: query,
      host: Region.GLOBAL.getHostUrl(),
      returnType: ChampionDto
    }, options);

    return super.request(options).execute(callback);
  }

  /**
   * @callback module:LeagueWrapper/service~LolStaticDataService~getItems
   * @param {?Error} error
   * @param {module:LeagueWrapper/dto/lolStaticData~ItemListDto} [data]
   */
  /**
   * @todo example
   * @param {Object} [query]
   * @param {string} [query.locale] // @todo: enum
   * @param {string} [query.version]
   * @param {ItemData[]|ItemData} [query.itemListData]
   * @param {?module:LeagueWrapper/options~RequestOptions} [options]
   * @param {module:LeagueWrapper/service~LolStaticDataService~getItems} [callback]
   *
   * @return {Promise.<module:LeagueWrapper/dto/lolStaticData~ItemListDto>}
   */
  getItems(query, options, callback) {
    options = Object.assign({
      path: '/api/lol/static-data/${region}/v1.2/item',
      query: query,
      host: Region.GLOBAL.getHostUrl(),
      returnType: ItemListDto
    }, options);

    return super.request(options).execute(callback);
  }

  /**
   * @callback module:LeagueWrapper/service~LolStaticDataService~getItemById
   * @param {?Error} error
   * @param {module:LeagueWrapper/dto/lolStaticData~ItemDto} [data]
   */
  /**
   * @todo example
   * @param {number} id
   * @param {Object} [query]
   * @param {string} [query.locale] // @todo: enum
   * @param {string} [query.version]
   * @param {ItemData[]|ItemData} [query.itemData]
   * @param {?module:LeagueWrapper/options~RequestOptions} [options]
   * @param {module:LeagueWrapper/service~LolStaticDataService~getItemById} [callback]
   *
   * @return {Promise.<module:LeagueWrapper/dto/lolStaticData~ItemDto>}
   */
  getItemById(id, query, options, callback) {
    options = Object.assign({
      path: '/api/lol/static-data/${region}/v1.2/item/${id}',
      params: {
        id: id
      },
      query: query,
      host: Region.GLOBAL.getHostUrl(),
      returnType: ItemDto
    }, options);

    return super.request(options).execute(callback);
  }

  /**
   * @callback module:LeagueWrapper/service~LolStaticDataService~getLanguageStrings
   * @param {?Error} error
   * @param {module:LeagueWrapper/dto/lolStaticData~LanguageStringsDto} [data]
   */
  /**
   * @todo example
   * @param {Object} [query]
   * @param {string} [query.locale] // @todo: enum
   * @param {string} [query.version]
   * @param {?module:LeagueWrapper/options~RequestOptions} [options]
   * @param {module:LeagueWrapper/service~LolStaticDataService~getLanguageStrings} [callback]
   *
   * @return {Promise.<module:LeagueWrapper/dto/lolStaticData~LanguageStringsDto>}
   */
  getLanguageStrings(query, options, callback) {
    options = Object.assign({
      path: '/api/lol/static-data/${region}/v1.2/language-strings',
      query: query,
      host: Region.GLOBAL.getHostUrl(),
      returnType: LanguageStringsDto
    }, options);

    return super.request(options).execute(callback);
  }

  /**
   * @callback module:LeagueWrapper/service~LolStaticDataService~getLanguages
   * @param {?Error} error
   * @param {Array.<string>} [data]
   */
  /**
   * @todo example
   * @param {?module:LeagueWrapper/options~RequestOptions} [options]
   * @param {module:LeagueWrapper/service~LolStaticDataService~getLanguages} [callback]
   *
   * @return {Promise.<Array.<string>>}
   */
  getLanguages(options, callback) {
    options = Object.assign({
      path: '/api/lol/static-data/${region}/v1.2/languages',
      host: Region.GLOBAL.getHostUrl(),
      returnType: [String]
    }, options);

    return super.request(options).execute(callback);
  }

  /**
   * @callback module:LeagueWrapper/service~LolStaticDataService~getMap
   * @param {?Error} error
   * @param {module:LeagueWrapper/dto/lolStaticData~MapDataDto} [data]
   */
  /**
   * @todo example
   * @param {Object} [query]
   * @param {string} [query.locale] // @todo: enum
   * @param {string} [query.version]
   * @param {?module:LeagueWrapper/options~RequestOptions} [options]
   * @param {module:LeagueWrapper/service~LolStaticDataService~getMap} [callback]
   *
   * @return {Promise.<module:LeagueWrapper/dto/lolStaticData~MapDataDto>}
   */
  getMap(query, options, callback) {
    options = Object.assign({
      path: '/api/lol/static-data/${region}/v1.2/languages',
      query: query,
      host: Region.GLOBAL.getHostUrl(),
      returnType: MapDataDto
    }, options);

    return super.request(options).execute(callback);
  }

  /**
   * @callback module:LeagueWrapper/service~LolStaticDataService~getMasteries
   * @param {?Error} error
   * @param {module:LeagueWrapper/dto/lolStaticData~MasteryListDto} [data]
   */
  /**
   * @todo example
   * @param {Object} [query]
   * @param {string} [query.locale] // @todo: enum
   * @param {string} [query.version]
   * @param {MasteryData} [query.masteryListData]
   * @param {?module:LeagueWrapper/options~RequestOptions} [options]
   * @param {module:LeagueWrapper/service~LolStaticDataService~getMasteries} [callback]
   *
   * @return {Promise.<module:LeagueWrapper/dto/lolStaticData~MasteryListDto>}
   */
  getMasteries(query, options, callback) {
    options = Object.assign({
      path: '/api/lol/static-data/${region}/v1.2/mastery',
      query: query,
      host: Region.GLOBAL.getHostUrl(),
      returnType: MasteryListDto
    }, options);

    return super.request(options).execute(callback);
  }

  /**
   * @callback module:LeagueWrapper/service~LolStaticDataService~getMasteryById
   * @param {?Error} error
   * @param {module:LeagueWrapper/dto/lolStaticData~MasteryDto} [data]
   */
  /**
   * @todo example
   * @param {number} id
   * @param {Object} [query]
   * @param {string} [query.locale] // @todo: enum
   * @param {string} [query.version]
   * @param {MasteryData} [query.masteryData]
   * @param {?module:LeagueWrapper/options~RequestOptions} [options]
   * @param {module:LeagueWrapper/service~LolStaticDataService~getMasteryById} [callback]
   *
   * @return {Promise.<module:LeagueWrapper/dto/lolStaticData~MasteryDto>}
   */
  getMasteryById(id, query, options, callback) {
    options = Object.assign({
      path: '/api/lol/static-data/${region}/v1.2/mastery/${id}',
      params: {
        id: id
      },
      query: query,
      host: Region.GLOBAL.getHostUrl(),
      returnType: MasteryDto
    }, options);

    return super.request(options).execute(callback);
  }

  /**
   * @callback module:LeagueWrapper/service~LolStaticDataService~getRealm
   * @param {?Error} error
   * @param {module:LeagueWrapper/dto/lolStaticData~RealmDto} [data]
   */
  /**
   * @todo example
   * @param {?module:LeagueWrapper/options~RequestOptions} [options]
   * @param {module:LeagueWrapper/service~LolStaticDataService~getRealm} [callback]
   *
   * @return {Promise.<module:LeagueWrapper/dto/lolStaticData~RealmDto>}
   */
  getRealm(options, callback) {
    options = Object.assign({
      path: '/api/lol/static-data/${region}/v1.2/realm',
      host: Region.GLOBAL.getHostUrl(),
      returnType: RealmDto
    }, options);

    return super.request(options).execute(callback);
  }

  /**
   * @callback module:LeagueWrapper/service~LolStaticDataService~getRunes
   * @param {?Error} error
   * @param {module:LeagueWrapper/dto/lolStaticData~RuneListDto} [data]
   */
  /**
   * @todo example
   * @param {Object} [query]
   * @param {string} [query.locale] // @todo: enum
   * @param {string} [query.version]
   * @param {RuneData} [query.runeListData]
   * @param {?module:LeagueWrapper/options~RequestOptions} [options]
   * @param {module:LeagueWrapper/service~LolStaticDataService~getRunes} [callback]
   *
   * @return {Promise.<module:LeagueWrapper/dto/lolStaticData~RuneListDto>}
   */
  getRunes(query, options, callback) {
    options = Object.assign({
      path: '/api/lol/static-data/${region}/v1.2/rune/',
      query: query,
      host: Region.GLOBAL.getHostUrl(),
      returnType: RuneListDto
    }, options);

    return super.request(options).execute(callback);
  }

  /**
   * @callback module:LeagueWrapper/service~LolStaticDataService~getRuneById
   * @param {?Error} error
   * @param {module:LeagueWrapper/dto/lolStaticData~RuneDto} [data]
   */
  /**
   * @todo example
   * @param {number} id
   * @param {Object} [query]
   * @param {string} [query.locale] // @todo: enum
   * @param {string} [query.version]
   * @param {RuneData} [query.runeData]
   * @param {?module:LeagueWrapper/options~RequestOptions} [options]
   * @param {module:LeagueWrapper/service~LolStaticDataService~getRuneById} [callback]
   *
   * @return {Promise.<module:LeagueWrapper/dto/lolStaticData~RuneDto>}
   */
  getRuneById(id, query, options, callback) {
    options = Object.assign({
      path: '/api/lol/static-data/${region}/v1.2/rune/${id}',
      params: {
        id: id
      },
      query: query,
      host: Region.GLOBAL.getHostUrl(),
      returnType: RuneDto
    }, options);

    return super.request(options).execute(callback);
  }

  /**
   * @callback module:LeagueWrapper/service~LolStaticDataService~getSummonerSpells
   * @param {?Error} error
   * @param {module:LeagueWrapper/dto/lolStaticData~SummonerSpellListDto} [data]
   */
  /**
   * @todo example
   * @param {Object} [query]
   * @param {string} [query.locale] // @todo: enum
   * @param {string} [query.version]
   * @param {boolean} [query.dataById]
   * @param {SpellData} [query.spellData]
   * @param {?module:LeagueWrapper/options~RequestOptions} [options]
   * @param {module:LeagueWrapper/service~LolStaticDataService~getSummonerSpells} [callback]
   *
   * @return {Promise.<module:LeagueWrapper/dto/lolStaticData~SummonerSpellListDto>}
   */
  getSummonerSpells(query, options, callback) {
    options = Object.assign({
      path: '/api/lol/static-data/${region}/v1.2/summoner-spell',
      query: query,
      host: Region.GLOBAL.getHostUrl(),
      returnType: SummonerSpellListDto
    }, options);

    return super.request(options).execute(callback);
  }

  /**
   * @callback module:LeagueWrapper/service~LolStaticDataService~getSummonerSpellById
   * @param {?Error} error
   * @param {module:LeagueWrapper/dto/lolStaticData~SummonerSpellDto} [data]
   */
  /**
   * @todo example
   * @param {number} id
   * @param {Object} [query]
   * @param {string} [query.locale] // @todo: enum
   * @param {string} [query.version]
   * @param {boolean} [query.dataById]
   * @param {SpellData} [query.spellData]
   * @param {?module:LeagueWrapper/options~RequestOptions} [options]
   * @param {module:LeagueWrapper/service~LolStaticDataService~getSummonerSpellById} [callback]
   *
   * @return {Promise.<module:LeagueWrapper/dto/lolStaticData~SummonerSpellDto>}
   */
  getSummonerSpellById(id, query, options, callback) {
    options = Object.assign({
      path: '/api/lol/static-data/${region}/v1.2/summoner-spell/${id}',
      params: {
        id: id
      },
      query: query,
      host: Region.GLOBAL.getHostUrl(),
      returnType: SummonerSpellDto
    }, options);

    return super.request(options).execute(callback);
  }

  /**
   * @callback module:LeagueWrapper/service~LolStaticDataService~getVersions
   * @param {?Error} error
   * @param {Array.<string>} [data]
   */
  /**
   * @todo example
   * @param {?module:LeagueWrapper/options~RequestOptions} [options]
   * @param {module:LeagueWrapper/service~LolStaticDataService~getVersions} [callback]
   *
   * @return {Promise.<Array.<string>>}
   */
  getVersions(options, callback) {
    options = Object.assign({
      path: '/api/lol/static-data/${region}/v1.2/versions',
      host: Region.GLOBAL.getHostUrl(),
      returnType: [String]
    }, options);

    return super.request(options).execute(callback);
  }
}

exports = module.exports = LolStaticDataService;
