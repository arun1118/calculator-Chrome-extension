const heading=document.getElementById('heading');
heading.innerHTML="Enter two numbers";

const num1input=document.getElementById('num1');
const num2input=document.getElementById('num2');
const calculateBtn=document.getElementById('calculateBtn');
const answerArea=document.getElementById('answerArea');
const calType=document.getElementById('calType');
const addBtn=document.getElementById('addBtn');
const subBtn=document.getElementById('subBtn');
const mulBtn=document.getElementById('mulBtn');
const divBtn=document.getElementById('divBtn');

let calculateType="";
calType.innerHTML=calculateType;

const allBtns=document.querySelectorAll('.btn');

allBtns.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        calculateType=btn.innerHTML;
        calType.innerHTML=calculateType;
    })
})

function calculate(){
    let num1=Number(num1input.value);
    let num2=Number(num2input.value);
    let ans=0;
    switch(calculateType){
        case '+' :
            ans=num1+num2;
            break;
        case '-' :
            ans=num1-num2;
            break;
        case 'x' :
            ans=num1*num2;
            break;
        case '/' :
            ans=num1/num2;
            break;
    }
    answerArea.innerHTML=`Result is ${ans}`;
}

calculateBtn.addEventListener('click',()=>{
    calculate();
})

// const getJoke=async()=>{

// }

// window.addEventListener('load',()=>{
//     getJoke();
// })