var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
        orm.selectAll("burgers", function(res) {
          cb(res);
        });
      },
}

modules.exports = burger;