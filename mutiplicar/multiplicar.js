
const fs = require('fs');
const colors = require('colors');

let imprimirTabla = (base,limite = 10) =>{
    console.log('==================='.green);
    console.log(`${base} to ${limite}`.green);
    console.log('==================='.green);
    for(let index=1; index<=limite;index++){
        console.log(`${index} * ${base} = ${index * base}`);
    }
}

let crearArchivo = (base,limite=10) => {

    return new Promise((resolve,reject)=>{

        if(!Number(base)){
            reject('No es número');
            return;
        }

        let data  = ''

        for (let index = 0; index <=limite; index++) {
            data += `${index} * ${base} = ${index*base}\n`;
            
        }

        let nombreArchivo = `tablas/archivo${base}.txt`;

        fs.writeFile(nombreArchivo, data, (err) => {
            
            if (err) 
                reject(err);
            else
                resolve(`archivo${base}.txt`);
        });


    });


    
    //return nombreArchivo;

}

module.exports = {
    crearArchivo,
    imprimirTabla
}