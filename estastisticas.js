const ctx = document.getElementById('graficoPassos');

new Chart(ctx, {

type: 'bar',

data: {

labels: [

'Seg',
'Ter',
'Qua',
'Qui',
'Sex',
'Sáb',
'Dom'

],

datasets: [{

label:'Passos',

data:[

6500,
7800,
9200,
8400,
10100,
11500,
8425

],

backgroundColor:[
'#2F80ED',
'#2F80ED',
'#2F80ED',
'#2F80ED',
'#27AE60',
'#27AE60',
'#2F80ED'
]

}]

},

options:{

responsive:true,

plugins:{

legend:{
display:false
}

}

}

});
document.querySelector(".voltar").addEventListener("click", () => {
    window.location.href = "index.html";
});