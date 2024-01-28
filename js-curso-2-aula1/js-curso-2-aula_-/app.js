let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}



// let listaDeNumerosSorteados = [];
// let numeroLimite = 10;
// let numeroSecreto = gerarNumeroAleatorio();
// let tentativas = 1;

// function exibirTextoNaTela(tag, texto) {
//     let campo = document.querySelector(tag);
//     campo.innerHTML = texto;
//     responsiveVoice.speak(texto, 'Brazilian Portuguese Female' , {Rate: 1.2});
// }

// function exibirMensagemIncial() {
// exibirTextoNaTela('h1' , 'Jogo do número secreto');
// exibirTextoNaTela('p' , 'Escolha um número entre 1 e 10');
// }

// exibirMensagemIncial();

// function verificarChute() {
//     let chute = document.querySelector('input').value;
//     console.log(chute == numeroSecreto);

//     if (chute == numeroSecreto) {
//         exibirTextoNaTela('h1' , 'Acertou!');
//         let palavraTetativa = tentativas > 1 ? 'tentativas' : 'tentativa';
//         let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTetativa}!`;
//         exibirTextoNaTela('p' , mensagemTentativas);
//         document.getElementById('reiniciar').removeAttribute('disabled');
//     } else {
//         if (chute > numeroSecreto) {
//             exibirTextoNaTela('p' , 'O número secreto é menor');
//         } else {
//             exibirTextoNaTela('p', 'Onúmero secreto é maior');
//         }
//         //tentativa = tentativas + 1;
//         tentativas++;

//         limparCampo();
//     }

// }

// function gerarNumeroAleatorio() {
//     let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1 );
//     let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

//     if (quantidadeDeElementosNaLista == numeroLimite) {
//         listaDeNumerosSorteados = [];
//     }

//     if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
//         return gerarNumeroAleatorio();
//     } else {
//         listaDeNumerosSorteados.push(numeroEscolhido);
//         console.log(listaDeNumerosSorteados);
//         return numeroEscolhido;
//     }
// }

// function limparCampo() {
//     chute = document.querySelector('input');
//     chute.value = '';
// }

// function reiniciarJogo() {
//     numeroSecreto = gerarNumeroAleatorio();
//     limparCampo();
//     tentativas = 1;
//     exibirMensagemIncial();
//     document.getElementById('reiniciar').setAttribute('disabled' , true);
// }



// let listaDeNumerosSorteados = [];
// let numeroLimite = 10;
// let numeroSecreto = gerarNumeroAleatorio();
// let tentativas = 1;

// function exibirTextoNaTela(tag, texto) {
//     let campo = document.querySelector(tag);
//     campo.innerHTML = texto;
// }

// function exibirMensagemIncial() {
// exibirTextoNaTela('h1' , 'Jogo do número secreto');
// exibirTextoNaTela('p' , 'Escolha um número entre 1 e 10');
// }

// exibirMensagemIncial();

// function verificarChute() {
//     let chute = document.querySelector('input').value;
//     console.log(chute == numeroSecreto);

//     if (chute == numeroSecreto) {
//         exibirTextoNaTela('h1' , 'Acertou!');
//         let palavraTetativa = tentativas > 1 ? 'tentativas' : 'tentativa';
//         let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTetativa}!`;
//         exibirTextoNaTela('p' , mensagemTentativas);
//         document.getElementById('reiniciar').removeAttribute('disabled');
//     } else {
//         if (chute > numeroSecreto) {
//             exibirTextoNaTela('p' , 'O número secreto é menor');
//         } else {
//             exibirTextoNaTela('p', 'Onúmero secreto é maior');
//         }
//         //tentativa = tentativas + 1;
//         tentativas++;

//         limparCampo();
//     }

// }

// function gerarNumeroAleatorio() {
//     let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1 );
//     let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

//     if (quantidadeDeElementosNaLista == numeroLimite) {
//         listaDeNumerosSorteados = [];
//     }

//     if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
//         return gerarNumeroAleatorio();
//     } else {
//         listaDeNumerosSorteados.push(numeroEscolhido);
//         console.log(listaDeNumerosSorteados);
//         return numeroEscolhido;
//     }
// }

