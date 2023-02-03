let counterDisplayElem = document.querySelector('.counter-display');
let counterMinusElem = document.querySelector('.counter-minus');
let counterPlusElem = document.querySelector('.counter-plus');
let getRandomNum = document.querySelector('.random');
let counterDelter = document.querySelector('.null');
let count = 0;
counterPlusElem.addEventListener("click",()=>{
    count++;
    updateDisplay();
}) ;

counterMinusElem.addEventListener("click",()=>{
    count--;
    updateDisplay()
    
});
counterDelter.addEventListener("click", () => {
   count = 0
   updateDisplay()
});
getRandomNum.addEventListener("click",() =>{
   let number = Math.floor(Math.random() * 98) + 2
    count = number
    updateDisplay()
})

function updateDisplay(){
    counterDisplayElem.innerHTML = count;
};


