const generatePasswordButton = document.querySelector("#generate-password");
const generatedPasswordElement = document.querySelector("#generated-password");

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
  const passwordLength = 10;
  const generators = [
    getLetterLowerCase,
    getLetterUpperCase,
    getNumber,
    getSymbol,
  ];
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
