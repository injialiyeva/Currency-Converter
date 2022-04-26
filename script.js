const input = document.getElementById("left-input");
const leftButtons = document.getElementById("left-buttons");
const rightButtons = document.getElementById("right-buttons");

class Currency {
  constructor(leftCurrency, rightCurrency) {
    this.leftCurrency = leftCurrency;
    this.rightCurrency = rightCurrency;
    this.url = "https://api.exchangerate.host/latest?base=";
    this.amount = null;
  }
  exchange() {
    fetch(this.url + this.leftCurrency)
      .then((response) => response.json)
      .then((data) => {
        const rate = data.rates[this.rightCurrency];
        const amount2 = Number(this.amount);

        let total = rate * amount2;
        console.log(total);
      })

      .catch((err) => console.log(err));
  }

  changeAmount(amount) {
    this.amount = amount;
  }

  changeLeftCurrency(newLeftCurrency) {
    this.leftCurrency = newLeftCurrency;
  }

  changeRightCurrency(newRightCurrency) {
    this.rightCurrency = newRightCurrency;
  }
}

const currency = new Currency("RUB", "USD");

eventListeners();

function eventListeners() {
  input.addEventListener("input", exchangeCurr);
  leftButtons.addEventListener("click", leftClick);
  rightButtons.addEventListener("click", rightClick);
}

function exchangeCurr() {
  currency.changeAmount(input.value);
  currency.exchange();
}

function leftClick(e) {
  currency.changeLeftCurrency(e.target.textContent);
}

function rightClick(e) {
  currency.changeRightCurrency(e.target.textContent);
}
