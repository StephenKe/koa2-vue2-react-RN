/**
 * Created by Stephen on 17/5/19.
 */
"use strict"

// const babel = require('babel-register');
let koa = require('koa');
let app = new koa();
const convert = require('koa-convert');
let promise = require('bluebird');

app.use(convert(function *(next){
    var start = new Date;
    yield next;
    var ms = new Date - start;
    this.set('X-Response-Time', ms + 'ms');
    console.log(`X-Response-Time${ms}`);
}));

// logger

app.use(convert(function *(next){
    var start = new Date;
    yield next;
    var ms = new Date - start;
    console.log('%s %s - %s', this.method, this.url, ms);
}));

// response

app.use(convert(function *(){
    this.body = 'Hello World';
}));

app.listen(8002);
console.log('server run success in 8002');