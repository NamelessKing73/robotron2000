robotron.onclick = (evento) => {
    var nome = prompt('Olá, humano! Eu sou Robotron 2000. Qual o seu nome?');
    alert('Bem-vindo a Terra 2, ' + nome + '. Vamos lutar lado a lado.');
    console.log(evento);
}

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode);
        atualizaEstatiscas(evento.target.dataset.peca);
    });
});

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector('[data-contador]');

    if(operacao === "-") {
        peca.value = parseInt(peca.value) - 1;
        if (peca.value <= 0) {
            peca.value = 0;
        }
    } else {
        peca.value = parseInt(peca.value) + 1;
        if (peca.value >= 99) {
            peca.value = 99;
        }
    }
}

function atualizaEstatiscas(peca) {
    estatisticas.forEach( (elemento) => {
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    });
}