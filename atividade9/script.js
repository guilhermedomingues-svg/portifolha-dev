let tentativa = document.getElementById('result');
let cont_sorte = 0;
let mostrar = document.getElementById('resultado');
let computador = 0;
let jogador = 0;

let min = 1;
let max= 100;
let dif = max - min;
let aleatorio = Math.random();

computador = min + Math.trunc(dif * aleatorio);

console.log(computador)


function jogar(){
    jogador = Number(prompt("Qual é o seu palpite?"));

    if(jogador < computador){
        mostrar.innerHTML = `<p>Você pensou em ${jogador}, meu número é <b>MAIOR</b>!</p>`;
    }else if(jogador > computador){
        mostrar.innerHTML = `<p>Você pensou em ${jogador}, meu número é <b>MENOR</b>!</p>`
    }else if (jogador == computador){
        mostrar.innerHTML = `<p>PARABÉNS!!!! O número é esse (0<>0)<b>${computador}</b>!<`
    }
    if(onclick="jogar()"){
        cont_sorte++;
        tentativa.innerHTML = `<p>Você precisou de ${cont_sorte}</p>`;
    }
}

