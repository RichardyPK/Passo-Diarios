const cards = document.querySelectorAll(".card");

cards.forEach(card=>{

card.addEventListener("click",()=>{

const titulo = card.querySelector("h4").innerText;

alert(titulo);

});

});