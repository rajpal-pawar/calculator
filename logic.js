//THE MEME CALCI
let currentVal = '';
let operator='';
let forDisplay = '';
let ans = document.getElementById("ans");
let expression = document.getElementById("expression");
let op;

function addNum (num){
    currentVal+=num;  
    forDisplay+=num;
    updateDisplay();
}
function oprtr(op){
    operator=op;
    currentVal+=operator;
    updateDisplay();   
}
function square(){
    expression.textContent = currentVal +'^2';
    ans.textContent = currentVal*currentVal;
}
function updateDisplay(){
    ans.textContent =currentVal; 
}

function show(){
    expression.textContent = currentVal;
    const result = new Function (`return ${currentVal}`)();
    ans.textContent  = result; 
    currentVal = '';
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
