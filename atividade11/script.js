function horas(){
    let agora = new Date;
    let hora = agora.getHours();
    let min = agora.getMinutes();
    let mostrar = document.getElementById('resultado');
    

    
    if(min >= 0 && min <=40){
        mostrar.innerHTML = `<p>Agora são ${hora} horas e ${min} minutos.<p>`;
        const minhaImagem = document.getElementById('meu-id');
        minhaImagem.src = 'caminho/para/nova-imagem.jpg';
        ;
    }
}

