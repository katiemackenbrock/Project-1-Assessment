// let number = 0;
// let countNum = document.getElementById("counter");

// function plus() {
//     number++;
//     countNum.value = num;
//     countNum.innerHTML = number;
// }
// function minus() {
//     number - 
//     countNum.value = num;
//     countNum.innerHTML = number;
// }

// $(function() {
//     var
//         counter = $(#counter);
//         plusBtn = $(#plus);
//         value = $(#counter).html();

//     plusBtn.on("click", function() {
//         counter.html(value ++);
//         console.log(value);
//         return
//     })
// })


//node.textContent source https://developer.mozilla.org/en-US/docs/Web/API/Node/textContent
// var number = 0;
// var span = document.querySelector('span');
// var plus = document.getElementById('plus');
// var minus = document.getElementById('minus');

// plus.addEventListener('click', function () {
//     span.textContent = number++;
// });

// minus.addEventListener('click', function (){
//     span.textContent = number--;
// });

const display = document.getElementById("display");
const input = document.getElementById("num-input");
const plus = document.getElementById("plus");
const minus = document.getElementById("minus");

let num = 0;

function addNum(e) {
    e.preventDefault();
    num += parseInt(input.value);
    display.innerText = num;
}

function subtractNum(e) {
    e.preventDefault();
    num -= parseInt(input.value);
    display.innerText = num;
}

plus.addEventListener("click", (e)=> addNum(e))
minus.addEventListener("click", (e)=> subtractNum(e))