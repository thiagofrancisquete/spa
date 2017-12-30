var http = require('http');

<<<<<<< HEAD
var createRouter = function (port) {
    var api = {};
    var routes = {};
    var methods = ['GET', 'POST', 'OPTIONS'];
    var interceptors = [];

    methods.forEach(function (method) {
        routes[method] = {};
        api[method.toLowerCase()] = function (path, fn) {
=======
var createRouter = function(port){
    var api = {};
    var routes = {};
    var methods = ['GET','POST'];

    methods.forEach(function (method){
        routes[method] = {};
        api[method.toLocaleLowerCase()] = function(path, fn){
>>>>>>> 47ae46d87ca913c22afe31c1b8b2816523ba3f87
            routes[method][path] = fn;
        };
    });

<<<<<<< HEAD
    api.interceptor = function (interceptor) {
        interceptors.push(interceptor);
    };

    var executeInterceptors = function (number, req, res) {
        var interceptor = interceptors[number];
        if (!interceptor) return;
        interceptor(req, res, function () {
            executeInterceptors(++number, req, res);
        });
    };

    var handleBody = function (req, res, next) {
        var body = [];
        req.on('data', function (chunk) {
            body.push(chunk);
        });
        req.on('end', function () {
            req.body = Buffer.concat(body).toString();
            next();
        });
    };

    http.createServer(function (req, res) {
        console.log(req.url);
        handleBody(req, res, function () {
            executeInterceptors(0, req, res);
            if (!routes[req.method][req.url]) {
                res.statusCode = 404;
                return res.end();
            }
            routes[req.method][req.url](req, res);
        });
    }).listen(port);

=======
    http.createServer(function (req, res) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        if (!routes[req.method][req.url]) return res.end();
        routes[req.method][req.url](req, res);
    }).listen(port);
    
>>>>>>> 47ae46d87ca913c22afe31c1b8b2816523ba3f87
    return api;
};

module.exports = createRouter;