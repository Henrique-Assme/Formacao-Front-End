// // 1 - setTimeout
// console.log("Ainda não executou");

// setTimeout(() => {
//   console.log("Requisição assíncrona");
// }, 2000);

// console.log("Ainda não");

// // 2 - setInterval
// console.log("Ainda não começou");

// setInterval(() => {
//   console.log("Intervalo assíncrono");
// }, 3000);

// console.log("Ainda não");

// // 3 - promise
// const promessa = Promise.resolve(5 + 5);
// console.log("Algum código");
// promessa
//   .then((value) => {
//     console.log(`A soma é ${value}`);
//     return value;
//   })
//   .then((value) => value - 1)
//   .then((value) => console.log(`Agora é ${value}`));

// console.log("Outro código");

// // 4 - falha na promise
// Promise.resolve(4 * "ad")
//   .then((n) => {
//     if (Number.isNaN(n)) {
//       throw new Error("Valores inválidos");
//     }
//   })
//   .catch((err) => console.log(`Um erro ocorreu: ${err}`));

// // 5 - rejeição
// function checkNum(n) {
//   return new Promise((resolve, reject) => {
//     if (n > 10) {
//       resolve(`O número é maior do que 10`);
//     } else {
//       reject(new Error("número muito baixo"));
//     }
//   });
// }

// const a = checkNum(10);
// const b = checkNum(20);
// console.log(a,b)

// 6 - resolvendo várias promises
const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 3000);
});
const p2 = Promise.resolve(10 + 10);
const p3 = new Promise((resolve, reject) => {
  if (30 > 10) {
    resolve(30);
  } else {
    reject("erro");
  }
});

Promise.all([p1, p2, p3]).then((valores) => console.log(valores));
// garnte que as 3 estejam prontas ao mesmo tempo

// 7 - async function
async function somarComDelay(a, b) {
  return a + b;
}

somarComDelay(2, 4).then((value) => console.log(value));
console.log("teste");

// 8 - await
function resolveComDelay() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Resolveu a promise");
    }, 2000);
  });
}
async function chamadaAsync() {
  console.log("Chamando a Promise e esperando o resultado");
  const result = await resolveComDelay();
  console.log(result);
}

chamadaAsync();

// 9 - generators
function* generator() {
  yield 1;
  yield 2;
}

const gen = generator();
console.log(gen.next().value);
console.log(gen.next().value);
