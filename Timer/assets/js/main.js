function main(){
    function criaHoraDosSegundos(segundos){
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        })
    }

    const timer = document.querySelector("#timer");
    let segundos = 0;
    let relogio;

    function iniciaRelogio(){
        relogio = setInterval(function() {
            segundos++;
            timer.innerHTML = criaHoraDosSegundos(segundos);
        }, 1000)
    }

    document.addEventListener('click', function(e) {
        const elemento = e.target;

        console.log(elemento)
        if (elemento.classList.contains('zerar')){
            clearInterval(relogio);
            timer.innerHTML = "00:00:00";
            segundos = 0;
        }

        if (elemento.classList.contains('iniciar')){
            timer.classList.remove('pausado');
            clearInterval(relogio);
            iniciaRelogio();
        }

        if (elemento.classList.contains('pausar')){
            clearInterval(relogio);
            timer.classList.add('pausado');
        }

    })
}

main();