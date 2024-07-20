let sec5 = document.querySelector("#sec5");
let btn1 = document.getElementsByClassName("btn1");
let menu = document.getElementsByClassName("menu");
let cartBtn = document.querySelector("cartBtn");
let cartNum = document.querySelector(".cartNum");
let order = document.querySelectorAll(".order");
let click1 = document.querySelector(".click1");
let click2 = document.querySelector(".click2");
let click3 = document.querySelector(".click3");
let click4 = document.querySelector(".click4");
let click5 = document.querySelector(".click5");
let click6 = document.querySelector(".click6");
let foodCountDiv = document.querySelector(".foodCountDiv");
let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");
let img3 = document.querySelector(".img3");
let img4 = document.querySelector(".img4");
let img5 = document.querySelector(".img5");
let img6 = document.querySelector(".img6");
let dot = document.querySelectorAll(".dot");

let cartN=0;

click1.addEventListener('click',function(){
    let newOrderDiv = document.createElement("div");
    let newOrderImg = document.createElement("img");
    let newOrderH3 = document.createElement("h3");
    let newOrderP = document.createElement("p");
    let newOrderI = document.createElement("i");
    let newOrderInput = document.createElement("input");
    let divv = document.createElement("div");
    newOrderDiv.classList.add("order");
    newOrderImg.src=img1.src;
    newOrderH3.innerHTML="Burger 1";
    newOrderP.innerHTML="$34";
    newOrderInput.type="number";
    newOrderInput.min="1";
    newOrderInput.value="1";
    newOrderI.classList.add("closeIcon","fa-solid","fa-xmark");
    divv.classList.add("x");
    foodCountDiv.appendChild(newOrderDiv);
    newOrderDiv.appendChild(newOrderImg);
    newOrderDiv.appendChild(newOrderH3);
    newOrderDiv.appendChild(newOrderP);
    divv.appendChild(newOrderI);
    newOrderDiv.appendChild(divv);
    newOrderDiv.appendChild(newOrderInput);
    divv.addEventListener("click",function(){
        newOrderDiv.style.display="none";
        cartN--;
        cartNum.innerHTML=cartN;
    })
})
click2.addEventListener('click',function(){
    let newOrderDiv = document.createElement("div");
    let newOrderImg = document.createElement("img");
    let newOrderH3 = document.createElement("h3");
    let newOrderP = document.createElement("p");
    let newOrderI = document.createElement("i");
    let divv = document.createElement("div");
    let newOrderInput = document.createElement("input");
    newOrderDiv.classList.add("order");
    newOrderImg.src=img2.src;
    newOrderH3.innerHTML="Burger 2";
    newOrderP.innerHTML="$34";
    newOrderInput.type="number";
    newOrderInput.min="1";
    newOrderInput.value="1";
    newOrderI.classList.add("closeIcon","fa-solid","fa-xmark");
    divv.classList.add("x");
    foodCountDiv.appendChild(newOrderDiv);
    newOrderDiv.appendChild(newOrderImg);
    newOrderDiv.appendChild(newOrderH3);
    newOrderDiv.appendChild(newOrderP);
    newOrderDiv.appendChild(newOrderI);
    divv.appendChild(newOrderI);
    newOrderDiv.appendChild(newOrderInput);
    newOrderDiv.appendChild(divv);
    divv.addEventListener("click",function(){
        newOrderDiv.style.display="none";
        cartN--;
        cartNum.innerHTML=cartN;
    })
})
click3.addEventListener('click',function(){
    let newOrderDiv = document.createElement("div");
    let newOrderImg = document.createElement("img");
    let newOrderH3 = document.createElement("h3");
    let newOrderP = document.createElement("p");
    let newOrderI = document.createElement("i");
    let divv = document.createElement("div");
    let newOrderInput = document.createElement("input");
    newOrderDiv.classList.add("order");
    newOrderImg.src=img3.src;
    newOrderH3.innerHTML="Burger 3";
    newOrderP.innerHTML="$34";
    newOrderInput.type="number";
    newOrderInput.min="1";
    newOrderInput.value="1";
    newOrderI.classList.add("closeIcon","fa-solid","fa-xmark");
    divv.classList.add("x");
    foodCountDiv.appendChild(newOrderDiv);
    newOrderDiv.appendChild(newOrderImg);
    newOrderDiv.appendChild(newOrderH3);
    newOrderDiv.appendChild(newOrderP);
    divv.appendChild(newOrderI);
    newOrderDiv.appendChild(newOrderI);
    newOrderDiv.appendChild(newOrderInput);
    newOrderDiv.appendChild(divv);
    divv.addEventListener("click",function(){
        newOrderDiv.style.display="none";
        cartN--;
        cartNum.innerHTML=cartN;
    })
})
click4.addEventListener('click',function(){
    let newOrderDiv = document.createElement("div");
    let newOrderImg = document.createElement("img");
    let newOrderH3 = document.createElement("h3");
    let newOrderP = document.createElement("p");
    let newOrderI = document.createElement("i");
    let divv = document.createElement("div");
    let newOrderInput = document.createElement("input");
    newOrderDiv.classList.add("order");
    newOrderImg.src=img4.src;
    newOrderH3.innerHTML="Burger 4";
    newOrderP.innerHTML="$34";
    newOrderInput.type="number";
    newOrderInput.min="1";
    newOrderInput.value="1";
    newOrderI.classList.add("closeIcon","fa-solid","fa-xmark");
    divv.classList.add("x");
    foodCountDiv.appendChild(newOrderDiv);
    newOrderDiv.appendChild(newOrderImg);
    newOrderDiv.appendChild(newOrderH3);
    newOrderDiv.appendChild(newOrderP);
    divv.appendChild(newOrderI);
    newOrderDiv.appendChild(newOrderI);
    newOrderDiv.appendChild(newOrderInput);
    newOrderDiv.appendChild(divv);
    divv.addEventListener("click",function(){
        newOrderDiv.style.display="none";
        cartN--;
        cartNum.innerHTML=cartN;
    })
})
click5.addEventListener('click',function(){
    let newOrderDiv = document.createElement("div");
    let newOrderImg = document.createElement("img");
    let newOrderH3 = document.createElement("h3");
    let newOrderP = document.createElement("p");
    let newOrderI = document.createElement("i");
    let divv = document.createElement("div");
    let newOrderInput = document.createElement("input");
    newOrderDiv.classList.add("order");
    newOrderImg.src=img5.src;
    newOrderH3.innerHTML="Burger 5";
    newOrderP.innerHTML="$34";
    newOrderInput.type="number";
    newOrderInput.min="1";
    newOrderInput.value="1";
    newOrderI.classList.add("closeIcon","fa-solid","fa-xmark");
    divv.classList.add("x");
    foodCountDiv.appendChild(newOrderDiv);
    newOrderDiv.appendChild(newOrderImg);
    newOrderDiv.appendChild(newOrderH3);
    newOrderDiv.appendChild(newOrderP);
    divv.appendChild(newOrderI);
    newOrderDiv.appendChild(newOrderI);
    newOrderDiv.appendChild(newOrderInput);
    newOrderDiv.appendChild(divv);
    divv.addEventListener("click",function(){
        newOrderDiv.style.display="none";
        cartN--;
        cartNum.innerHTML=cartN;
    })
})
click6.addEventListener('click',function(){
    let newOrderDiv = document.createElement("div");
    let newOrderImg = document.createElement("img");
    let newOrderH3 = document.createElement("h3");
    let newOrderP = document.createElement("p");
    let newOrderI = document.createElement("i");
    let divv = document.createElement("div");
    let newOrderInput = document.createElement("input");
    newOrderDiv.classList.add("order");
    newOrderImg.src=img6.src;
    newOrderH3.innerHTML="Burger 6";
    newOrderP.innerHTML="$34";
    newOrderInput.type="number";
    newOrderInput.min="1";
    newOrderInput.value="1";
    newOrderI.classList.add("closeIcon","fa-solid","fa-xmark");
    divv.classList.add("x");
    foodCountDiv.appendChild(newOrderDiv);
    newOrderDiv.appendChild(newOrderImg);
    newOrderDiv.appendChild(newOrderH3);
    newOrderDiv.appendChild(newOrderP);
    divv.appendChild(newOrderI);
    newOrderDiv.appendChild(newOrderI);
    newOrderDiv.appendChild(newOrderInput);
    newOrderDiv.appendChild(divv);
    divv.addEventListener("click",function(){
        newOrderDiv.style.display="none";
        cartN--;
        cartNum.innerHTML=cartN;
        cartNum.style.animation="plus 1s liner"
    })
})

