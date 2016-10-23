'use strict';

class QueueTypeData {
  /**
   * @param {string} gameQueueConfigId
   * @param {number} queueType
   * @param {string} name
   * @param {boolean} [deprecated]
   */
  constructor(gameQueueConfigId, queueType, name, deprecated) {
    this.gameQueueConfigId = gameQueueConfigId;
    this.queueType = queueType;
    this.name = name;
    this.deprecated = deprecated || false;
  }
  getQueryString() {
    return this.gameQueueConfigId;
  }
}

exports = module.exports = QueueTypeData;
