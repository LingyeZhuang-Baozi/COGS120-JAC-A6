
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
// Example route
// var user = require('./routes/user');

// Juliet: Add route to forum
var forum = require('./routes/forum');
var upload = require('./routes/upload');
var library = require('./routes/library');
var read = require('./routes/read');
var login = require('./routes/login');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', index.view);
// Example route
// app.get('/users', user.list);
app.get('/forum', forum.view);
app.get('/forum/question', forum.question);
app.get('/upload', upload.view);
app.get('/library', library.viewReadings);
app.get('/index/read', read.viewWords);
app.get('/login', login.loginPage);
app.get('/register', login.registeration);
app.get('/upload_url', upload.url);
app.get('/upload_scan', upload.scan);
app.get('/upload_file', upload.file);
app.get('/upload_success', upload.success)

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
