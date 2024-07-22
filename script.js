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
let b1 =false;
let b2 =false;
let b3 =false;
let b4 =false;
let b5 =false;
let b6 =false;



let burger1={
    name:"Burger1",
    price:45,
};
let burger2={
    name:"Burger2",
    price:34,
};
let burger3={
    name:"Burger3",
    price:29,
};
let burger4={
    name:"Burger4",
    price:30,
};
let burger5={
    name:"Burger5",
    price:42,
};
let burger6={
    name:"Burger6",
    price:36,
};

function sumArray(numbers){
    return numbers.reduce((accumulator,currentValue) => accumulator + currentValue,0);
}

let lastPrice=[];
let totlaPrice = sumArray(lastPrice);


let cartN=0;

click1.addEventListener('click',function(){
    let newOrderDiv = document.createElement("div");
    let newOrderImg = document.createElement("img");
    let newOrderH3 = document.createElement("h3");
    let newOrderP = document.createElement("p");
    let newOrderI = document.createElement("i");
    let newOrderInput = document.createElement("input");
    let divv = document.createElement("div");
    b1=true;
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
    divv.addEventListener("click",function(){
        newOrderDiv.style.display="none";
        cartN--;
        cartNum.innerHTML=cartN;
    })
    if(b1===true){
        lastPrice.push(burger1.price)
    }
    console.log(lastPrice);
    console.log(totlaPrice);

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
    b2=true;
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
    divv.addEventListener("click",function(){
        newOrderDiv.style.display="none";
        cartN--;
        cartNum.innerHTML=cartN;
    })
    if(b2===true){
        lastPrice.push(burger2.price)
    }
})
click3.addEventListener('click',function(){
    let newOrderDiv = document.createElement("div");
    let newOrderImg = document.createElement("img");
    let newOrderH3 = document.createElement("h3");
    let newOrderP = document.createElement("p");
    let newOrderI = document.createElement("i");
    let divv = document.createElement("div");
    let newOrderInput = document.createElement("input");
    b3=true;
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
    divv.addEventListener("click",function(){
        newOrderDiv.style.display="none";
        cartN--;
        cartNum.innerHTML=cartN;
    })
    if(b3===true){
        lastPrice.push(burger3.price)
    }
})
click4.addEventListener('click',function(){
    let newOrderDiv = document.createElement("div");
    let newOrderImg = document.createElement("img");
    let newOrderH3 = document.createElement("h3");
    let newOrderP = document.createElement("p");
    let newOrderI = document.createElement("i");
    let divv = document.createElement("div");
    let newOrderInput = document.createElement("input");
    b4=true;
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
    divv.addEventListener("click",function(){
        newOrderDiv.style.display="none";
        cartN--;
        cartNum.innerHTML=cartN;
    })
    if(b4===true){
        lastPrice.push(burger4.price)
    }
})
click5.addEventListener('click',function(){
    let newOrderDiv = document.createElement("div");
    let newOrderImg = document.createElement("img");
    let newOrderH3 = document.createElement("h3");
    let newOrderP = document.createElement("p");
    let newOrderI = document.createElement("i");
    let divv = document.createElement("div");
    let newOrderInput = document.createElement("input");
    b5=true;
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
    divv.addEventListener("click",function(){
        newOrderDiv.style.display="none";
        cartN--;
        cartNum.innerHTML=cartN;
    })
    if(b5===true){
        lastPrice.push(burger5.price)
    }
})
click6.addEventListener('click',function(){
    let newOrderDiv = document.createElement("div");
    let newOrderImg = document.createElement("img");
    let newOrderH3 = document.createElement("h3");
    let newOrderP = document.createElement("p");
    let newOrderI = document.createElement("i");
    let divv = document.createElement("div");
    let newOrderInput = document.createElement("input");
    b6=true;
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
    divv.addEventListener("click",function(){
        newOrderDiv.style.display="none";
        cartN--;
        cartNum.innerHTML=cartN;
        cartNum.style.animation="plus 1s liner"
    })
    if(b6===true){
        lastPrice.push(burger6.price)
    }
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
