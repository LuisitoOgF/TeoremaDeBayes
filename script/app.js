function sumar(_valor) {
    var total = 0;
    var boton = document.getElementById('btn1');
    var boton2 = document.getElementById('btn2');

    valor = parseFloat(_valor);
    total = document.getElementById('suma').innerHTML;
    total = (total == null || total == undefined || total == "") ? 0 : total;
    total = (parseFloat(total) + parseFloat(valor));
    if (total == 1) {
        console.log("Tienes que tener el 1%");

        boton.disabled = false;
        boton2.disabled = false;
    }
    document.getElementById('suma').innerHTML = total;
}
function calcular(color) {
    if(color=="verde"){
        document.getElementById('msj').innerHTML='=Pr(Ai/B)';
        document.getElementById('msj1').innerHTML='=Pr(Ai/B)';
        document.getElementById('msj2').innerHTML='=Pr(Ai/B)';
        document.getElementById('msj3').innerHTML='=Pr(Ai/B)';
    }else{
        document.getElementById('msj').innerHTML='=Pr(Ai/noB)';
        document.getElementById('msj1').innerHTML='=Pr(Ai/noB)';
        document.getElementById('msj2').innerHTML='=Pr(Ai/noB)';
        document.getElementById('msj3').innerHTML='=Pr(Ai/noB)';
    }
    var Da1 = parseFloat(document.getElementById('ValA1').value);
    var Da2 = parseFloat(document.getElementById('ValA2').value);
    var Da3 = parseFloat(document.getElementById('ValA3').value);
    var Da4 = parseFloat(document.getElementById('ValA4').value);

    var ba1 = parseFloat(document.getElementById('ValB1').value);
    var ba2 = parseFloat(document.getElementById('ValB2').value);
    var ba3 = parseFloat(document.getElementById('ValB3').value);
    var ba4 = parseFloat(document.getElementById('ValB4').value);

    var ValTotal=(Da1*ba1)+(Da2*ba2)+(Da3*ba3)+(Da4*ba4);
    
    document.getElementById('Res1').value = (Da1 * ba1) / ValTotal;
    document.getElementById('Res2').value = (Da2 * ba2) / ValTotal;
    document.getElementById('Res3').value = (Da3 * ba3) / ValTotal;
    document.getElementById('Res4').value = (Da4 * ba4) / ValTotal;
    console.log(ValTotal);

}