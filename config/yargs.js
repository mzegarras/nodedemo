const opts = {
    base:{
        demand:true,
        alias: 'b'
        
    },
    limite:{
        alias: 'l',
        default:12
        
    }
}
const argv = require('yargs')
                .command('listar','comando para listar',opts)
                .command('crear','comando para crea',opts)
                .help()
                .argv;
module.exports={
    argv
}