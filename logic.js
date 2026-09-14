//THE MEME CALCI
let currentVal = '';
let operator='';
let result = 0;
let ans = document.getElementById("ans");
let expression = document.getElementById("expression");

function addNum (num){
    currentVal+=num;  
    
    updateDisplay();
}
function oprtr(op){
     if (currentVal === '') return; 
    
    const lastChar = currentVal.slice(-1);
    const isOperator = /[+\-*/%]/.test(lastChar);
    
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
    currentVal*=currentVal;
    ans.textContent =currentVal ;

   
}
function updateDisplay(){
    ans.textContent = currentVal; 
}

function show(){
    expression.textContent = currentVal;
    result = new Function (`return ${currentVal}`)();
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
