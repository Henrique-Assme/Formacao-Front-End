const clickButton = document.getElementById("my-button");
clickButton.addEventListener("click", function () {
  console.log("clicou");
});

const secondBtn = document.querySelector("#btn");
function imprimirMensagem() {
  console.log("Teste");
}
secondBtn.addEventListener("click", imprimirMensagem);

const rmvBtn = document.querySelector("#other-btn");
rmvBtn.addEventListener("click", () => {
  console.log("Evento removido");
  secondBtn.removeEventListener("click", imprimirMensagem);
});

const title = document.querySelector("#title");
title.addEventListener("click", (event) => {
  console.log(event);
  console.log(event.offsetX);
  console.log(event.pointerType);
  console.log(event.target);
});

const containerBtn = document.querySelector("#btn-container");
const btnInside = containerBtn.querySelector("#div-btn");

containerBtn.addEventListener("click", () => {
  console.log("Evento 1");
});

btnInside.addEventListener("click", (event) => {
  event.stopPropagation();
  console.log("Evento 2");
});

const a = document.querySelector("a");
a.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Não abriu o google");
});

document.addEventListener("keyup", (e) => {
  console.log(`Soltou a tecla ${e.key}`);
});

document.addEventListener("keydown", (e) => {
  console.log(`Apertou a tecla ${e.key}`);
});

const mouse = document.querySelector("#mouse");
mouse.addEventListener("mouseup", (e) => {
  console.log("Pressionou o botão");
});
mouse.addEventListener("dblclick", (e) => {
  console.log("Clique duplo");
});

// document.addEventListener("mousemove", e => {
//   console.log(e.x, e.y)
// })

window.addEventListener("scroll", (e) => {
  if (window.scrollY > 200) {
    console.log("Passou de 200px");
  }
});

const input = document.querySelector("#input");
input.addEventListener("focus", (e) => {
  e.target.style.backgroundColor = "#333";
  e.target.style.border = "5px solid red";
});
input.addEventListener("blur", (e) => {
  e.target.style.backgroundColor = "";
  e.target.style.border = "";
});

window.addEventListener("load", () => {
  console.log("a página carregou");
});

// window.addEventListener("beforeunload", (e) => {
//   e.preventDefault();
//   console.log("Não saia");
// });

const debounce = (func, delay) => {
  let timeout;
  return (...arguments) => {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => {
      func.apply(arguments);
    }, delay);
  };
};

window.addEventListener(
  "mousemove",
  debounce(() => {
    console.log("executando");
  }, 500)
);
