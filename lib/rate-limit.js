'use strict';

/**
 * @class
 * @alias module:LeagueWrapper~RateLimit
 */
class RateLimit {
  /**
   * @param {number} size - maximum amount of tokens
   * @param {number} interval - fill interval in seconds
   */
  constructor(size, interval) {
    this.size = size;
    this.interval = interval;

    this._tokens = 0;
    this._reserved = 0;
    this._fillRate = this.size / this.interval;
    this._start = new Date().getTime();
    this._queue = [];
  }

  /**
   * @callback RateLimit~release - call when you can release
   */
  /**
   * @param {boolean} [queue=true] - queue the request if no tokens are available
   * @return {Promise<RateLimit~release>}
   */
  schedule(queue = true) {
    if (!(queue || this._areTokensAvailable())) {
      return Promise.reject();
    }
    const self = this;
    return new Promise(function(resolve) {
      self._queue.push(resolve);
      if (self._queue.length !== 0) {
        self._process(resolve);
      }
    });
  }

  /**
   * @private
   */
  _fill() {
    const now = new Date().getTime();
    if (this._tokens < this.size) {
      const elapsed = now - this._start;
      const add = elapsed / 1000 * this._fillRate;
      if (this._tokens + add < this.size) {
        this._tokens += add;
      } else {
        this._tokens = this.size;
      }
    }
    this._start = now;
  }

  _areTokensAvailable() {
    return this._tokens - this._reserved >= 1;
  }

  /**
   * @private
   */
  _process() {
    const self = this;
    this._fill();

    if (this._areTokensAvailable()) {
      this._reserved++;
      const resolve = this._queue.shift();
      return resolve(function release() {
        self._tokens--;
        self._reserved--;
      });
    }
    if (this._queue.length !== 0) {
      setTimeout(function() {
        self._process();
      }, 1 / this._fillRate);
    }
  }

  /**
   * @param {Array.<RateLimit>} rateLimits
   * @param {boolean} [queue=true] - queue the request if no tokens are available
   */
  static all(rateLimits, queue = true) {
    return new Promise(function(resolve) {
      Promise.all(rateLimits.map(function(rateLimit) {
        return rateLimit.schedule(queue);
      })).then(function(releaseFunctions) {
        return resolve(function() {
          releaseFunctions.forEach(function(release) {
            return release();
          });
        });
      });
    });
  }
}

exports = module.exports = RateLimit;
