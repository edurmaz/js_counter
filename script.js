let myBtn1 = document.querySelector(".btn1")
let myBtn2 = document.querySelector(".btn2")
let div = document.querySelector(".coun");

let count = 0;
div.classList.add("counter")
myBtn1.addEventListener("click" ,function (event) {
    count += 1;
    div.innerHTML = count;
    div.style.font="50px"
    
    
})
myBtn2.addEventListener("click", function (event) {
    count -= 1;
    div.innerHTML = count;
})