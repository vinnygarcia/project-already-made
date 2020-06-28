//TODO adicionar um espaço para entrada de letras, em vez de prompt!!!
//TODO Aceitar somenta letras e desconsiderar letras repetidas.

export default class JogarForca {
    // Pegar uma palavra e iniciar o jogo de forca.
    // Iniciar atributos.
    constructor(palavra, num_tentativas=6){
        this.palavra = palavra;
        this.num_tentativas = num_tentativas;
        this.letras_acertadas = [];
        this.letras_erradas = [];
        this.letras = [];
        this.ganhou = false;
        this.impressao = '';
    };
        
    // Definir métodos.
    dividir_palavra() {
        //Armazena as letras da palavra em uma array e apresenta o nº de letras e tentativas.
        for (let letra of this.palavra){
            this.letras.push(letra);
        };
        console.log('A palavra tem ' + this.letras.length + ' letras.');
        console.log("você tem direito a " + this.num_tentativas + " tentativas erradas");
    };

    verificar_chute() {
        //Pedir uma letra e verificar se está contida na lista de letras da palavra.
        //Se o chute for correto, adiciona a letra à array letras_acertadas.
        let letra_chutada = document.querySelector('#letra');
        if (this.letras.includes(letra_chutada)){
            let msg = ("Existe a letra " + letra_chutada + " na palavra " + this.palavra);
            console.log(msg)
            this.letras_acertadas.push(letra_chutada);
        } else {
            let msg =("não existe a letra na palavra!");
            console.log(msg)
            this.letras_erradas.push(letra_chutada)
        };     
    }  

    imprimir_forca() {
        // imprime somente as letras da palavra que estão em letras acertadas.
        this.impressao = ''
        for (let letra of this.letras){
            if (this.letras_acertadas.includes(letra)) {
                this.impressao += letra;
            } else {
                this.impressao += '_';
            };
        };
        console.log(this.impressao);
    }

    run_game() {
        //Separar a palavra em letras e mostrar o número de tentativas possíveis
        this.dividir_palavra();
        //Enquanto o nº de erros for menor que o nº tentativas:
        while (this.letras_erradas.length < this.num_tentativas) {
            // Pedir uma letra e verificar se está correta ou errada.
            this.verificar_chute();
            // imprimir forca - imprimir somente as letras acertadas
            this.imprimir_forca();
            document.getElementById('mostrarForca').innerHTML = this.impressao;
            //Verificar se o jogador ganhou - se 'impressao' não contém "_". Quebrar loop se ganhou.
            if (!this.impressao.includes('_')) {
                this.ganhou = true;
                break;
            };
        };
        // Imprimir mensagem com base em ter ganhado ou não.
        if (this.ganhou){
            console.log('Você ganhou!!! Parabéns!!!'.toUpperCase());
            document.getElementById('mostrarGanho').innerHTML = "<b>Você ganhou!</b>"
        } else {
            console.log('Você perdeu :( \nTente novamente!');
            document.getElementById("mostrarGanho").innerHTML = "Você perdeu :( <br>Tente novamente!"
        }
    };
};

