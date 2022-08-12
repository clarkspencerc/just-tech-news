const exphbs = require('express-handlebars'); 
const { append } = require('express/lib/response');
const hbs = exphbs.create({});
const routes = require('./controllers'); 

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars'); 