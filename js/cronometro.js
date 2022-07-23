const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

iniciar.addEventListener('click', function() {
    clearTimeout(timer);

    function formataHoras(segundos) {
        const hora = new Date(segundos * 1000);

        return hora.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        });
    }

    timer = setInterval(function() {
        segundos++;

        relogio.innerHTML = formataHoras(segundos);
    }, 1000);
});

pausar.addEventListener('click', function() {
    clearTimeout(timer);
});

zerar.addEventListener('click', function() {
    clearTimeout(timer);
    segundos = 0;
    relogio.innerHTML = '00:00:00';
});