//TODO adicionar um espaço para entrada de letras, em vez de prompt!!!
//TODO Aceitar somenta letras e desconsiderar letras repetidas.
import JogarForca from './forca.js';
import {calculadora, xingar} from './silly.js'

window.JogarForca = JogarForca;
window.calculadora = calculadora;
window.xingar = xingar;
window.mostrarInput = mostrarInput;
window.mostraremHTML = mostraremHTML;
window.main = main;


function mostrarInput(){
    //Cria uma form para pegar as letras chutadas no div com id=newgame
    //É chamado após o jogador clicar para iniciar o jogo após criar uma letra
    //AINDA NÃO UTILIZADO dentro do jogo de fato
    let html = `
    <form onsubmit='return false'> 
    <label for="letra">Chute uma letra:</label>
    <input type="text" name="letra" id="letra">
    <input type="submit" id='botaoLetra'>
    </form>`.trim(); //Elimina espaços antes e depois da string
    console.log(html);
    document.querySelector('#newgame').innerHTML = html;
};

function pegarInput(){
    let letra = document.querySelector('#letra');
};

function mostraremHTML(element='h2', text = 'OLHA EUUU', elementId='newgame'){
    // Adiciona um elemento('h2') a um outro elemento com determinado elementId ('newgame').
    // Cria um elemento e texto, depois insere o texto no elemento (appendChild).
    let el = document.createElement(element);
    let node = document.createTextNode(text);
    el.appendChild(node)
    // Insere o elemento criado em um outro já existente no documento.
    let docEl = document.getElementById(elementId);
    docEl.appendChild(el);
};


//Teste automático
function main() {
    let palavra = document.getElementById("palavraInput").value;
    let jogo = new JogarForca(palavra,2);
    //jogo.run_game();
    //TESTANDOOOO
    jogo.dividir_palavra()
    jogo.imprimir_forca()
    document.getElementById('mostrarForca').innerHTML = jogo.impressao


    //previne a página de atualizar caso já não tenha um return false no próprio html
    //return false 
};

//Adicionando um event listener ao botão 'jogar' - chamar funções main() e  mostrarInput()
let botaoJogar = document.querySelector('#jogar');
botaoJogar.addEventListener('click', main, false);
botaoJogar.addEventListener('click', mostrarInput, false);
// botaoJogar.addEventListener('click', makeNewButtonListener, false);

//Event listener para entrada de letras do elemento gerado por mostrarInput
function makeNewButtonListener() {
    let botaoLetra = document.querySelector('#botaoLetra');
    botaoLetra.addEventListener('click', jogo.verificar_chute);
};


//Event listerner no botão xingar - NAO FUNCIONOU
//let botaoX = document.querySelector('botao2');
//botaoX.addEventListener('click', xingar, false);