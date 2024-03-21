const generatePasswordButton = document.querySelector("#generate-password");
const generatedPasswordElement = document.querySelector("#generated-password");
const openCloseGeneratorButton = document.querySelector(
  "#open-generate-password"
);
const generatePasswordContainer = document.querySelector("#generate-options");
const lenghtInput = document.querySelector("#length");
const lettersInput = document.querySelector("#letters");
const numbersInput = document.querySelector("#numbers");
const symbolsInput = document.querySelector("#symbols");
const copyPasswordButton = document.querySelector("#copy-password");

const getLetterLowerCase = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

const getLetterUpperCase = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

const getNumber = () => {
  return Math.floor(Math.random() * 10).toString();
};

const getSymbol = () => {
  const symbols = "!@#$%¨&*()`´{^~}ª[]|;:,<.>/?°-=+º";
  return symbols[Math.floor(Math.random() * symbols.length)];
};

const generatePassword = (
  getLetterUpperCase,
  getLetterLowerCase,
  getNumber,
  getSymbol
) => {
  let password = "";
  const passwordLength = lenghtInput.value;
  const generators = [];
  if (numbersInput.checked) generators.push(getNumber);
  if (lettersInput.checked)
    generators.push(getLetterLowerCase, getLetterUpperCase);
  if (symbolsInput.checked) generators.push(getSymbol);
  if (generators.length === 0) return;

  for (i = 0; i < passwordLength; i++) {
    let index = Math.floor(Math.random() * generators.length);
    password += generators[index]();
  }
  generatedPasswordElement.style.display = "block";
  generatedPasswordElement.querySelector("h4").innerText = password;
};

generatePasswordButton.addEventListener("click", (e) => {
  generatePassword(
    getLetterUpperCase,
    getLetterLowerCase,
    getNumber,
    getSymbol
  );
});

openCloseGeneratorButton.addEventListener("click", () => {
  generatePasswordContainer.classList.toggle("hide");
});

copyPasswordButton.addEventListener("click", (e) => {
  e.preventDefault();

  const password = generatedPasswordElement.querySelector("h4").innerText;
  navigator.clipboard.writeText(password).then(() => {
    copyPasswordButton.innerText = "Senha copiada";
    setTimeout(() => {
      copyPasswordButton.innerText = "Copiar";
    }, 1000);
  });
});
