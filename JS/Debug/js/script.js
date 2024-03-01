"use strict";

// opa = "teste";

// const undefined = 10;

// delete [].length;

let c = 1;
let d = 2;

if (c == 1) {
  c = d + 2;
}

// debugger;

for (let i = 0; i < d; i++) {
  c = c + 2;
}

function checkNumber(n) {
  const result = Number(n);

  if (isNaN(result)) {
    return 0;
  }

  return result;
}

checkNumber("10");
checkNumber(5);
checkNumber({});
checkNumber("teste");

let x = 10;

// if (x != 11) {
//   throw new Error("x não é igual a 11");
// }

try {
  const soma = x + y;
} catch (error) {
  console.log(`Erro no programa: ${error}`);
}

function checkArray(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    throw new Error("O argumento não é um array");
  }

  return arr;
}

checkArray([])
checkArray([1, 2, 3])