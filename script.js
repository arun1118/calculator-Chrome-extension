const num1input=document.getElementById('num1');
const num2input=document.getElementById('num2');
const result=document.getElementById('result');
const calType=document.getElementById('calType');

const calculateBtn=document.getElementById('calculateBtn');

const allBtns=document.querySelectorAll('.btn');
allBtns.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        calType.value=btn.innerHTML;
    })
})

function add(num1,num2){
    return num1+num2;
}
function sub(num1,num2){
    return num1-num2;
}
function mul(num1,num2){
    return num1*num2;
}
function div(num1,num2){
    return (num1/num2).toFixed(2);
}
function pow(num1,num2){
    return Math.pow(num1,num2);
}
function fact(num){
    if(num===0) return 1;
    let ans=1;
    for(var i=1;i<=num;i++){
        ans=ans*i;
    }
    return ans;
}
function permute(num1,num2){
    if(num2>num1) return 0;
    let numerator=fact(num1);
    let denominator=fact(num1-num2);
    return numerator/denominator;
}
function combine(num1,num2){
    if(num2>num1) return 0;
    let numerator=fact(num1);
    let denominator=fact(num2)*fact(num1-num2);
    return numerator/denominator;
}

function calculate(){
    let num1=Number(num1input.value);
    let num2=Number(num2input.value);
    let ans=0;
    let calculateType=calType.value;
    switch(calculateType){
        case '+' :
            ans=add(num1,num2);
            break;
        case '-' :
            ans=sub(num1,num2);
            break;
        case 'x' :
            ans=mul(num1,num2);
            break;
        case '/' :
            ans=div(num1,num2);
            break;
        case '^' :
            ans=pow(num1,num2);
            break;
        case 'P' :
            ans=permute(num1,num2);
            break;
        case 'C' :
            ans=combine(num1,num2);
            break;
    }
    result.value=ans;
}

calculateBtn.addEventListener('click',()=>{
    calculate();
})