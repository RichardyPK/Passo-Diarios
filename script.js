let passos = 6420;

const meta = 10000;

const numero = document.getElementById("passos");

const barra = document.getElementById("barra");

const porcentagem = document.getElementById("porcentagem");

function atualizar(){

numero.innerHTML = passos.toLocaleString();

let progresso = (passos/meta)*100;

if(progresso>100){

progresso=100;

}

barra.style.width = progresso+"%";

porcentagem.innerHTML = Math.floor(progresso)+"%";

}

document.getElementById("addPassos").onclick=function(){

passos+=100;

atualizar();

}

atualizar();
