const form = document.querySelector('.form');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const inputPeso = document.querySelector('#peso');
    const inputAltura = document.querySelector('#altura');
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    const imc = calculandoImc(peso, altura);
    const msg = `Seu indidice de massa corporal é ${imc}`;

    setResultados(msg, true);

    if(!peso) {
        setResultados('Peso invalido', false);
    }

    if(!altura) {
        setResultados('Altura invalida', false);
    }
});

function calculandoImc(peso, altura) {
    const imc = peso / altura ** 2;

    return imc.toFixed(1);
}

function criandoP() {
    const p = document.createElement('p');

    return p;
}

function setResultados(msg, isValid) {
    const resultado = document.querySelector('.resultados');
    resultado.innerHTML = '';

    const p = criandoP();
    p.innerHTML += msg;
    if(isValid) {
        p.classList.add('bg-gree');
    }else {
        p.classList.add('bg-red');
    }
    resultado.appendChild(p);
}