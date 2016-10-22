'use strict';

const util = require('util');

const api = require('../index.js');

api.champion.getAll({
  freeToPlay: true
}).then(function(champions) {
  util.log(champions);
});

api.champion.getById(1).then(function(champion) {
  util.log(champion);
});
