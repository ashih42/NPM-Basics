#!/usr/bin/env node

const bcrypt = require('bcrypt');
const colors = require('colors');

const saltRounds = 10;
let unsecuredPlainTextPassword = 'password';

bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(unsecuredPlainTextPassword, salt, function(err, hash) {
        console.log(hash.green);
    });
});

