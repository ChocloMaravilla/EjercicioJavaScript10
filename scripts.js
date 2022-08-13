function cambiaForma(palabra = 'JALAR'){  
    const letra = 'A';
    const pal = palabra;  
    // console.log(pal.includes(letra) ? 'Si' : 'No');
    const result = pal.includes(letra);
    switch (result == true) {
        case true:
            resultado = palabra.replace(/A/g, "O");
            console.log(resultado);
            break;
    
        default:
            console.log("Esta palabra no contiene ninguna O")
            break;
    }
}
cambiaForma();
// -----------------------------------------------------------------------------------------------------------------------------------------------------------

function cambiaForma2(palabra2 = 'academia'){
    const parte = 'aca';
    const pal2 = palabra2;
    const resultado3 = pal2.includes(parte);

    if(resultado3 == true){
        console.log("academia si contine 'aca'.");
        cambiaForma2(palabra2 = 'escuela')
    }
    else{
        console.log("escuela no contiene 'aca'.")
    }
}
cambiaForma2();
// -----------------------------------------------------------------------------------------------------------------------------------------------------------

function hello(palabra3 = 'Hola'){
const parte2 = 'Hola'
const pal3 = palabra3;
const resultado3 = pal3.includes(parte2);
if(resultado3 == true){
    console.log('Bienvenido '.repeat(3));
}
}
hello();