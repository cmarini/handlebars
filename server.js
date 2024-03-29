var express = require('express');
var app = express();

var PORT = process.env.PORT || 3000;

// app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const exphbs = require('express-handlebars');

// app.engine('handlebars', exphbs({defaultLayout: 'main'}));
// app.set('view engine', 'handlebars');

const routes = require('./controllers/burgers_controller.js');

app.use(routes);

app.listen(PORT, () => {
    console.log(`App listening on port: ${PORT}`);
})