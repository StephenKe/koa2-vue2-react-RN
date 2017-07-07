/**
 * Created by sinowinner on 17/5/23.
 */
"use strict"

let Mock = require('mockjs');

function activePassword() {
    return Mock.mock('@natural');
}

module.exports = {
    email: Mock.mock('@email'),
    image: Mock.mock('@image'),
    name: Mock.mock('@name'),
    text: Mock.mock('@text'),
    color: Mock.mock('@color'),
    number: activePassword
}