// arrays
let number: number[] = [1, 2, 3];
number.push(5);

const nomes: string[] = ["teste", ""];

// array sintaxe 2
const numeros: Array<number> = [1, 2];

// any
("");
const arr1: any = [1, ",", { nome: "henrique" }];

// funcões
function soma(a: number, b: number) {
  console.log(a + b);
}

soma(1, 2);

function greeting(nome: string): string {
  return "Olá " + nome;
}
greeting("Henrique");

// função anônima
setTimeout((): number => {
  const sallary: number = 1000;
  // console.log(parseFloat(sallary));
  return sallary;
}, 2000);

// objetos
function passCoordinates(coord: { x: number; y: number }) {
  console.log("X:" + coord.x);
  console.log("Y:" + coord.y);
}

const objCoord = { x: 100, y: 200 };
passCoordinates(objCoord);
// passCoordinates([1,2])
// passCoordinates({ p: 10, q: 10 })

// opcionais
function showNumber(a: number, b: number, c?: number) {
  console.log([a, b, c]);
}

showNumber(1, 2, 3);
showNumber(1, 2);

// validando
function advancedGreetin(firstName: string, lastName?: string) {
  if (lastName !== undefined) {
    return `Olá ${firstName} ${lastName}!`;
  }
  return `Olá ${firstName}`;
}

// union type
function showBalance(balance: string | number) {
  console.log(`O saldo é ${balance}`);
}

showBalance(100);
showBalance("100");
// showBalance([100])

function showUserRole(role: boolean | string) {
  if (typeof role === "boolean") {
    return "usuário não aprovado";
  }
  return `função do usuário é ${role}`;
}

showUserRole(false);
showUserRole("admin");

// alyas
type ID = string | number;

function showId(id: ID) {
  console.log(`O id é ${id}`);
}

// interface
interface Point {
  x: number;
  y: number;
  z: number;
}

function coordinates(coord: Point) {
  console.log(coord);
}

const coordObj: Point = { x: 10, y: 10, z: 20 };

// alyas x interface
interface Person {
  name: string;
}

interface Person {
  age: number;
}

const somePerson: Person = { name: "Henrique", age: 20 };

type person = { name: string };

// literal type

let test: "testando";
test = "testando";
// test = "oi"

function showDirection(direction: "left" | "right" | "center") {
  console.log(`A direção é ${direction}`);
}
showDirection("left");
// showDirection("top")

// non-null assertion !

const p = document.getElementById("some-p");
console.log(p!.innerText);

// bigint
let n: bigint;
n = 1n;
n = 1000000n;
console.log(typeof n);
