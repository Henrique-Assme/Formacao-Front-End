const container = document.querySelector(".container");
const qrcodeBtn = document.querySelector("#qr-form button");
const qrcodeInput = document.querySelector("#qr-form input");
const qrcodeImg = document.querySelector("#qr-code img");

function generateQrCode() {
  const qrCodeInputValue = qrcodeInput.value;
  if (!qrCodeInputValue) return;

  qrcodeBtn.innerText = "Gerando código...";
  qrcodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputValue} `;
  qrcodeImg.addEventListener("load", () => {
    container.classList.add("active");
    qrcodeBtn.innerText = "Gerar novo QR Code";
  });
}

qrcodeBtn.addEventListener("click", () => {
  generateQrCode();
});

qrcodeInput.addEventListener("keydown", (e) => {
  if (e.code === "Enter") generateQrCode();
});

qrcodeInput.addEventListener("keyup", () => {
  if (!qrcodeInput.value) {
    container.classList.remove("active");
    qrcodeBtn.innerText = "Gerar QR Code";
  }
})
