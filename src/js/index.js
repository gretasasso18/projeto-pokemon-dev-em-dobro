/* 
OBJETIVO 1- CLICAR NA SETA AVANÇAR= 
MUDA O CARTÃO DA LISTA (passar de uma lista <li> para outra)
    -passo 1- pegar elemento HTML da seta avançar
    - passo 2- identificar o clique do usuário na seta avançar
    - passo 3- deve aparecer o proximo cartão da lista
    - passo 4- mostrar apenas o cartão SELECIONADO e esconder
     os outros
*/

/* -passo 1- pegar elemento HTML da seta avançar */
const avancar /*id botao avançar*/ = document.getElementById('avancar');
const voltar /*id botao voltar*/ = document.getElementById('voltar');
const cartoes = document.querySelectorAll('.cartao');
let cartaoAtual = 0;

function escondeCartaoSelecionado(){
    // - passo 4- mostrar apenas o cartão SELECIONADO e esconder os outros
    const cartaoSelecionado = document.querySelector('.selecionado');
    cartaoSelecionado.classList.remove('selecionado');
}

function mostrarCartao(indiceCartao){
    cartoes[indiceCartao].classList.add('selecionado');
    /*cartão com a classe SELECIONADO fica na frente */
}

//passo 2- identificar o clique do usuário na seta avançar
avancar.addEventListener('click', function () { //passo 3- deve aparecer o proximo cartão da lista
    if(cartaoAtual === cartoes.length - 1) return;

    escondeCartaoSelecionado();

    cartaoAtual++;
    mostrarCartao(cartaoAtual);
});

voltar.addEventListener('click', function () { 
    if(cartaoAtual === 0) return; 

    escondeCartaoSelecionado();

    cartaoAtual--;
    mostrarCartao(cartaoAtual);
});

 