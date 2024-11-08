const x = document.querySelector('#num1');
const y = document.querySelector('#num2');
const resultado = document.querySelector('#resultado')

function somar(){
    resultado.textContent = Number(x.value) + Number(y.value);
}

function subtrair(){
    resultado.textContent = Number(x.value) - Number(y.value);
}

function multiplicar(){
    resultado.textContent = Number(x.value) * Number(y.value);
}

function dividir(){
    resultado.textContent = Number(x.value) / Number(y.value);
}
