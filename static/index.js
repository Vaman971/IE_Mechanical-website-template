let circle = document.getElementById("circle");
let upbtn = document.getElementById("upbtn");
let downbtn = document.getElementById("downbtn");
let gear = document.querySelector('.gear');


// let visibility_1 = document.querySelector('.one');
// let visibility_2 = document.querySelector('.two');
// let visibility_two = document.querySelector(".visibility_two");
// let visibility_three = document.querySelector(".visibility_three");
// let visibility_four = document.querySelector(".visibility_four");

// let count = 0;
// var n=1;
// upbtn.addEventListener('click', ()=>{
//     while(true) {
//         if(((4*n)-4)==count){
//             visibility_1.classList.toggle('visibility_one');
//         }
//         else{
//             break;
//         }
//         n++;
//     }
//     count++;
// })
upbtn.addEventListener('click',()=>{
    gearRot = gearValue + "rotate(-90deg)";
    gear.style.transform = gearRot;
    gearValue = gearRot;
})
downbtn.addEventListener('click',()=>{
    gearRot = gearValue + "rotate(90deg)";
    gear.style.transform = gearRot;
    gearValue = gearRot;
})

let gearValue = gear.style.transform;
let gearRot;

let rotateValue = circle.style.transform;
let rotateSum;

upbtn.onclick = () => {
    rotateSum = rotateValue + "rotate(-90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
}
downbtn.onclick = () => {
    rotateSum = rotateValue + "rotate(90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
}

//swiper
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });
