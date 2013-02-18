var express;

express = require('express');

exports.routes = function(app) {

    app.use(express.static('assets'));

    app.engine('.html', require('ejs').__express);
    app.set('views', __dirname + '/views');
    app.set('view engine', 'html');


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
};
