var express = require('express');
var burger = require('../models/burger.js')

var router = express.Router();

router.get('/', function (req, res, next) {
    burger.selectAll( (data) => {
        res.send("HOME");
    });
});

router.post('/api/addBurger', (req, res, next) => {
    burger.addBurger(req.body.name, (data) => {
        if (data.changedRows === 0) {
            return res.status(404).end();
        }
        res.status(202).end();
    });
});
router.put('/api/devour/:id', (req, res, next) => {
    burger.devour(req.params.id, (data) => {
        if (data.changedRows === 0) {
            return res.status(404).end();
        }
        res.status(202).end();
    });
});

module.exports = router;