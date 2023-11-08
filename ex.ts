function calculoNumerico(numero1: number = 20 , numero2: number = 5) {
    return numero1 * numero2;
}
const numeroCalculado = calculoNumerico()


function saudacao(nome: string = "Marcelo") {
    return "Olá " + nome
}
const dizOi = saudacao()


console.log(numeroCalculado);
console.log(dizOi)