!function horas (){
    let agora = new Date;
    let hora = agora.gethours();
    let min = agora.getMinutes();

    let mostrar = document.getElementById('resultado');

    mostrar.innerHTML = `<P>Agora são ${hora} horas e ${min} minutos.<p>`;
    if(min >= 0 && min <=10){
        
    }
}

