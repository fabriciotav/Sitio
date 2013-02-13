var express = require('express');

var app = express();

app.use(express.static('assets'));

app.engine('.html', require('ejs').__express);

// Optional since express defaults to CWD/views

app.set('views', __dirname + '/views');

// Without this you would need to
// supply the extension to res.render()
// ex: res.render('users.html').
app.set('view engine', 'html');



app.all('*', function(req, res, next){
    if (!req.get('Origin')) return next();
    // use "*" here to accept any origin
    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type');
    // res.set('Access-Control-Allow-Max-Age', 3600);
    if ('OPTIONS' == req.method) return res.send(200);
    next();
});


app.get('/api/v1/resources', function(req, res) {
    res.send({
        id: 1,
        name: 'Fabricio'
    });
});


app.get('/', function( req, res) {
    res.render('index');
});

app.get('/acomodacoes', function( req, res) {
    res.render('acomodacoes');
});

app.get('/como-chegar', function( req, res) {
    res.render('como-chegar');
});

app.get('/contato', function( req, res) {
    res.render('contato');
});

app.get('/lazer', function( req, res) {
    res.render('lazer');
});

app.get('/reservas', function( req, res) {
    res.render('reservas');
});


app.listen(80);
console.log( "listen on port 80" );