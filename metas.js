let meta = 10000;
let passos = 0;

const campoMeta = document.getElementById("meta");
const barra = document.getElementById("barraProgresso");
const texto = document.getElementById("textoProgresso");

document.getElementById("salvar").onclick = () => {

    if(campoMeta.value != ""){

        meta = Number(campoMeta.value);

        atualizar();

        alert("Meta salva!");

    }

}

document.getElementById("mais").onclick = ()=>{

    passos +=100;

    atualizar();

}

document.getElementById("menos").onclick = ()=>{

    if(passos>=100){

        passos -=100;

        atualizar();

    }

}

function atualizar(){

    let porcentagem = (passos/meta)*100;

    if(porcentagem>100){

        porcentagem=100;

    }

    barra.style.width = porcentagem+"%";

    texto.innerHTML = passos + " / " + meta + " passos";

    if(passos>=meta){

        alert("🎉 Parabéns! Você atingiu sua meta diária!");

    }

}

atualizar();