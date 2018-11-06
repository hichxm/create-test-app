#!/usr/bin/env node
const _path = require("path");

const minimist = require("minimist");
const git = require("simple-git");

let argv = minimist(process.argv)["_"];
let dirPath = _path.resolve(argv[2] || "./");

console.log(`Clone`);

git().silent(true)
    .clone("http://github.com/tunnckocore/gitclone", dirPath)
    .then(() => {
        console.log("it's okay ^^");
    });