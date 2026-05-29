element.classList.add("riego");

//es como decir, regar cada X días
const flores = {
    corona: 3,
    duranta: 2,
    rosa: 5,
    pervinca: 1,
    capuchina: 1,
    ruda: 2,
    trompillo: 1,
    jazmin: 1,
    pascua: 2,
    bigotillo: 2
};

function calcularRiego() {

    const flor = document.getElementById("flor").value;

    const diasRiego = flores[flor];

    let hoy = new Date();

    let resultado = "";

    for(let i = 1; i <= 5; i++) {

        let fecha = new Date();

        fecha.setDate(hoy.getDate() + (diasRiego * i));

        resultado += `
        <p>Riego ${i}: ${fecha.toLocaleDateString()}</p>
        `;
    }

    document.getElementById("resultado").innerHTML = resultado;
}