function maiormenor(){
    let numero;
    let numero2;

    numero = prompt("Informe o primeiro número")
    numero2 = prompt("Informe o número que você quer comparar")

    if(numero > numero2){
        alert("O " + numero + " é maior que " + numero2 + "!")
    }else{
        alert("O " + numero + " é menor que " + numero2 + "!")
    }
}