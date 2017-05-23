/**
 * Created by Stephen on 17/5/19.
 */
"use strict"

// const babel = require('babel-register');
let koa = require('koa');
let Router = require('koa-router');
let mock = require('./mock_data');
let app = new koa();
let router = new Router();
const convert = require('koa-convert');
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
    });

app.use(router.routes());

app.listen(8002);
console.log('server run success in 8002');