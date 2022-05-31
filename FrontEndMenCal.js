
// THE THEMES TOGGLE
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







const displayEl = document.querySelector('.display');
const numbersEl = document.querySelectorAll('.num');
const operatorEl = document.querySelectorAll('.operator');
const equalEl = document.querySelector('.equalSign');
const clearLastEl = document.querySelector('.clearLastInput');
const clearAllEl = document.querySelector('.clearAllInput');
const bodyclass= document.querySelector('.go');
const dot = document.querySelector('.dot');

let disNum = '';
let showDot = false;

// DISPLAY DOT ONCE
dot.addEventListener('click', (e)=>{
  if(e.target.value === '.' && !showDot){
    showDot = true;
    disNum += e.target.value;
    displayEl.value = disNum;
  } else if(e.target.value === '.' && showDot){
    return;
  }
});

// DISPLAY NUMBERS ON SCREEN
numbersEl.forEach(num =>{
  num.addEventListener('click', (e)=>{
    showDot = true;
    disNum += e.target.innerText;
    displayEl.value = disNum;
  })
})

operatorEl.forEach(operator => {
  operator.addEventListener('click', ()=> {
    let lastOperation = displayEl.innerText;
    displayEl.value = '';
    disNum = '';
    let nextOperation = displayEl.innerText;

    if(operatorEl == '+'){
      let result = lastOperation + nextOperation
    } else if (operatorEl == '-'){
      let result = lastOperation - nextOperation
    } else if (operatorEl == 'x'){
      let result = lastOperation * nextOperation
    } else if (operatorEl == '/'){
      let result = lastOperation / nextOperation
    } else {
      return
    }

    return result
  });
})



clearAllEl.addEventListener('click', () =>{
  displayEl.value = 0;
  disNum = ""
});

clearLastEl.addEventListener('click', () => {
  let numArray = displayEl.value
  disNum = numberArray.pop();
})