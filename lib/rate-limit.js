'use strict';

/**
 * @class
 */
class RateLimit {
  /**
   * @param {number} requests - number of requests per interval
   * @param {number} interval - interval in seconds
   * @param {boolean} [allowBursts=true] - use all available requests at once when the limit resets
   */
  constructor(requests, interval, allowBursts) {
    this.interval = interval * 1000;
    this._allowBursts = typeof allowBursts !== 'undefined' ? allowBursts : true;
    this._maxRate = this._allowBursts ? requests : requests / this.interval;
    this._count = 0;
    this._start = new Date().getTime();
    this._queue = [];
  }

  /**
   * @return {Promise}
   */
  check() {
    const self = this;
    return new Promise(function(resolve) {
      self._process(resolve);
    });
  }

  /**
   * @private
   * @param {function} [fn]
   */
  _process(fn) {
    const now = new Date().getTime();
    const elapsed = now - this._start;

    if (elapsed > this.interval) {
      this._count = 0;
      this._start = now;
    }

    const rate = this._count / (this._allowBursts ? 1 : elapsed);

    if (rate < this._maxRate) {
      if (fn) {
        this._count++;
        return fn();
      } else if (this._queue.length !== 0) {
        this._count++;
        const resolve = this._queue.shift();
        return resolve();
      }
    } else if (fn) {
      this._queue.push(fn);
    }

    const self = this;

    setTimeout(function () {
      self._process();
    }, 1 / this._maxRate); // @todo: Improve value
  }

  /**
   * @param {RateLimit[]} rateLimits
   */
  static all(rateLimits) {
    return new Promise(function(resolve) {
      if (rateLimits.length === 0) {
        return resolve();
      }
      let last;
      rateLimits.sort(compare);

      for (let i = 0; i < rateLimits.length; i++) {
        const rateLimit = rateLimits[i];
        if (last) {
          last = last.then(function() {
            return rateLimit.check();
          });
        } else {
          last = rateLimit.check();
        }
      }

      last.then(function() {
        return resolve();
      });
    });
  }

  /**
   * @param {number} count
   * @param {boolean} [reset]
   * @protected
   */
  _update(count, reset) {
    this._count = count;
    if (reset) {
      this._start = new Date().getTime();
    }
  }

  /**
   * @param {number} seconds
   * @protected
   */
  _retryAfter(seconds) {
    this._start = new Date().getTime() + seconds * 1000 - this.interval;
  }
}

/**
 * @param {RateLimit} a
 * @param {RateLimit} b
 */
function compare(a, b) {
  // @todo: check if interval is best sorting parameter
  return b.interval - a.interval;
}

exports = module.exports = RateLimit;