// function limparCampo() {
//     chute = document.querySelector('input');
//     chute.value = '';
// }

// function reiniciarJogo() {
//     numeroSecreto = gerarNumeroAleatorio();
//     limparCampo();
//     tentativas = 1;
//     exibirMensagemIncial();
//     document.getElementById('reiniciar').setAttribute('disabled' , true);
// }



// let listaDeNumerosSorteados = [];

// let numeroSecreto = gerarNumeroAleatorio();
// let tentativas = 1;

// function exibirTextoNaTela(tag, texto) {
//     let campo = document.querySelector(tag);
//     campo.innerHTML = texto;
// }

// function exibirMensagemIncial() {
// exibirTextoNaTela('h1' , 'Jogo do número secreto');
// exibirTextoNaTela('p' , 'Escolha um número entre 1 e 10');
// }

// exibirMensagemIncial();

// function verificarChute() {
//     let chute = document.querySelector('input').value;
//     console.log(chute == numeroSecreto);

//     if (chute == numeroSecreto) {
//         exibirTextoNaTela('h1' , 'Acertou!');
//         let palavraTetativa = tentativas > 1 ? 'tentativas' : 'tentativa';
//         let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTetativa}!`;
//         exibirTextoNaTela('p' , mensagemTentativas);
//         document.getElementById('reiniciar').removeAttribute('disabled');
//     } else {
//         if (chute > numeroSecreto) {
//             exibirTextoNaTela('p' , 'O número secreto é menor');
//         } else {
//             exibirTextoNaTela('p', 'Onúmero secreto é maior');
//         }
//         //tentativa = tentativas + 1;
//         tentativas++;

//         limparCampo();
//     }

// }

// function gerarNumeroAleatorio() {
//     let numeroEscolhido = parseInt(Math.random() * 4 + 1 );
//     if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
//         return gerarNumeroAleatorio();
//     } else {
//         listaDeNumerosSorteados.push(numeroEscolhido);
//         console.log(listaDeNumerosSorteados);
//         return numeroEscolhido;
//     }
// }

// function limparCampo() {
//     chute = document.querySelector('input');
//     chute.value = '';
// }

// function reiniciarJogo() {
//     numeroSecreto = gerarNumeroAleatorio();
//     limparCampo();
//     tentativas = 1;
//     exibirMensagemIncial();
//     document.getElementById('reiniciar').setAttribute('disabled' , true);
// }



// let numeroSecreto = gerarNumeroAleatorio();
// let tentativas = 1;

// function exibirTextoNaTela(tag, texto) {
//     let campo = document.querySelector(tag);
//     campo.innerHTML = texto;
// }

// exibirTextoNaTela('h1' , 'Jogo do número secreto');
// exibirTextoNaTela('p' , 'Escolha um número entre 1 e 10');

// function verificarChute() {
//     let chute = document.querySelector('input').value;
//     console.log(chute == numeroSecreto);

//     if (chute == numeroSecreto) {
//         exibirTextoNaTela('h1' , 'Acertou!');
//         let palavraTetativa = tentativas > 1 ? 'tentativas' : 'tentativa';
//         let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTetativa}!`;
//         exibirTextoNaTela('p' , mensagemTentativas);
//         document.getElementById('reiniciar').removeAttribute('disabled');
//     } else {
//         if (chute > numeroSecreto) {
//             exibirTextoNaTela('p' , 'O número secreto é menor');
//         } else {
//             exibirTextoNaTela('p', 'Onúmero secreto é maior');
//         }
//         //tentativa = tentativas + 1;
//         tentativas++;

//         limparCampo();
//     }

// }

// function gerarNumeroAleatorio() {
//     return parseInt(Math.random() * 10 + 1 );
// }

// function limparCampo() {
//     chute = document.querySelector('input');
//     chute.value = '';
// }



// let numeroSecreto = gerarNumeroAleatorio();
// let tentativas = 1;

// function exibirTextoNaTela(tag, texto) {
//     let campo = document.querySelector(tag);
//     campo.innerHTML = texto;
// }

// exibirTextoNaTela('h1' , 'Jogo do número secreto');
// exibirTextoNaTela('p' , 'Escolha um número entre 1 e 10');

