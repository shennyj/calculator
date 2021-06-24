
const display1=document.querySelector('.display-1');
const display2=document.querySelector('.display-2');
const tempDisplay=document.querySelector('.temp-display');
const allNums = document.querySelectorAll('.number');
const allOperations = document.querySelectorAll('.operation');
const delButton = document.querySelector('.delete')
const clearButton = document.querySelector('.clear')
const equalButton = document.querySelector('.equal');

let display1Num='';
let display2Num='';
let tempNum='';
let lastOperation='';
let result=''



allNums.forEach(num=>{
    num.addEventListener('click',()=>{
        if(num.innerText==='.'&&display2Num.includes('.')) return;
        display2Num+=num.innerText;
        display2.innerText=display2Num;
       
    })
})

allOperations.forEach(operation=>{
    operation.addEventListener('click',()=>{
        if(!display2Num)return;
        const operationUsed=operation.innerText;
        lastOperation=operationUsed;
        if(display1Num&&display2Num&&tempNum){
            mathOperation();
            console.log('hi')
        }else{
            result = parseFloat(display2Num);
        }
        clearVar(operationUsed);

        

    })
})
function clearVar(name=''){
    display1Num+=` ${display2Num} ${name} `;
    display1.innerText=display1Num;
    display2Num='';
    display2.innerText=display2Num;
    tempNum=result;
    tempDisplay.innerText=tempNum;
}

function mathOperation(){
    switch(lastOperation){
        case '+':
            result=result+parseFloat(display2Num);
            break;
        case '-':
            result=result-parseFloat(display2Num);
            break;
        case 'x':
            result=result*parseFloat(display2Num);
            break;
        case '÷':
            result=result/parseFloat(display2Num);
            break;
        case '%':
            result=result%parseFloat(display2Num);
            break;
    } 
    
}


equalButton.addEventListener('click',()=>{
    if(!display2Num||!display1Num)return;
    if(!tempNum) return;

    mathOperation();
    clearVar();
    display2Num=result;
    display2.innerText=display2Num;
    tempNum='';
    tempDisplay.innerText=tempNum;
    display1Num='';
    
})

clearButton.addEventListener('click',()=>{
    display1Num='';
    display1.innerText='0';
    display2Num='';
    display2.innerText='0';
    result='';
    tempNum='0';
    tempDisplay.innerText='0';
    lastoperation='';
})


delButton.addEventListener('click',()=>{
    if(display2.innerText==='0')return;
    display2.innerText=display2.innerText.slice(0,-1);
    display2Num=display2.innerText;
})

window.addEventListener('keydown',(e)=>{
    keyboardPress(e.key);
})
function keyboardPress(key){
    switch(key){
        case '0':
            buttonPress(key);
            break;
        case '1':
            buttonPress(key);
            break;
        case '2':
            buttonPress(key);
            break;
        case '3':
            buttonPress(key);
            break;
        case '4':
            buttonPress(key);
            break;
        case '5':
            buttonPress(key);
            break;
        case '6':
            buttonPress(key);
            break;
        case '7':
            buttonPress(key);
            break;  
        case '8':
            buttonPress(key);
            break;
        case '9':
            buttonPress(key);
            break;
        case '+':
            operatorPress(key);
            break;
        case '-':
            operatorPress(key);
            break;
        case '*':
            operatorPress('x');
            break;
        case '/':
            operatorPress('÷');
            break;
        case '%':
            operatorPress(key);
            break;
        case '=':
            operatorPress(key);
            break;
        case 'Enter':
            clickEqual();
            break;
        default:
            break;
    }
}
function buttonPress(key){
    allNums.forEach(button=>{
        if(button.innerText===key){
            button.click();
        }
    })
}
function operatorPress(key){
    allOperations.forEach(button=>{
        if(button.innerText===key){
            button.click();
        }
    })
}
function clickEqual(){
    equalButton.click();
}




