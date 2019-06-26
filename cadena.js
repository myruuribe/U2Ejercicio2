//Aldair Arriola Sanchez
//Sharon Michel Uribe Davalos
function palindromo(string){
    var palabra= string.split('');
    var original= string;

    string= " ";

    for(var i= palabra.length-1;i >=0; i--){
        string += palabra[i];
    }
    var resultado = original.localeCompare(string.substring(1,string.length));
    if(resultado == 0){
        return "es palindromo";
    }
    else{
        return "no es palindromo";
    }
}

function cuentapal(cadena){
    var palabras= cadena.split(' ');
    var n = 0;
    for(var i= palabras.length-1;i >=0; i--){
        n++;
    }

    return "numero de palabras = " + n;

}

function cuentalet(cadena){
    var letras= cadena.split('');
    var n = 0;
    for(var i= letras.length-1;i >=0; i--){
         n++;
         
         if(letras[i]==" "){
            n--;
         }
    }

    return "numero de letras = " + n;

}

function cuentavocales(cadena){
    var vocales= cadena.split('');
    var n = 0;

      for(var i= vocales.length-1;i >=0; i--){
         
        if(vocales[i]=="a" || vocales[i]=="A" || vocales[i]=="e" || vocales[i]=="E" || vocales[i]=="i" ||
        vocales[i]=="I" || vocales[i]=="o" || vocales[i]=="O" || vocales[i]=="u" || vocales[i]=="U"){
            n++;
         }
    }

    return "numero de vocales = " + n;

}

function cuentaconsonantes(cadena){
    var vocales= cadena.split('');
    var n = 0;

      for(var i= vocales.length-1;i >=0; i--){
         n++;
        if(vocales[i]=="a" || vocales[i]=="A" || vocales[i]=="e" || vocales[i]=="E" || vocales[i]=="i" ||
        vocales[i]=="I" || vocales[i]=="o" || vocales[i]=="O" || vocales[i]=="u" || vocales[i]=="U" || vocales[i]==" "){
            n--;
         }
    }

    return "numero de vocales = " + n;

}


module.exports.palindromo1 = palindromo;
module.exports.palabra2 = cuentapal;
module.exports.letras2= cuentalet;
module.exports.vocales2 = cuentavocales;
module.exports.consonantes2 = cuentaconsonantes;