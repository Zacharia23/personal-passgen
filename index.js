const program = require('commander')

program.version('1.0.0').description('Simple Password Generator')


program
    .option('-l, --length <number>', 'length of password', '8')
    .option('-s, --save', 'Save password to passwords.txt')
    .option('-nn, --no-numbers', 'Remove Numbers')
    .option('-ns, --no-symbols', 'Remove Symbols')
    .parse()

const { length, save, numbers, symbols} = program.opts()

console.log(length, symbols)
