function horas(){
    let agora = new Date;
    let hora = agora.getHours();
    let min = agora.getMinutes();
    let mostrar = document.getElementById('resultado');
    
    mostrar.innerHTML = `<p>Agora são ${hora} horas e ${min} minutos.<p>`;

    
    if(min >= 0 && min <=40){
        
        const minhaImagem = document.getElementById('meu-id');
        minhaImagem.src = 'caminho/para/nova-imagem.jpg';
        ;
    }
}

