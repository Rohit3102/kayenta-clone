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
var page = document.querySelector(".page3");
var vd = document.querySelector(".page3 video");


page.addEventListener("mousemove", function(dets){
    
    crsr.style.left = dets.x + "px"
    crsr.style.top = dets.y + "px"
});

page.addEventListener("mouseenter", function(){
    crsr.style.opacity = 1
    vd.style.opacity = 1
})

page.addEventListener("mouseleave", function(){
    crsr.style.opacity = 0
    vd.style.opacity = 0
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
    y: "-380vh"
});

