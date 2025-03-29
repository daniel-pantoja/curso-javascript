class Veiculo {
  constructor(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
    this.manutenção = [];
  }

  adicionarManutencao(data, descricao) {
    this.manutenção.push({ data, descricao });
  }

  listarManutencao() {
    console.log(`Histórico de manutenção do ${this.marca} ${this.modelo}:`);
    this.manutenção.forEach((m) => {
      console.log(`- ${m.data}: ${m.descricao}`);
    });
  }

  static calcularIdade(anoModelo) {
    return new Date().getFullYear() - anoModelo;
  }
}

class Carro extends Veiculo {
  constructor(marca, modelo, ano, tipo) {
    super(marca, modelo, ano);
    this.tipo = tipo; // Ex: "sedã", "esportivo", etc.
  }

  detalhes() {
    return `${this.marca} ${this.modelo} (${this.ano}), Tipo: ${this.tipo}`;
  }
}

// Exemplo de uso
const meuCarro = new Carro("Toyota", "Corolla", 2019, "sedã");
meuCarro.adicionarManutencao("2022-01-15", "Troca de óleo");
meuCarro.adicionarManutencao("2023-03-10", "Alinhamento");

meuCarro.listarManutencao();
console.log(meuCarro.detalhes());
console.log(`Idade do carro: ${Carro.calcularIdade(meuCarro.ano)} anos.`);

//! Projeto 2

class Autor {
  constructor(nome, nacionalidade) {
    this.nome = nome;
    this.nacionalidade = nacionalidade;
  }

  detalhes() {
    return `${this.nome}, ${this.nacionalidade}`;
  }
}

class Livro {
  constructor(titulo, autor, anoPublicacao) {
    this.titulo = titulo;
    this.autor = autor;
    this.anoPublicacao = anoPublicacao;
  }

  detalhes() {
    return `${this.titulo} (${
      this.anoPublicacao
    }) - Autor: ${this.autor.detalhes()}`;
  }
}

class Biblioteca {
  constructor(nome) {
    this.nome = nome;
    this.livros = [];
  }

  adicionarLivro(livro) {
    this.livros.push(livro);
  }

  listarLivros() {
    console.log(`Livros na biblioteca ${this.nome}:`);
    this.livros.forEach((livro) => {
      console.log(livro.detalhes());
    });
  }
}

// Exemplo de uso
const autor1 = new Autor("George Orwell", "Britânico");
const autor2 = new Autor("J.K. Rowling", "Britânica");

const livro1 = new Livro("1984", autor1, 1949);
const livro2 = new Livro("Harry Potter e a Pedra Filosofal", autor2, 1997);

const minhaBiblioteca = new Biblioteca("Biblioteca Municipal");
minhaBiblioteca.adicionarLivro(livro1);
minhaBiblioteca.adicionarLivro(livro2);

minhaBiblioteca.listarLivros();
