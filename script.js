// //Selectors
// const currButtons = document.querySelectorAll(".curr-button");

// const leftInput = document.querySelector(".left-input");
// const rightInput = document.querySelector(".right-input");

// const rateLeft = document.getElementById("curr-rate-left");
// const rateRight = document.getElementById("curr-rate-right");


// //Event Listeners
// currButtons.forEach((item) => item.addEventListener('click', getValue))


// //Functions
// function getValue() {

// }



// let leftValue;
// let rightValue;

// leftCurrEl.addEventListener("click", calculate);
// rightCurrEl.addEventListener("click", calculate);
// leftInput.addEventListener("input", calculate);
// rightInput.addEventListener("input", calculate);

// function calculate() {
  // console.log("Works!");

  // const leftCurr = leftCurrEl.value;
  // const rightCurr = rightCurrEl.value;

  // rightCurrEl.forEach((item) => {
  //     item.addEventListener('click', (_) => {
  //       rightValue = item.innerText;
  //      console.log(rightValue)
  //       console.log(test)
  //     })
      
  //   })

  //   let test =  leftCurrEl.forEach((item) => {
  //   item.addEventListener('click', (_) => {
      // console.log(item.innerText)
  //     leftValue = item.innerText
    

  //   console.log(leftValue)
    
     
  //   })
    
  // })


 


// calculate();

//--------Changing Buttons Color

let btnLeft = document.querySelectorAll(".left-exc-btns button");
let btnRight = document.querySelectorAll(".right-exc-btns button");



btnLeft.forEach((item) => {
  item.addEventListener("click", (_) => {
    btnLeft.forEach((item) => {
      item.style.backgroundColor = "#ffffff";
    });
    item.style.backgroundColor = "#833ae0";
  });
});

btnRight.forEach((item) => {
  item.addEventListener("click", (_) => {
    btnRight.forEach((item) => {
      item.style.backgroundColor = "#ffffff";
    });
    item.style.backgroundColor = "#833ae0";
  });
});

////Self-Note: Change the color of text to white!

//-----------------------------------------

const left=document.getElementById("leftButtons");
const right = document.getElementById("rightButtons")
left.addEventListener("click",firstClick);
right.addEventListener("click",secondClick);


function firstClick(e){
  fetch(`https://api.exchangerate.host/latest?base=${e.target.textContent}&symbol${secondClick()}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const rate = data.rates[rightCurr];
      rateLeft.innerText = `1 ${leftValue} = ${rate} ${rightCurr}`;
      rateRight.innerText = `1 ${rightCurr} = ${rate} ${leftCurr}`;
   });
  console.log(e.target.innerText)
return e.target.innerText
  //console.log(e.target.innerText)
}
function secondClick(e){
  console.log(e.target.innerText)
}


 fetch(`https://api.exchangerate.host/latest?base=${e.target.textContent}&symbol${secondClick()}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const rate = data.rates[rightCurr];
      rateLeft.innerText = `1 ${leftValue} = ${rate} ${rightCurr}`;
      rateRight.innerText = `1 ${rightCurr} = ${rate} ${leftCurr}`;
   });