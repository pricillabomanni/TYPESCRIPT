var Carro = /** @class */ (function () {
    function Carro(_modelo, _velocidadeAtual, _velocidadeMaxima) {
        if (_modelo === void 0) { _modelo = ""; }
        if (_velocidadeAtual === void 0) { _velocidadeAtual = 0; }
        if (_velocidadeMaxima === void 0) { _velocidadeMaxima = 0; }
        this.modelo = _modelo;
        this.velocidadeAtual = _velocidadeAtual;
        this.velocidadeMaxima = _velocidadeMaxima;
    }
    Carro.prototype.acelerar = function (velocidadeMaxima) {
        while (this.velocidadeAtual < velocidadeMaxima) {
            this.velocidadeAtual++;
            console.log(this.velocidadeAtual);
        }
        return this.acelerar;
    };
    Carro.prototype.desacelerar = function (velocidadeAtual) {
        while (this.velocidadeAtual > this.velocidadeMaxima) {
            this.velocidadeAtual--;
            console.log(this.velocidadeAtual);
        }
        if (this.velocidadeAtual == 0) {
            console.log("Seu carro está parado");
        }
        return this.desacelerar;
    };
    return Carro;
}());
var Carro1 = new Carro();
Carro1.acelerar(5);
Carro1.desacelerar(5);
