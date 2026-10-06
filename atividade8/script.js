let cont_sorte = 0;
let cont_azar = 0;

function sorte(){
    let min = 1;
    let max= 100;
    let dif = max - min;
    let aleatorio = Math.random();
    let num = min + Math.trunc(dif * aleatorio);
    if(num > 50){
        cont_sorte++;
        let mostrar = document.getElementById('resultado');
        mostrar.innerHTML = `<p>Sorte: ${cont_sorte}</p>
                            <p>Azar: ${cont_azar}</p>
                            <img src="../images/sorte 8.png">`;
    }else{
        cont_azar++;
        let mostrar = document.getElementById('resultado');
        mostrar.innerHTML = `<p>Sorte: ${cont_sorte}</p>
                            <p>Azar: ${cont_azar}</p>
                            <img src="../images/azar88.jpg">`;
    }
}