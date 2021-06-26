let pv = document.getElementById('num1');
let i = document.getElementById('num2');
let n = document.getElementById('num3');
let answer = document.querySelector('[answer]');
let btn = document.getElementById('btn');

const fv = function(){
    let ii =Number(i.value)/100;
    let numi = Math.pow((1+ii),Number(n.value));
    let ansi =Number(pv.value)*numi;
    console.log(ansi);
    answer.innerText= ansi;
    answer.style.color='blue';
};
btn.onclick=fv;

///

let fv1 = document.getElementById('num11');
let i1 = document.getElementById('num12');
let n1 = document.getElementById('num13');
let answer1 = document.querySelector('[answer1]');
let btn1 = document.getElementById('btn1');

const pv1 = function(){
    let ii1 =Number(i1.value)/100;
    let numi1 = Math.pow((1+ii1),Number(n1.value));
    let ansi1 =Number(fv1.value)/numi1;
    console.log(ansi1);
    answer1.innerText= ansi1;
    answer1.style.color= 'green';
};
btn1.onclick=pv1;
