function contar(){
    let saida = document.getElementById('saida');

    let cont = 1
    while(cont <= 10){
        cont++;
        if(cont % 2){
        saida.innerHTML += `<p>&#x1F449 <mark>${cont}</p>`
    }
        saida.innerHTML += `<p>&#x1F449 ${cont}</p>`;
    }
    saida.innerHTML += `<p>&#x1F3C1</p>`;

    
}