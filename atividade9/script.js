let mostrar = document.getElementById('resultado');
let tentativa = document.getElementById('resultado');
let computador = 0;
let jogador = 0;
let cont_sorte = 0;

let min = 1;
let max= 100;
let dif = max - min;
let aleatorio = Math.random();
computador = min + Math.trunc(dif * aleatorio);

console.log(computador)

function jogar(){
    if(onclick="jogar()"){
    cont_sorte++;
    jogador = Number(prompt("Qual é o seu palpite?"));

    mostrar.innerHTML = `<p>Você precisou de ${cont_sorte}</p>`;
}

    if(jogador < computador){
        mostrar.innerHTML = `<p>Você pensou em ${jogador}, meu número é <b>MAIOR</b>!</p>`;
    }else if(jogador > computador){
        mostrar.innerHTML = `<p>Você pensou em ${jogador}, meu número é <b>MENOR</b>!</p>`
    }else if (jogador == computador){
        mostrar.innerHTML = `<p>PARABÉNS!!!! O número é esse (0<>0)<b>${computador}</b>!<`
    }
}