#!/usr/bin/env node

const path = require('path')
const sao = require('sao')
const minimist = require('minimist')

const argv = minimist(process.argv.slice(2))
// In a custom directory or current directory
const targetPath = path.resolve(argv._[0] || '.')

console.log(targetPath);

console.log(`> Generating Discord.json project in ${targetPath}`)

sao({
    repo: "dotOverflow/discord.json",
    targetPath
}).catch(err => {
  console.error(err.name === 'SAOError' ? err.message : err.stack)
  process.exit(1)
})