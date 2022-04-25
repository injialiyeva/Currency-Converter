const leftCurrEl = document.querySelector(".left-exc-btns");
const rightCurrEl = document.querySelector(".right-exc-btns");

const leftInput = document.querySelector(".left-input");
const rightInput = document.querySelector(".right-input");

const rateLeft = document.getElementById('curr-rate-left');
const rateRight = document.getElementById('curr-rate-right');

leftCurrEl.addEventListener("click", calculate);
rightCurrEl.addEventListener("click", calculate);
// leftInput.addEventListener("input", calculate);
// rightInput.addEventListener("input", calculate);

function calculate() {
  // console.log("Works!");
    const leftCurr = leftCurrEl.value;
    const rightCurr = rightCurrEl.value;

    fetch(`https://api.exchangerate.host/latest${leftCurr}`)
      .then((response) => response.json())
      .then((data) => {
          console.log(data);
        const rate = data.rates[rightCurr];
        rateLeft.innerText = `1 ${leftCurr} = ${rate} ${rightCurr}`;
        rateRight.innerText = `1 ${rightCurr} = ${rate} ${leftCurr}`;
      });
}

calculate();


//--------Changing Buttons Color

let btnLeft = document.querySelectorAll('.left-exc-btns button');
let btnRight = document.querySelectorAll('.right-exc-btns button');

btnLeft.forEach(item => {
  item.addEventListener('click', _ => {
    btnLeft.forEach(item => {
      item.style.backgroundColor = '#ffffff';
    })
    item.style.backgroundColor = '#833ae0';
  })
})

btnRight.forEach(item => {
  item.addEventListener('click', _ => {
    btnRight.forEach(item => {
      item.style.backgroundColor = '#ffffff';
    })
    item.style.backgroundColor = '#833ae0';
  })
})

//-----------------------------------------