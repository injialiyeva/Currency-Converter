const input = document.getElementById("left-input");
const leftButtons = document.getElementById("left-buttons");
const rightButtons = document.getElementById("right-buttons");

//Change comma to dot
const numberMask = IMask(document.querySelector("input[name=to]"), {
  mask: Number,
  radix: ".",
  mapToRadix: [","],
});
const numberMaskk = IMask(document.querySelector("input[name=from]"), {
  mask: Number,
  radix: ".",
  mapToRadix: [","],
});
//

eventListeners();
function eventListeners() {
  input.addEventListener("input", exchangeCurrency);
  leftButtons.addEventListener("click", leftClick);
  rightButtons.addEventListener("click", rightClick);
  document.addEventListener("DOMContentLoaded", () => {
    currency
      .exchange()
      .then((result) => {
        excResult.displayResult(result);
      })
      .catch((err) => console.log(err));
  });
}

function exchangeCurrency() {
  currency.changeAmount(input.value); //?
  currency
    .exchange()
    .then((result) => {
      excResult.displayResult(result);
    })
    .catch((err) => console.log(err));
}

function leftClick(e) {
  currency.changeLeftCurrency(e.target.textContent);
  currency
    .exchange()
    .then((result) => {
      excResult.displayResult(result);
    })
    .catch((err) => console.log(err));
}

function rightClick(e) {
  currency.changeRightCurrency(e.target.textContent);
  currency
    .exchange()
    .then((result) => {
      excResult.displayResult(result);
    })
    .catch((err) => console.log(err));
}

//Currency class - exchanges value from left rates to right ones
class Currency {
  constructor(leftCurrency, rightCurrency) {
    this.leftCurrency = leftCurrency;
    this.rightCurrency = rightCurrency;
    this.url = "https://api.exchangerate.host/latest?base=";
    this.amount = null;
    this.currRateRight = document.getElementById("curr-rate-right");
    this.currRateLeft = document.getElementById("curr-rate-left");
  }
  exchange() {
    return new Promise((resolve, reject) => {
      fetch(this.url + this.leftCurrency + "&symbols" + this.rightCurrency)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          const rate = data.rates[this.rightCurrency];
          if (this.leftCurrency !== this.rightCurrency) {
            this.currRateLeft.textContent = `1 ${
              this.leftCurrency
            } = ${rate.toFixed(4)} ${this.rightCurrency}`;
            this.currRateRight.textContent = `1 ${
              this.rightCurrency
            } = ${Number(1 / rate).toFixed(4)} ${this.leftCurrency}`;
            // console.log(data);
            const amount2 = Number(this.amount);
            let total = rate * amount2;
            resolve(total);
          } else {
            this.currRateLeft.textContent =
              "Eyni dəyərləri çevirməyə ehtiyac yoxdur";
            this.currRateRight.textContent =
              "Eyni dəyərləri çevirməyə ehtiyac yoxdur";
            input.value = "";
            excResult.output.value = "";
          }
        })
        .catch((err) => reject(err));
    });
  }

  changeAmount(amount) {
    this.amount = amount;
  }

  changeLeftCurrency(newLeftCurrency) {
    this.leftCurrency = newLeftCurrency;
    return newLeftCurrency;
  }

  changeRightCurrency(newRightCurrency) {
    this.rightCurrency = newRightCurrency;
  }
}

//Show result on the screen
class ExcResult {
  constructor() {
    this.output = document.getElementById("right-input");
  }
  displayResult(result) {
    if (isNaN(currency.amount)) {
      this.output.value = "";
      input.value = "";
      window.alert("Məbləğ daxil edin!");
    } else {
      if (currency.amount === "" || currency.amount === null) {
        this.output.value = " ";
      } else {
        if (input.value[0] == 0 || input.value == "") {
          input.value = "";
          excResult.output.value = "";
        } else {
          this.output.value = Number(result).toFixed(4);
        }
      }
    }
  }
}

const currency = new Currency("RUB", "USD");
const excResult = new ExcResult();

//Change buttons' colors
const btnLeft = document.querySelectorAll(".left-exc-btns button");
const btnRight = document.querySelectorAll(".right-exc-btns button");
const purple = document.querySelector(".left-exc-btns > .default");
const purple2 = document.querySelector(".right-exc-btns > .default");

btnLeft.forEach((item) => {
  item.style.backgroundColor = "white";
  item.addEventListener("click", (e) => {
    purple.classList.remove("default");
    if (e.target.style.backgroundColor == "white") {
      btnLeft.forEach((item) => {
        item.style.backgroundColor = "white";
        item.style.color = "#e5e5e5";
      });
      e.target.style.backgroundColor = "#833ae0";
      e.target.style.color = "white";
    }
  });
});

btnRight.forEach((item) => {
  item.style.backgroundColor = "white";
  item.addEventListener("click", (e) => {
    purple2.classList.remove("default");
    if (e.target.style.backgroundColor == "white") {
      btnRight.forEach((item) => {
        item.style.backgroundColor = "white";
        item.style.color = "#e5e5e5";
      });
      e.target.style.backgroundColor = "#833ae0";
      e.target.style.color = "white";
    }
  });
});
