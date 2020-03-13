class Carro {

    modelo: string
    velocidadeAtual: number
    velocidadeMaxima: number


    constructor(_modelo: string = "", _velocidadeAtual: number= 0, _velocidadeMaxima: number = 0) {

        this.modelo = _modelo
        this.velocidadeAtual = _velocidadeAtual
        this.velocidadeMaxima = _velocidadeMaxima
    }


    acelerar(velocidadeMaxima: number) {
        while (this.velocidadeAtual < velocidadeMaxima) {
            this.velocidadeAtual++

            console.log(this.velocidadeAtual)
        }
        return this.acelerar
    }

    desacelerar(velocidadeAtual: number) {
        while (this.velocidadeAtual > this.velocidadeMaxima) {
            this.velocidadeAtual--

            console.log(this.velocidadeAtual)
        }
        if(this.velocidadeAtual == 0){

            console.log("Seu carro está parado")
        }

        return this.desacelerar
    } 
}

let Carro1= new Carro()

Carro1.acelerar(5)
Carro1.desacelerar(5)

