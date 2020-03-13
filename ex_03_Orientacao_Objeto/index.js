// Inicio da definição da classe______________________________
var Cumprimento = /** @class */ (function () {
    // criar metodo constructor
    function Cumprimento(_nome, _idade) {
        if (_idade === void 0) { _idade = 0; }
        this.nome = _nome;
        this.idade = _idade;
    }
    // outro metodo
    Cumprimento.prototype.mostrarNomeIdade = function (idade, nome) {
        return "A pessoa " + nome + " tem " + idade + " anos";
    };
    return Cumprimento;
}());
// fim da definição da classe______________________________
// Invocando a função e o resultado vou armazenar na variavel de memoria chamada resposta
var pessoa1 = new Cumprimento(""); // serve  para criar o objeto
console.log(pessoa1.mostrarNomeIdade(56, "Silvia")); // utilizando um metodo do objeto resposta
