// arrays
var number = [1, 2, 3];
number.push(5);
var nomes = ["teste", ""];
// array sintaxe 2
var numeros = [1, 2];
// any
("");
var arr1 = [1, ",", { nome: "henrique" }];
// funcões
function soma(a, b) {
    console.log(a + b);
}
soma(1, 2);
function greeting(nome) {
    return "Olá " + nome;
}
greeting("Henrique");
// função anônima
setTimeout(function () {
    var sallary = 1000;
    // console.log(parseFloat(sallary));
    return sallary;
}, 2000);
// objetos
function passCoordinates(coord) {
    console.log("X:" + coord.x);
    console.log("Y:" + coord.y);
}
var objCoord = { x: 100, y: 200 };
passCoordinates(objCoord);
// passCoordinates([1,2])
// passCoordinates({ p: 10, q: 10 })
// opcionais
function showNumber(a, b, c) {
    console.log([a, b, c]);
}
showNumber(1, 2, 3);
showNumber(1, 2);
// validando
function advancedGreetin(firstName, lastName) {
    if (lastName !== undefined) {
        return "Ol\u00E1 ".concat(firstName, " ").concat(lastName, "!");
    }
    return "Ol\u00E1 ".concat(firstName);
}
// union type
function showBalance(balance) {
    console.log("O saldo \u00E9 ".concat(balance));
}
showBalance(100);
showBalance("100");
// showBalance([100])
function showUserRole(role) {
    if (typeof role === "boolean") {
        return "usuário não aprovado";
    }
    return "fun\u00E7\u00E3o do usu\u00E1rio \u00E9 ".concat(role);
}
showUserRole(false);
showUserRole("admin");
function showId(id) {
    console.log("O id \u00E9 ".concat(id));
}
function coordinates(coord) {
    console.log(coord);
}
var coordObj = { x: 10, y: 10, z: 20 };
var somePerson = { name: "Henrique", age: 20 };
// literal type
var test;
test = "testando";
// test = "oi"
function showDirection(direction) {
    console.log("A dire\u00E7\u00E3o \u00E9 ".concat(direction));
}
showDirection("left");
// showDirection("top")
// non-null assertion !
var p = document.getElementById("some-p");
console.log(p.innerText);
// bigint
var n;
n = 1n;
n = 1000000n;
console.log(typeof n);
