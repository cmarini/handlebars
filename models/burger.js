var orm = require('../config/orm.js');

module.exports = {
    selectAll: (cb) => {
        orm.selectAll('burgers', (res) => {
            cb(res);
        });
    },
    addBurger: (name, cb) => {
        orm.insertOne('burgers', 'burger_name', name, (res) => {
            cb(res);
        });
    },
    devour: (burger_id, cb) => {
        orm.updateOne('burgers', 'devoured', 'true', "id", burger_id, (res) => {
            cb(res);
        });
    }
};