const basePrice = 100.25;
const extraFee = 1.9;
const translations = {
  bp: basePrice,
  ap: basePrice,
  hy: 5 * basePrice,
};

const wordsIpunt = document.getElementById("words");
const languageSelector = document.getElementById("language");
const sprintCheckbox = document.getElementById("sprint");
const totalSpan = document.getElementById("js-total");

isExtraFeeEnabled = () => sprintCheckbox.checked;

getFinalPrice = (quantity, rate) => {
  if (isExtraFeeEnabled()) {
    return Number(parseFloat(quantity * rate * extraFee));
  }
  return Number(parseFloat(quantity * rate));
};

setLocalePrice = (number, locale = "us") =>
  number.toLocaleString(locale, {
    minimumFractionDigits: 2,
  });

getTotalString = (price) => {
  if (Number.isNaN(price)) {
    return setLocalePrice(Number(0));
  }
  return setLocalePrice(price);
};

calculateTotal = (words, rate) => {
  totalSpan.innerText = getTotalString(getFinalPrice(words, rate));
};

wordsIpunt.addEventListener("input", (e) => {
  calculateTotal(e.target.value, translations[languageSelector.value]);
});
languageSelector.addEventListener("input", (e) => {
  calculateTotal(wordsIpunt.value, translations[e.target.value]);
});
sprintCheckbox.addEventListener("input", (e) => {
  calculateTotal(wordsIpunt.value, translations[languageSelector.value]);
});

calculateTotal(wordsIpunt.value, translations[languageSelector.value]);

document
  .querySelector("button")
  .addEventListener("click", () => window.print());

const times = document.getElementById('times');
const iconContainer = document.getElementById('info-container');
// let infoP = document.getElementById('info');
times.onclick = function () {
  click();
};
function click() {
  iconContainer.style.display = 'none';
}