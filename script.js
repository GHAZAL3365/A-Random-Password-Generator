const resultEl = document.querySelector("#result");
const clipboardEl = document.querySelector("#clipboard");
const lengthEl = document.querySelector("#legnth");
const genBtnEl = document.querySelector("#genBtn");
const uppercaseEl = document.querySelector("#uppercase");
const lowercaseEl = document.querySelector("#lowercase");
const numbersEl = document.querySelector("#numbers");
const symbolsEl = document.querySelector("#symbols");

let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let numbers = "0123456789";
let symbols = "!~$#%&^(){}[]/.<>";

let randomGenPassword = "";

genBtnEl.addEventListener("click", () => {
  resultEl.innerHTML = generatePassword();
});

// funtion for generate password////////
function generatePassword() {
  randomGenPassword = "";
  let passwordLength = lengthEl.value;
  let allChars = "";

  allChars += uppercaseEl.checked ? uppercase : "";
  allChars += lowercaseEl.checked ? lowercase : "";
  allChars += numbersEl.checked ? numbers : "";
  allChars += symbolsEl.checked ? symbols : "";

  if (allChars == "" || passwordLength == "") {
    return randomGenPassword;
  }

  for (let i = 0; i < passwordLength; i++) {
    randomGenPassword += allChars.charAt(
      Math.floor(Math.random() * allChars.length)
    );
  }

  return randomGenPassword;
}

clipboardEl.addEventListener("click", () => {
  if (randomGenPassword != "" || randomGenPassword >= 1) {
    navigator.clipboard.writeText(randomGenPassword);
    clipboardEl.innerHTML = "<i class='fa-solid fa-check'></i>";
    setTimeout(() => {
      clipboardEl.innerHTML = "<i class='far fa-clipboard'></i>";
    }, 1000);
  }
});
