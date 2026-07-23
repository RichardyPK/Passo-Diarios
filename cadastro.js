const formulario = document.getElementById("cadastroForm");

formulario.addEventListener("submit", function(e){

e.preventDefault();

const senha = document.getElementById("senha").value;

const confirmar = document.getElementById("confirmar").value;

if(senha !== confirmar){

alert("As senhas não coincidem.");

return;

}

alert("Cadastro realizado com sucesso!");

window.location.href = "login.html";

});