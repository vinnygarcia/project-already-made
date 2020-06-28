

export let calculadora = {
    add: function (a,b) {return a + b},
    sub: function (a,b) {return a - b},
    multiply: function (a,b) {return a * b},
    divide: function (a,b) {return a / b}
};

export function xingar(element){
    let nome = prompt("Digite seu nome:");
    let frase = "Boa, " + nome + "! Lesado!hahah";
    console.log(frase);
    let h5 = document.createElement('h5')
    h5.textContent = frase;
    element.after(h5);
};