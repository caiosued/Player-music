const botaoPlayPause = document.getElementById('play-pause');
const botaoAvancar = document.getElementById('proximo');
const botaoVoltar = document.getElementById('anterior');
const nomeCapitulo = document.getElementById('capitulo');
const audioCapitulo = document.getElementById('audio-capitulo');

const numeroCapitulos = 10;
let taTocando = false;
let capituloAtual = 1;

function TocarFaixa() {
  audioCapitulo.play();  
  botaoPlayPause.classList.remove('bi-play-circle-fill');
  botaoPlayPause.classList.add('bi-pause-circle-fill');
}

function PausarFaixa () {
  audioCapitulo.pause();
  botaoPlayPause.classList.add('bi-play-circle-fill');
  botaoPlayPause.classList.remove('bi-pause-circle-fill');
}

function tocarOuPausar() {
  if (taTocando === false) {
    TocarFaixa();
    taTocando = true;
  } else {
    PausarFaixa();
    taTocando = false;
  }
}

function trocarNomeFaixa() {
  nomeCapitulo.innerText = 'Capítulo ' + capituloAtual;
}

function proximaFaixa() {
  if(capituloAtual === numeroCapitulos) {
    capituloAtual = 1;
  } else {
    capituloAtual = capituloAtual + 1
  }
  audioCapitulo.src = './books/dom-casmurro/' + capituloAtual + '.mp3';
  TocarFaixa();
  taTocando = true;
  trocarNomeFaixa();
}

function voltarFaixa() {
  if(capituloAtual === 1) {
    capituloAtual = numeroCapitulos;
  } else {
    capituloAtual = capituloAtual - 1
  }
  audioCapitulo.src = './books/dom-casmurro/' + capituloAtual + '.mp3';
  TocarFaixa();
  taTocando = true;
  trocarNomeFaixa();
}
botaoPlayPause.addEventListener('click', tocarOuPausar);
botaoAvancar.addEventListener('click', proximaFaixa);
botaoVoltar.addEventListener('click', voltarFaixa);
