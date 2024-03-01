// 1 - métodos
const animal = {
  nome: "Rex",
  latir: function () {
    console.log("Au Au");
  },
};

console.log(animal.nome);
animal.latir();

// 2 - this
const pessoa = {
  nome: "Henrique",
  getNome: function () {
    return this.nome;
  },
};

console.log(pessoa.nome);
console.log(pessoa.getNome());

// 3 - prototype
const text = "texto";
console.log(Object.getPrototypeOf(text));

const myObject = {
  a: "b",
};
console.log(myObject);

const mySecondObject = Object.create(myObject);
console.log(mySecondObject);

// 4 - classes ES6
class Cachorro {
  constructor(nome, raca) {
    this.nome = nome;
    this.raca = raca;
  }
}

const dorinha = new Cachorro("Dorinha", "Border Colie");
console.log(dorinha);
console.log(Object.getPrototypeOf(dorinha));

// 5 - mais classes
class Caminhão {
  constructor(eixos, cor) {
    this.eixos = eixos;
    this.cor = cor;
  }

  descreverCaminhao() {
    console.log(`Este caminhão tem ${this.eixos} e é da cor ${this.cor}`);
  }
}

const scania = new Caminhão(6, "vermelha");
console.log(scania);
scania.descreverCaminhao();

// 6 - constantes
class Aviao {
  constructor(marca) {
    this.marca = marca;
  }
}
const asas = Symbol();
Aviao.prototype[asas] = 2;
const boeing = new Aviao("Boeing");
console.log(boeing);

// 7 - getter e setter
class Post {
  constructor(titulo) {
    this.titulo = titulo;
  }

  get titulo() {
    return this.titulo;
  }

  set titulo(newTitulo) {
    this.titulo = newTitulo;
  }
}

// 8 - herança
class Mamifero {
  constructor(patas) {
    this.patas = patas;
  }
}

class Lobo extends Mamifero {
  constructor(patas, raca) {
    super(patas);
    this.raca = raca;
  }
}

const labrador = new Lobo(4, "Labrador");
console.log(labrador);