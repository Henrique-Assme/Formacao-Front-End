const multiplicationForm = document.querySelector("#multiplication-form");
const numberInput = document.querySelector("#number");
const multiplicationInput = document.querySelector("#multiplicator");
const multiplicationTitle = document.querySelector("#multiplication-title span")
const multiplicationTable = document.querySelector(
  "#multiplication-operations"
);

const createTable = (number, multiplicatornumber) => {
  multiplicationTable.innerHTML = "";
  multiplicationTitle.innerText = number
  for (let i = 1; i <= multiplicatornumber; i++) {
    const result = number * i;
    const template = `
    <div class="row">
      <div class="operation">${number} x ${i} = </div>
      <div class="result">${result}</div>
    </div>`;
    const parser = new DOMParser();
    const htmlTemplate = parser.parseFromString(template, "text/html");
    const row = htmlTemplate.querySelector(".row")
    multiplicationTable.appendChild(row)
  }
};

multiplicationForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const multiplicationNumber = +numberInput.value;
  const multiplicatorNumber = +multiplicationInput.value;
  if (!multiplicatorNumber || !multiplicationNumber) return;
  createTable(multiplicationNumber, multiplicatorNumber);
});
