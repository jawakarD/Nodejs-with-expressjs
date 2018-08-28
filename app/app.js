const express = require('express');
const dataFile = require('./data/data.json');
var app = express();
const reload = require('reload');

app.set('port',process.env.PORT || 3000);
app.set('appData',dataFile);
app.set('view engine', 'ejs');
app.set('views','app/views');
app.locals.siteTitle = "My Meetups";
app.locals.allSpeakers = dataFile.speakers;

app.use(require('./routes/index'));
app.use(require('./routes/speakers'));
app.use(require('./routes/feedback'));
app.use(require('./routes/api'));
app.use(require('./routes/chat'));
app.use(express.static('app/public'));

var server = app.listen(app.get('port'),()=>{
    console.log("http listening on port' "+app.get('port'));
 });



reload(server,app)
