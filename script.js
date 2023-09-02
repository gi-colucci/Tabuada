var valor = document.querySelector("div.container input")
var tabuada = document.querySelector("div.container div.tabuada")
var btnlim = document.getElementById("btlim")
const calc = document.getElementById("btCalc")

calc.addEventListener("click", () => {
    if (Number(valor.value) < 1 || Number(valor.value) > 10) {
        alert("Insira um número válido, entre 1 e 10!!")
    } else {
        for (i = 1; i <= 10; i++) {
            var calc = String(i) + " x " + valor.value + " = " + i * Number(valor.value);
            var resultado = document.createElement("p");
            resultado.innerText = calc
            tabuada.appendChild(resultado)
        }
    }
});

function limpar() {
    tabuada.innerHTML = "";
}