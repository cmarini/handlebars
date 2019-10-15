var conn = require('./connection.js');

module.exports = {
    selectAll: (table, cb) => {
        var query = "SELECT * FROM ??";
        conn.connect((err) => {
            if (err) throw err;
            conn.query(query, [table], (err, result, fields) => {
                if (err) throw err;
                console.log(result);
                cb(result);
            });
        });
    },

    insertOne: (table, field, name, cb) => {
        var query = `INSERT INTO ?? (??) VALUES(??)`;
        conn.connect((err) => {
            if (err) throw err;
            conn.query(query, [table, field, name], (err, result, fields) => {
                if (err) throw err;
                console.log(result);
                cb(result);
            });
        });

    },

    updateOne: (table, field, value, whereField, whereVal, cb) => {
        var query = `UPDATE ?? SET ??=?? WHERE ??=??`;
        conn.connect((err) => {
            if (err) throw err;
            conn.query(query, [table, field, value, whereField, whereVal], (err, result, fields) => {
                if (err) throw err;
                console.log(result);
                cb(result);
            });
        });

    },
}