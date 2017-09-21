/**
 * Created by Stephen on 17/5/19.
 */
"use strict"

// const babel = require('babel-register');
let fs = require('fs');
let koa = require('koa');
let Router = require('koa-router');
let mock = require('./mock_data');
let app = new koa();
let router = new Router();
const convert = require('koa-convert');
let cors = require('koa-cors');
let serve = require('koa-static-server');

app.use(cors());

if (process.env.NODE_ENV == 'production' || process.env.NODE_ENV == 'test') {
    app.use(serve({rootDir: __dirname + '/client/dist/static', maxage: 30 * 24 * 60 * 60 * 1000, gzip: true, rootPath: '/static'}));
} else {
    app.use(serve({rootDir: __dirname + '/client/dist/static', maxage: 30 * 24 * 60 * 60 * 1000, gzip: true, rootPath: '/static'}));
}

let password = mock.number();
setInterval(() => {
  password = mock.number();
}, 24 * 3600 * 1000)

// let promise = require('bluebird');

// app.use(convert(function *(next){
//     var start = new Date;
//     yield next;
//     var ms = new Date - start;
//     this.set('X-Response-Time', ms + 'ms');
//     console.log(`X-Response-Time${ms}`);
// }));
//
// // logger
//
// app.use(convert(function *(next){
//     var start = new Date;
//     yield next;
//     var ms = new Date - start;
//     console.log('%s %s - %s', this.method, this.url, ms);
// }));

// app.use(convert(function *(){
//     console.log(this.url)
//
// }));
router
    .get('/', function (ctx, next) {
        let homePath = process.env.NODE_ENV === 'development'? '/client/index.html' : '/client/dist/index.html';
        let homeHtml = fs.readFileSync(__dirname + homePath);
        ctx.body = homeHtml.toString();
    })
    .get('/api/text', function (ctx, next) {
        ctx.body = mock.text;
    })
    .get('/api/email', function (ctx, next) {
        ctx.body = mock.email;
    })
    .get('/api/color', function (ctx, next) {
        ctx.body = mock.color;
    })
    .get('/api/name', function (ctx, next) {
        ctx.body = mock.name;
    })
    .get('/api/image', function (ctx, next) {
        ctx.body = mock.image;
    })
    .get('/api/daddy/:id', function (ctx, next) {
        let req = ctx.request.url;
        let reqPassword = req.slice(req.lastIndexOf('/') + 1);
        if (reqPassword == 'whosyourdaddy') {
          ctx.body = password;
        }
    })
    .get('/api/password/:id', function (ctx, next) {
        let req = ctx.request.url;
        let reqPassword = req.slice(req.lastIndexOf('/') + 1);
        if (reqPassword == password) {
          // app.use(serve({rootDir: __dirname + '/app/build/static', maxage: 30 * 24 * 60 * 60 * 1000, gzip: true, rootPath: '/static'}));
          let appPath = process.env.NODE_ENV === 'development'? '/app/public/index.html' : '/app/build/index.html';
          let appHtml = fs.readFileSync(__dirname + appPath);
          ctx.body = appHtml.toString();
        } else {
          ctx.body = false;
        }
    });

app.use(router.routes());

app.listen(80);
console.log('server run success in 80');