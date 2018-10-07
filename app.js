
//requires
const {crearArchivo,imprimirTabla} = require("./mutiplicar/multiplicar");
const {argv} = require('./config/yargs')

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('Listar.....');
        imprimirTabla(argv.base,argv.limite)
        break;
    case 'crear':
        console.log('Crear.....');

        crearArchivo(argv.base,argv.limite).then(file=>{
            console.log(`demo ${file.green}`);
        })
        .catch(e=>console.log(e));

        break;

    default:
    console.log('Comando no reconocido.....');
        break;
}
