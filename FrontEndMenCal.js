
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




dot.addEventListener('click', (e)=>{
  if(e.target.value === '.' && !showDot){
    showDot = true;
    disNum += e.target.value;
    displayEl.value = disNum;
  } else if(e.target.value === '.' && showDot){
    return;
  }
});

numbersEl.forEach(num =>{
  num.addEventListener('click', (e)=>{
    // console.log(e.target.innerText)
    showDot = true;
    disNum += e.target.innerText;
    // console.log(disNum)
    displayEl.value = disNum;
  })
})

operatorEl.forEach(operate => {
  operate.addEventListener('click', (e)=> {
    let lastOperation = displayEl.innerText;
    displayEl.innerText = '';
    // let nextOperation = operator.innerText;

    // let result = 
    // console.log(lastOperation)
    
  });
  return;
})

function mathsOperation(){

}

clearAllEl.addEventListener('click', (e) =>{
  displayEl.innerText = "0";
});

// clearLastEl.addEventListener('click', (e)=>

// );