#!/usr/bin/env node

const program = require('commander')
const chalk = require('chalk')
const clip = require('clipboardy')

const log = console.log
const createPassword = require('./utils/createPassword') 
const savePassword = require('./utils/savePassword') 

program.version('1.0.0').description('Simple Password Generator')


program
    .option('-l, --length <number>', 'length of password', '8')
    .option('-s, --save', 'Save password to passwords.txt')
    .option('-nn, --no-numbers', 'Remove Numbers')
    .option('-ns, --no-symbols', 'Remove Symbols')
    .parse()

const { length, save, numbers, symbols} = program.opts()

const generatedPassword = createPassword(length, numbers, symbols)

if(save) {
    savePassword(generatedPassword)
 }

clip.writeSync(generatedPassword)

log(chalk.blue('Generated Password: ') + chalk.grey(generatedPassword))
log(chalk.yellow('Password Copied to Clipboard'))