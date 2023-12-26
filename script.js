var tl = gsap.timeline();

tl.to(".page1 h2", {
    x: "15%",
    scrollTrigger:{
        trigger: ".page1 h1",
        start: "10% 50%",
        end: "top -10%",
        scrub: true
    }
});

tl.to(".page1 h3", {
    x: "-25%",
    scrollTrigger:{
        trigger: ".page1 h1",
        start: "10% 50%",
        end: "top -20%",
        scrub: true
    }
})

var cntn = document.querySelectorAll(".contianers .content");

cntn.forEach(function(val){
    val.addEventListener("mouseenter", function(){
        val.style.backgroundColor = "#706CFF"
        val.style.color = "#fff"
        val.style.width = "50%"
    })


    val.addEventListener("mouseleave", function(){
        val.style.backgroundColor = "#fff"
        val.style.color = "#000"
        val.style.width = "33.9%"
    })
})


var crsr = document.querySelector(".cursor")
const rh = document.querySelector(".rohit")
var page = document.querySelector(".page3");
var vd = document.querySelector(".page3 video");


page.addEventListener("mousemove", function(dets){
    gsap.to(crsr,{
        x: dets.x - 55 + "px",
        y: dets.y - 55 + "px"
    })
});

rh.addEventListener("mouseenter", function(){
    gsap.to(crsr,{
        opacity: 1,
    });
    gsap.to(vd,{
        opacity: 1,
    });
    rh.style.opacity = 0
})

rh.addEventListener("mouseleave", function(){
    gsap.to(vd,{
        opacity: 0,
    })
    gsap.to(crsr,{
        opacity: 0,
    });
    rh.style.opacity = 1
});


gsap.to(".finc  ", {
    scrollTrigger:{
        trigger: ".page5",
        start: "top top",
        end: "bottom bottom",
        pin: true,
        scrub: 1,
        endTrigger: ".last",
    },
    y: "-373vh"
});

