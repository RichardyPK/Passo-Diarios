const tema = document.getElementById("tema");

tema.addEventListener("change",()=>{

    document.body.classList.toggle("dark");

});

const notificacao = document.getElementById("notificacao");

notificacao.addEventListener("change",()=>{

    if(notificacao.checked){

        alert("Notificações ativadas.");

    }else{

        alert("Notificações desativadas.");

    }

});

const opcao = document.querySelectorAll(".opcao");

opcao.forEach(item=>{

    item.addEventListener("click",()=>{

        const texto = item.querySelector("span").innerText;

        if(texto!="Modo Escuro" && texto!="Notificações"){

            alert("Abrindo " + texto);

        }

    });

});