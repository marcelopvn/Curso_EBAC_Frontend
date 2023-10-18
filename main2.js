function Carro(Modelo , Fabricante, anoDeFabricacao , anoDoModelo){
    this.Modelo = Modelo
    this.Fabricante = Fabricante
    this.anoDeFabricacao = anoDeFabricacao
    this.anoDoModelo = anoDoModelo
}

function CambioAuto() {
    Carro.call(this, Modelo, Fabricante, anoDeFabricacao, anoDoModelo)
}

function CambioManual() {
    Carro.call(this, Modelo, Fabricante, anoDeFabricacao, anoDoModelo)
}

const Auto = new Carro("Civic", "HONDA", 2021, 2022)
const Manual = new Carro("Fusca", "Volkswagen", 1962, 1963)

console.log(Auto)
console.log(Manual)