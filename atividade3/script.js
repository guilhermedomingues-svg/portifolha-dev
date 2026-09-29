function passa(){
    let materia;
    let nota1;
    let nota2;
    let resultado;

    alert("Use ponto >.<")
    materia = prompt("Informe a matéria")
    nota1 = Number(prompt("Informe a nota do primeiro trimestre."));
    nota2 = Number(prompt("Informe a nota do segundo trimestre."));
    
    resultado = 18.0 - (nota1 + nota2)

    if(nota1 + nota2 >= 18.0){
        alert("Parabéns!!! Você PASSOU em " + materia + "!")
    }else{
        alert("Você ainda não passou em " + materia + "! Ainda falta " + resultado.toFixed(1) + "!")
    }
}