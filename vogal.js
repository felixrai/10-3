function contaVogais() {
var texto = document.getElementById("idString").value;
var cont = 0;
texto = texto.toLowerCase();

for(var i = 0; i < texto.length; i ++) {
    if (texto.charAt(i)=="a" ||  texto.charAt(i)=="e" ||  texto.charAt(i)=="i" ||  texto.charAt(i)=="o" ||  texto.charAt(i)=="u"  ||  texto.charAt(i)=="á" ||  texto.charAt(i)=="é"  ||  texto.charAt(i)=="í"  ||  texto.charAt(i)=="ó"  ||  texto.charAt(i)=="ú"  ||  texto.charAt(i)=="â" ||  texto.charAt(i)=="ê"  ||  texto.charAt(i)=="ô" ) {
        cont++;
    }
}

document.getElementById("idTexto").innerHTML = "Número de vogais:" + cont;

}

