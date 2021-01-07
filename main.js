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
var number = 0;
var span = document.querySelector('span');
var plus = document.getElementById('plus');
var minus = document.getElementById('minus');

plus.addEventListener('click', function () {
    span.textContent = number++;
});

minus.addEventListener('click', function (){
    span.textContent = number--;
});
