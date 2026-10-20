function estacao(){
    let mes = prompt("Digete o mês por extenso (ex: Setembro):")
    let mostrar = document.getElementById('resultado');

    mes = mes.toUpperCase();

    console.log(mes);

    if(mes == 'DEZEMBRO' || mes == 'JANEIRO' || mes == 'FEVEREIRO'){
    mostrar.innerHTML = `<p>ESTAMOS NO VERÃO!!!!!!</p>`
    }

    if(mes == 'MARÇO' || mes == 'ABRIL' || mes == 'MAIO'){
    mostrar.innerHTML = `<p>ESTAMOS NO OUTONO!!!!!!</p>`
    }

    if(mes == 'JUNHO' || mes == 'JULHO' || mes == 'AGOSTO'){
    mostrar.innerHTML = `<p>ESTAMOS NO INVERNO!!!!!!</p>`
    }

    if(mes == 'SETEMBRO' || mes == 'OUTUBRO' || mes == 'NOVEMBRO'){
    mostrar.innerHTML = `<p>ESTAMOS NO PRIMAVERA !!!!!!</p>`
    }
}