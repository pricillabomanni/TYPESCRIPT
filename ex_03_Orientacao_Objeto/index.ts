// Inicio da definição da classe______________________________

class Cumprimento {

    // definir atributos >> sintaxe >> nome do atributo: tipo
    nome: string;
    idade: number;

    // criar metodo constructor
    constructor(_nome: string, _idade: number=0) {

        this.nome = _nome;
        this.idade = _idade
    }

    // outro metodo
    mostrarNomeIdade(idade: number, nome: string) {
        return `A pessoa ${nome} tem ${idade} anos`
    }
}

// fim da definição da classe______________________________

// Invocando a função e o resultado vou armazenar na variavel de memoria chamada resposta

let pessoa1 = new Cumprimento("", ) // serve  para criar o objeto
console.log(pessoa1.mostrarNomeIdade(56, "Silvia")) // utilizando um metodo do objeto resposta
