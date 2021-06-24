
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




// class Calculator{
//     constructor(prevNums,currentNums){
//         this.prevNums=prevNums;
//         this.currentNums=currentNums;
//         this.clear();
//     }


// clear(){
//     this.prevEmpty='';
//     this.currentEmpty='';
//     this.operation=undefined;
// }
// delete(){
//     this.currentEmpty=this.currentEmpty.toString().slice(0,-1);
// }
// appendNumber(number){
//     if(number==='.'&&this.currentEmpty.includes('.')) return;
//     this.currentEmpty=this.currentEmpty.toString()+number.toString();
// }
// chooseOperation(operation){
//     if(this.currentEmpty==='')return;
//     if(this.prevEmpty!==''){
//         this.compute();
//     }
//     this.operation=operation;
//     this.prevEmpty=this.currentEmpty+operation;
//     this.currentEmpty="";


// }
// compute(){
//    let computation;
//    let prev = parseFloat(this.prevEmpty);
//    let current = parseFloat(this.currentEmpty);
//    if(isNaN(prev)||isNaN(current)) return;
//     switch(this.operation){
//         case '+':
//             computation= prev+current;
//             break;
//         case '-':
//             computation= prev-current;
//             break;
//         case '*':
//             computation= prev*current;
//             break;
//         case '÷':
//             computation= prev/current;
//             break;
//         default:
//             return;
//     }
//     this.currentEmpty=computation;
//     this.prevEmpty='';
//     this.operation=undefined;


   

// }


// updateDisplay(){
//    this.currentNums.textContent=this.currentEmpty;
//    this.prevNums.textContent=this.prevEmpty;
   

// }
// }


// const numButtons=document.querySelectorAll('[data-num]');
// const opButtons=document.querySelectorAll('[operation]');
// const clearButton=document.querySelector('[clear-sign]');
// const delButton = document.querySelector('[delete-sign]');
// const equalButton = document.querySelector('[equal-sign]');
// const prevNums=document.querySelector('[prev-op]');
// const currentNums = document.querySelector('[current-op]');

// const calculator=new Calculator(prevNums,currentNums);

// numButtons.forEach(button=>{
//     button.addEventListener('click',()=>{
//         calculator.appendNumber(button.textContent);
//         calculator.updateDisplay();
//     })
// })

// opButtons.forEach(op=>{
//     op.addEventListener('click',()=>{
//         calculator.chooseOperation(op.textContent);
//         calculator.updateDisplay();
//     })
// })


// equalButton.addEventListener('click',()=>{
//     calculator.compute();
//     calculator.updateDisplay();
// })

// clearButton.addEventListener('click',()=>{
//     calculator.clear();
//     calculator.updateDisplay();
// })

// delButton.addEventListener('click',()=>{
//     calculator.delete();
//     calculator.updateDisplay();
// })










// // const backspace = document.querySelector('.backSpace');

// // const allOperators=document.querySelectorAll('.operator');
// // const addOperator = document.querySelector('.add');
// // const minusOperator = document.querySelector('.subtract');
// // const timesOperator = document.querySelector('.multiply');
// // const divOperator = document.querySelector('.divide');
// // const dot = document.querySelector('.dot');


// // function numberUsed(){
// //     buttons.forEach(button=>{
// //         button.addEventListener('click',()=>{
// //             if(!button.classList.contains('operator')){
// //                 let numText="";
// //                 numEntered.textContent+=buttonPressed;
// //             }
// //         })
// //     })
// // }

// // function useOperation(){
    
// //     buttons.forEach(button=>{

// //         button.addEventListener('click',()=>{
// //             const buttonPressed=button.textContent;
// //             const numEntered=document.querySelector('#numEntered');
// //             numEntered.textContent+=buttonPressed;
            
// //         //    console.log(buttonPressed);
// //         //    console.log(numEntered.textContent);
// //             console.log(buttonPressed);
// //             console.log(numEntered.textContent);

// //             if(button.classList.contains('operator')){
                
// //                 //numEntered.textContent+=buttonPressed;
// //                 let operatorUsed=button.classList[2];
// //                 console.log(numEntered.textContent);
                

// //             }
// //             button.addEventListener('click',()=>{
// //                 if(!button.classList.contains('operator')){
                    
// //                     numEntered.textContent+=buttonPressed;
// //                     let buttonPressed2 = button.textContent;
// //                 }
// //             })

// //         })
            

// //         // allOperators.forEach(operator=>{
// //         //     operator.addEventListener('click',()=>{
// //         //         button.addEventListener('click',()=>{
                    
// //         //             numEntered.textContent+=buttonPressed;


// //         //         })
                
// //         //         let operatorUsed = operator.classList[2];
    
// //         //         console.log(operatorUsed);

// //         //         console.log(numText1);
// //         //         console.log(numEntered.textContent);
// //         //         operator(operatorUsed,numText1,numEntered.textContent);
// //         //     })
// //         // })
// //     })


    

// // }
// // useOperation();


// // backspace.addEventListener('click',()=>{
   
// //     numEntered.textContent= numEntered.textContent.substr(0,numEntered.textContent.length-1)
// //     console.log(numEntered.textContent);
// // })    

// // document.addEventListener('keydown',(e)=>{
// //     keyboardPress(e.key)
// // })

// // function keyboardPress(key){
// //     switch(key){
// //         case '0':
// //             numEntered.textContent+=key
// //             break;
// //         case '1':
// //             numEntered.textContent+=key
// //             break;
// //         case '2':
// //             numEntered.textContent+=key
// //             break;
// //         case '3':
// //             numEntered.textContent+=key
// //             break;
// //         case '4':
// //             numEntered.textContent+=key
// //             break;
// //         case '5':
// //             numEntered.textContent+=key
// //             break;
// //         case '6':
// //             numEntered.textContent+=key
// //             break;
// //         case '7':
// //             numEntered.textContent+=key
// //             break;
// //         case '8':
// //             numEntered.textContent+=key
// //             break;
// //         case '9':
// //             numEntered.textContent+=key
// //             break;
// //         case 'Backspace':
// //             numEntered.textContent= numEntered.textContent.substr(0,numEntered.textContent.length-1)
// //             break;
        
// //     }
// // }


// // //WORKING WITH OPERATIONS


// // function add(a,b){
// //     return a+b

// // }

// // function subtract(a,b){
// //     return a-b;
// // }

// // function multiply(a,b){
// //     // let a=1;
// //     // for(let i=0; i<arr.length;i++){
// //     //     a*=arr[i];
// //     // }

// //     // return arr.reduce((accumulator,currentValue)=>accumulator*currentValue)
// //     return a*b;
// // }


// // function divide(a,b){
// //     return a/b;
// // }

// // function operator(operator,a,b){
// //     switch(operator){
// //         case addOperator:
// //             return add(a,b);
// //             break;
// //         case subtractOperator:
// //             return subtract(a,b);
// //             break;
// //         case timesOperator:
// //             return multiply(a,b);
// //             break;
// //         case divOperator:
// //             return divide(a,b);
// //             break;
// //         default:
// //            alert("Wrong Operator");
// //     }
// // }