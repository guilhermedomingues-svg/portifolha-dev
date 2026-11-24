let isolado = 0;
let inscritos = 0;
let equipes=0;


function jogadores(){
    inscritos++;
    equipes = Math.floor(inscritos / 3)
    isolado =(inscritos % 3)

    let mostrar = document.getElementById('resultado');
    mostrar.innerHTML += `<p>vai dar ${equipes}</p>`
}