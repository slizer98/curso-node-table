const fs = require('fs');
const { resolve } = require('path/posix');
const colors = require('colors');
const crearArchivo = async(base = 1, lista = false, hasta = 10) =>{
    try{
        
        let salida = '';
        let consola = '';

        for(let i=1; i<=hasta; i++){
            salida +=`${base} X ${i} = ${base * i}\n`;
            consola +=`${base} ${'X'.green} ${i} ${'='.green} ${colors.blue(base * i)}\n`;
        }

        if(lista){
            console.log('================'.green);
            console.log(`   TABLA DEL ${base}`.bgGreen);
            console.log('================'.green);
            console.log(consola);
        }
    
        fs.writeFileSync(`./tablas-txt/tabla-${base}.txt`, salida);
        return`tabla-${base}.txt creada correctamente`.rainbow;
    } catch(err){
        throw err;
    }

}
module.exports = {
    crearArchivo
}