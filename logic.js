//THE MEME CALCI
let currentVal = '';
let operator='';
let result = 0;
let ans = document.getElementById("ans");
let expression = document.getElementById("expression");

window.addEventListener("keydown", function(pressed){
    let chars = /[+\-*/%]/.test(pressed.key)
    if(chars) {
        oprtr(pressed.key)
    }
   else if (!isNaN(pressed.key) || pressed.key === '.') {
        addNum(pressed.key);
    } else if (pressed.key === 'Enter') {
        show();
    } else if (pressed.key === 'Backspace') {
        bckspc();
    } else if (pressed.key === 'Escape') {
        clearr();
    }
})

function addNum (num){
    currentVal+=num;  
    
    updateDisplay();
    fitText()
}
function oprtr(op){
    if (currentVal === '') return; 
    const lastChar = currentVal.slice(-1);

    const isOperator = /[+\-*/]/.test(lastChar); 
    if (isOperator) {
        currentVal = currentVal.slice(0, -1) + op; 
       
    }
    else {
        currentVal += op; 
    }
   
    
    updateDisplay();   
}
function square(){
    expression.textContent = currentVal +'^2';
    sqr = currentVal*currentVal;
    currentVal = ''
    currentVal += sqr
    ans.textContent = sqr;

   
}
function updateDisplay(){
    ans.textContent = currentVal; 
}

function show(){
    const lastChar = currentVal.slice(-1);

    const isOperator = /[+\-*/]/.test(lastChar); 
    if (isOperator) {
        currentVal = currentVal.slice(0, -1); 
       
    }
    expression.textContent = currentVal;
    result = new Function (`return ${currentVal}`)();
    ans.textContent  = result; 
    currentVal = '';
    fitText();
}
function bckspc(){
    currentVal = currentVal.slice(0, -1);
    ans.textContent = currentVal;
    
}
function clearr(){
    ans.textContent  = '';
    expression.textContent = '';
    currentVal='';
}
function fitText() {
    const len = ans.textContent.length;
    if (len > 30) ans.style.fontSize = '1rem';
     else if (len > 23) ans.style.fontSize = '1.2rem';
    else if (len > 17) ans.style.fontSize = '1.5rem';
    
    else ans.style.fontSize = ''; // back to default xx-large
}
