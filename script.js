const leftCurrEl = document.querySelector(".left-curr-button");
const rightCurrEl = document.querySelector(".right-curr-button");

const leftInput = document.querySelector(".left-input");
const rightInput = document.querySelector(".right-input");

leftCurrEl.addEventListener("click", calculate);
// rightCurrEl.addEventListener("click", calculate);
// leftInput.addEventListener("input", calculate);
// rightInput.addEventListener("input", calculate);

function calculate() {
  console.log("Works!");
  //   const leftCurr = leftCurrEl.value;
  //   const rightCurr = rightCurrEl.value;

  //   fetch(`https://api.exchangerate.host/latest${leftCurr}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       //   console.log(data);
  //       const rate = data.rates[leftCurr];
  //     });
}

calculate();