// function verificarChute() {
//     let chute = document.querySelector('input').value;
//     console.log(chute == numeroSecreto);

//     if(chute == numeroSecreto) {
//         exibirTextoNaTela('h1' , 'Acertou!');
//         let palavraTetativa = tentativas > 1 ? 'tentativas' : 'tentativa';
//         let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTetativa}!`;
//         exibirTextoNaTela('p' , mensagemTentativas);
//     } else {
//         if(chute > numeroSecreto) {
//             exibirTextoNaTela('p' , 'O número secreto é menor');
//         } else {
//             exibirTextoNaTela('p', 'Onúmero secreto é maior');
//         }
//         //tentativa = tentativas + 1;
//         tentativas++;
//     }

// }

// function gerarNumeroAleatorio() {
//     return parseInt(Math.random() * 10 + 1 );
// }



// let numeroSecreto = gerarNumeroAleatorio();

// function exibirTextoNaTela(tag, texto) {
//     let campo = document.querySelector(tag);
//     campo.innerHTML = texto;
// }

// exibirTextoNaTela('h1' , 'Jogo do número secreto');
// exibirTextoNaTela('p' , 'Escolha um número entre 1 e 10');

// function verificarChute() {
//     let chute = document.querySelector('input').value;
//     console.log(chute == numeroSecreto);

//     if(chute == numeroSecreto) { 
//         exibirTextoNaTela('h1' , 'Acertou!');
//         exibirTextoNaTela('p' , 'Você descobriu o número secreto!');
//     } else {
//         if(chute > numeroSecreto) {
//             exibirTextoNaTela('p' , 'O número secreto é menor');
//         } else {
//             exibirTextoNaTela('p', 'Onúmero secreto é maior');
//         }
//     }

// }

// function gerarNumeroAleatorio() {
//     return parseInt(Math.random() * 10 + 1 );
// }



// let numeroSecreto = gerarNumeroAleatorio();

// function exibirTextoNaTela(tag, texto) {
//     let campo = document.querySelector(tag);
//     campo.innerHTML = texto;
// }

// exibirTextoNaTela('h1' , 'Jogo do número secreto');
// exibirTextoNaTela('p' , 'Escolha um número entre 1 e 10');

// function verificarChute() {
//     let chute = document.querySelector('input').value;
//     console.log(chute == numeroSecreto);
// }

// function gerarNumeroAleatorio() {
//     return parseInt(Math.random() * 10 + 1 );
// }



// let numeroSecreto = gerarNumeroAleatorio();

// function exibirTextoNaTela(tag, texto) {
//     let campo = document.querySelector(tag);
//     campo.innerHTML = texto;
// }

// exibirTextoNaTela('h1' , 'Jogo do número secreto');
// exibirTextoNaTela('p' , 'Escolha um número entre 1 e 10');

// function verificarChute() {
//     console.log(numeroSecreto);
// }

// function gerarNumeroAleatorio() {
//     return parseInt(Math.random() * 10 + 1 );
// }



// function exibirTextoNaTela(tag, texto) {
//     let campo = document.querySelector(tag);
//     campo.innerHTML = texto;
// }

// exibirTextoNaTela('h1' , 'Jogo do número secreto');
// exibirTextoNaTela('p' , 'Escolha um número entre 1 e 10');

// function verificarChute() {
//     console.log('O botão foi clicado!')
// }




// // let titulo = document.querySelector('h1');
// // titulo.innerHTML = 'Jogo do número secreto';

// // let paragrafo = document.querySelector('p');
// // paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

// function exibirTextoNaTela(tag, texto) {
//     let campo = document.querySelector(tag);
//     campo.innerHTML = texto;
// }

// exibirTextoNaTela('h1' , 'Jogo do número secreto');
// exibirTextoNaTela('p' , 'Escolha um número entre 1 e 10');

// function verificarChute() {
//     console.log('O botão foi clicado!')
// }



// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

// function verificarChute() {
//     console.log('O botão foi clicado!')
// }



// let titulo = document.querySelector('h1')
// titulo.innerHTML = 'Bem-vindo ao mundo dev'



// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

// function verificarChute() {
//     console.log('O botão foi clicado!')
// }