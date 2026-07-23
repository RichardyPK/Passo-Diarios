const itens = document.querySelectorAll(".item");

itens.forEach(item => {

    item.addEventListener("click", () => {

        const texto = item.querySelector("span").innerText;

        alert("Abrindo: " + texto);

    });

});

document.querySelector(".sair").addEventListener("click", ()=>{

    if(confirm("Deseja sair da conta?")){

        window.location.href="login.html";

    }

});