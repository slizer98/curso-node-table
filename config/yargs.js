const argv = require('yargs')
            .option('b', {
                alias: 'base',
                demandOption: true,
                describe: 'Base del tabla',
                type: 'number'
            })
            .option('h',{
                alias: 'hasta',
                describe: 'Hasta que numero quieres la tabla',
                type: 'number',
                default: 10,
                demandCommand: false
            })
            .option('l',{
                alias: 'listar',
                describe: 'Listar tabla',
                type: 'boolean',
                default: false,
                demandCommand: false
            })
            
            .check((argv, options) => {
                if(isNaN(argv.b)){
                    throw 'El valor introducido no es un numero';
                }
                return true;
            })
            .argv;


module.exports = argv;