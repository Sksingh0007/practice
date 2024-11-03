let cursor = document.querySelector(".cursor");
let blur = document.querySelector("#blur");

document.addEventListener("mousemove", function(dets){
    cursor.style.left = dets.x + 30 +"px";
    cursor.style.top = dets.y + "px";
    blur.style.left = dets.x - 200 + "px";
    blur.style.top = dets.y - 200 +"px";
});

gsap.to("#nav", {
    backgroundColor: "#000",
    duration: .5,
    height: "120px",
    scrollTrigger:{
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 2,
    }
})

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger: "#main",
        scroller: "body",
        // markers: true,
        start: "top -25%",
        end: "top -75%",
        scrub: 2,
    }
})

let allh4 = document.querySelectorAll("#nav h4");
allh4.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        cursor.classList.add("scale-up");
        cursor.classList.remove("scale-down");
    })
})

allh4.forEach(function(elem){
    elem.addEventListener("mouseleave", function(){
        cursor.classList.add("scale-down");
        cursor.classList.remove("scale-up");
    })
})

let imgGolf = document.querySelector("#golfImg");
imgGolf.addEventListener("mouseenter", function(){
    cursor.classList.add("scale-up");
    cursor.classList.remove("scale-down");
})

imgGolf.addEventListener("mouseleave", function(){
   cursor.classList.add("scale-down");
   cursor.classList.remove("scale-up");
})

gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller: "body",
        start:"top 75%",
        end:"top 70%",
        scrub:2,
    }
})

