const form = document.querySelector("form");

form.addEventListener("submit", function(event){

    event.preventDefault();

    const email = document.querySelector('input[type="email"]').value;
    const senha = document.querySelector('input[type="password"]').value;

    if(email === "" || senha === ""){

        alert("Preencha todos os campos.");
        return;

    }

    // Redireciona para a próxima página
    window.location.href = "index.html";
});