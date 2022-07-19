
// THE THEMES TOGGLE
const bodyclass= document.querySelector('.go');
let toggle = document.getElementById('toggle');

const themer = ()=> {
  if(toggle.value == 1){
    bodyclass.classList.remove('theme2');
    bodyclass.classList.remove('theme3');
  } else if (toggle.value == 2){
    bodyclass.classList.add('theme2');
    bodyclass.classList.remove('theme3');
  } else if (toggle.value == 3){
    bodyclass.classList.add('theme3');
    bodyclass.classList.remove('theme2');
  }
}

toggle.addEventListener('change', themer);



const buttons = document.querySelectorAll(".btn");
const screen = document.querySelector(".display");
let equalSign = document.querySelector(".equalSign");
let clearAll = document.querySelector(".clearAllInput");
const clearLastInput = document.querySelector(".clearLastInput");


buttons.forEach((button) => {
  if(button != equalSign){
    button.addEventListener('click', (e) => {
      let value = e.target.innerText;
      screen.value += value;
    })
  }
})


equalSign.addEventListener('click', (e) =>{
  if(screen.value === ""){
    screen.value = "";
  } else {
    let answer = eval(screen.value);
    screen.value = answer;
  }
})


clearAll.addEventListener('click', ()=>{
  screen.value = 0;
})

clearLastInput.addEventListener('click', ()=>{
  const arrOfNum = [screen.value];
  screen.value = arrOfNum.shift();
})



// const dot = document.querySelector('.dot');

// let disNum = '';
// let showDot = false;

// DISPLAY DOT ONCE
// dot.addEventListener('click', (e)=>{
//   if(e.target.value === '.' && !showDot){
//     showDot = true;
//     disNum += e.target.value;
//     displayEl.value = disNum;
//   } else if(e.target.value === '.' && showDot){
//     return;
//   }
// });


// clearLastEl.addEventListener('click', () => {
//   let numArray = displayEl.value
//   disNum = numberArray.pop();
// })