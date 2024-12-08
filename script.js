let sec5 = document.querySelector("#sec5");
let btn1 = document.getElementsByClassName("btn1");
let menu = document.getElementsByClassName("menu");
let visa = document.querySelectorAll(".visa");
let ss = document.querySelectorAll(".ss");
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
let alertt = document.querySelector(".alert");
let totalPrice = document.querySelector(".totalPrice");
let finalCount = document.querySelector(".finalCount");
let hiddenCardBtn = document.querySelector(".hiddenCardBtn");




let burger1={
    name:"Fire Blaze",
    price:45,
    src:"./imgs/burger (2).png"
};
let burger2={
    name:"Cheesy Crunch",
    price:34,
    src:"./imgs/burger (3).png"
};
let burger3={
    name:"Green Crunch",
    price:29,
    src:"./imgs/burger (4).png"
};
let burger4={
    name:"Classic Bite",
    price:30,
    src:"./imgs/burger (5).png"
};
let burger5={
    name:"Tower Feast",
    price:42,
    src:"./imgs/burger (6).png"
};
let burger6={
    name:"Zesty Treat",
    price:36,
    src:"./imgs/burger (13).png"
};
img1.src=burger1.src;
img2.src=burger2.src;
img3.src=burger3.src;
img4.src=burger4.src;
img5.src=burger5.src;
img6.src=burger6.src;

function sumArray(numbers){
    return numbers.reduce((accumulator,currentValue) => accumulator + currentValue,0);
}

let lastPrice2=0;
let count = 0;


let cartN=0;
let cartN2=0;

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
    newOrderH3.innerHTML=burger1.name;
    newOrderP.innerHTML="$"+burger1.price;
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
    cartN++;
    cartN2++;
    cartNum.innerHTML=cartN;
    hiddenCardBtn.querySelector("div").innerHTML=cartN2;
    divv.addEventListener("click",function(){
        newOrderDiv.style.display="none";
        cartN--;
        cartN2--;
        cartNum.innerHTML=cartN;
        hiddenCardBtn.querySelector("div").innerHTML=cartN2;
        lastPrice2 -= burger1.price;
        totalPrice.innerHTML = lastPrice2  + " "+ "$";
        count--;
        finalCount.innerHTML = count;
    })

    lastPrice2 += burger1.price;
    totalPrice.innerHTML = lastPrice2 + " "+ "$";
    count++;
    finalCount.innerHTML = count;
    
    // console.log(lastPrice2);

    showAlert()

    // console.log(lastPrice);
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
    newOrderH3.innerHTML=burger2.name;
    newOrderP.innerHTML="$"+burger2.price;
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
    cartN++;
    cartN2++;
    hiddenCardBtn.querySelector("div").innerHTML=cartN2;
    cartNum.innerHTML=cartN;
    divv.addEventListener("click",function(){
        newOrderDiv.style.display="none";
        cartN--;
        cartN2--;
        hiddenCardBtn.querySelector("div").innerHTML=cartN2;
        cartNum.innerHTML=cartN;
        lastPrice2 -= burger2.price;
        totalPrice.innerHTML = lastPrice2  + " "+ "$";
        count--;
        finalCount.innerHTML = count;
    })

    lastPrice2 += burger2.price;
    totalPrice.innerHTML = lastPrice2  + " "+ "$";
    count++;
    finalCount.innerHTML = count;

    showAlert()
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
    newOrderH3.innerHTML=burger3.name;
    newOrderP.innerHTML="$"+burger3.price;
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
    cartN++;
    cartN2++;
    hiddenCardBtn.querySelector("div").innerHTML=cartN2;
    cartNum.innerHTML=cartN;
    divv.addEventListener("click",function(){
        newOrderDiv.style.display="none";
        cartN--;
        cartN2--;
        hiddenCardBtn.querySelector("div").innerHTML=cartN2;
        cartNum.innerHTML=cartN;
        lastPrice2 -= burger3.price;
        totalPrice.innerHTML = lastPrice2  + " "+ "$";
        count--;
        finalCount.innerHTML = count;
    })

    lastPrice2 += burger3.price;
    totalPrice.innerHTML = lastPrice2  + " "+ "$";
    count++;
    finalCount.innerHTML = count;

    showAlert()
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
    newOrderH3.innerHTML=burger4.name;
    newOrderP.innerHTML="$"+burger4.price;
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
    cartN++;
    cartN2++;
    hiddenCardBtn.querySelector("div").innerHTML=cartN2;
    cartNum.innerHTML=cartN;
    divv.addEventListener("click",function(){
        newOrderDiv.style.display="none";
        cartN--;
        cartN2--;
        hiddenCardBtn.querySelector("div").innerHTML=cartN2;
        cartNum.innerHTML=cartN;
        lastPrice2 -= burger4.price;
        totalPrice.innerHTML = lastPrice2  + " "+ "$";
        count--;
        finalCount.innerHTML = count;
    })

    lastPrice2 += burger4.price;
    totalPrice.innerHTML = lastPrice2  + " "+ "$";
    count++;
    finalCount.innerHTML = count;

    showAlert()
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
    newOrderH3.innerHTML=burger5.name;
    newOrderP.innerHTML= "$"+burger5.price;
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
    cartN++;
    cartN2++;
    hiddenCardBtn.querySelector("div").innerHTML=cartN2;
    cartNum.innerHTML=cartN;
    divv.addEventListener("click",function(){
        newOrderDiv.style.display="none";
        cartN--;
        cartN2--;
        hiddenCardBtn.querySelector("div").innerHTML=cartN2;
        cartNum.innerHTML=cartN;
        lastPrice2 -= burger5.price;
        totalPrice.innerHTML = lastPrice2  + " "+ "$";
        count--;
        finalCount.innerHTML = count;
    })

    lastPrice2 += burger5.price;
    totalPrice.innerHTML = lastPrice2  + " "+ "$";
    count++;
    finalCount.innerHTML = count;

    showAlert()
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
    newOrderH3.innerHTML=burger6.name;
    newOrderP.innerHTML= "$"+burger6.price;
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
    cartN++;
    cartN2++;
    hiddenCardBtn.querySelector("div").innerHTML=cartN2;
    cartNum.innerHTML=cartN;
    divv.addEventListener("click",function(){
        newOrderDiv.style.display="none";
        cartN--;
        cartN2--;
        hiddenCardBtn.querySelector("div").innerHTML=cartN2;
        cartNum.innerHTML=cartN;
        cartNum.style.animation="plus 1s liner"
        lastPrice2 -= burger6.price;
        totalPrice.innerHTML = lastPrice2  + " "+ "$";
        count--;
        finalCount.innerHTML = count;
    })

    lastPrice2 += burger6.price;
    totalPrice.innerHTML = lastPrice2  + " "+ "$";
    count++;
    finalCount.innerHTML = count;

    showAlert()
})

function openCart(){
    sec5.classList.toggle("openCart");
    document.body.classList.toggle("disableScroll");
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

// document.addEventListener('DOMContentLoaded', () => {


    document.querySelectorAll('.visa').forEach(div => {
        div.addEventListener('click', () => {
            document.querySelectorAll('.visa').forEach(item => {
                item.classList.remove('visaActive');
            });
            div.classList.add('visaActive');
        });
    });


// });


function showAlert(){
    alertt.style.top="80px";
    setTimeout(function(){
        alertt.style.top="-200px"; 
    },2000)
}
