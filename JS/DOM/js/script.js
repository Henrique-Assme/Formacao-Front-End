// 1 - movendo pelo DOM
console.log(document.body);
console.log(document.body.childNodes[1]);
console.log(document.body.childNodes[1].childNodes);
console.log(document.body.childNodes[1].childNodes[1].textContent);

// 2 - selecionando por tag
const listItens = document.getElementsByTagName("li");
console.log(listItens);

// 3 - selecionando por id
const title = document.getElementById("title");
console.log(title);

// 4 - selecionando por classe
const products = document.getElementsByClassName("product");
console.log(products);

// 5 - selecionando por css
const productsQuery = document.querySelectorAll(".product");
console.log(productsQuery);
const mainContainer = document.querySelector("#main-container");
console.log(mainContainer);

// 6 - insertBefore
const p = document.createElement("p");
const header = title.parentElement;
header.insertBefore(p, title);

// 7 - appendChild
const navLinks = document.querySelector("nav ul");
const li = document.createElement("li");
navLinks.appendChild(li);

// 8 - replaceChild
const h2 = document.createElement("h2");
h2.textContent = "Meu novo título";
header.replaceChild(h2, title);

// 9 - criando nó de texto
const myText = document.createTextNode("Agora vamos colocar mais um título");
console.log(myText);
const h3 = document.createElement("h3");
h3.appendChild(myText);
mainContainer.insertBefore(myText, productsQuery[0]);

// 10 - trabalhando com atributos
const firstLink = navLinks.querySelector("a");
console.log(firstLink)
firstLink.setAttribute("href", "https://www.google.com")
firstLink.setAttribute("target", "_blank")
console.log(firstLink.getAttribute("href"))

// 11 - altura e largura
const footer = document.querySelector("footer")
console.log(footer.offsetHeight, footer.offsetWidth)
console.log(footer.clientHeight, footer.clientWidth)

// 12 - client bounding rect
const product = products[0]
console.log(product.getBoundingClientRect())

// 13 - mudando estilos
mainContainer.style.color = "red"
mainContainer.style.backgroundColor = "yellow"

// 14 - estilizando vários elementos
for(const li of listItens){
  li.style.backgroundColor = "green";
}