function openCart(){
    sec5.classList.toggle("openCart")
}

setInterval(function(){
    let a = document.getElementsByClassName("a");
    if(window.scrollY > 800){
        a[0].classList.remove("navActive");
        a[1].classList.add("navActive");
        a[2].classList.remove("navActive");
        a[3].classList.remove("navActive");
        dot[1].classList.add("dotActive");
        dot[0].classList.remove("dotActive");
        dot[2].classList.remove("dotActive");
        dot[3].classList.remove("dotActive");
    }else if(window.scrollY < 600){
        a[0].classList.add("navActive");
        a[1].classList.remove("navActive");
        a[2].classList.remove("navActive");
        a[3].classList.remove("navActive");
        dot[1].classList.remove("dotActive");
        dot[0].classList.add("dotActive");
        dot[2].classList.remove("dotActive");
        dot[3].classList.remove("dotActive");
    }
    if(window.scrollY > 2000){
        a[0].classList.remove("navActive");
        a[1].classList.remove("navActive");
        a[2].classList.remove("navActive");
        a[3].classList.add("navActive");
        dot[1].classList.remove("dotActive");
        dot[0].classList.remove("dotActive");
        dot[2].classList.add("dotActive");
        dot[3].classList.remove("dotActive");
    }
    if(window.scrollY > 2800){
        dot[1].classList.remove("dotActive");
        dot[0].classList.remove("dotActive");
        dot[2].classList.remove("dotActive");
        dot[3].classList.add("dotActive");
    }
},100)

for(i=0;i<=btn1.length;i++){
    btn1[i].onclick=function(){
        cartN++;
        cartNum.innerHTML=cartN;
    }
}
