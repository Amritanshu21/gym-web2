
var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+30 +"px"
    crsr.style.top = dets.y+"px"
    blur.style.left = dets.x-200 + "px"
    blur.style.top = dets.y -200 + "px"
    
})

var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elem){
    // elem to select all h4 individually
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 3;
        crsr.style.border = "1px solid #fff"
     crsr.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale =1
        crsr.style.border = "0px solid #fff"
        crsr.style.backgroundColor="#fff"
    })
})

gsap.to("#nav",{
    backgroundColor:"black",
   height:"110px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        markers:true, 
        // markers ko de bhi sakte h nahi bhi de sakte h
        start:"top -10%",
        end:"top -11%",
        // transition kaha se start hoga and kaha se end uske liye start and end prop
        scrub:2 //yeh hai for transition of bg color
    }

    
})

gsap.to("#main",{
    // dusre page se video se black bg ke transition ke liye hai yeh following
    backgroundColor:"black",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
       start:"top -25%",
       end:"top -70%",
       scrub:2
    
    
    }
})


gsap.from("#about-us img,#about-us-in",{
    y:50,
    opacity:0,
    duration:1,

    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
    
        start:"top 60%",
        end:"top 55%",
        scrub:3
    }


})
gsap.from(".card",{
    scale:0.8,
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
       
        start:"top 70%",
        end:"top 65%",
        scrub:1
    }


})

gsap.from("#colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 50%",
        end:"top 45%",
        scrub:4
        }
})


gsap.from("#colon2",{
    y:70,
    x:70,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 50%",
        end:"top 45%",
        scrub:4
        }
})

gsap.from("#page4 h1",{
    y:50,
   
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 75%",
        end:"top 70%",
        scrub:3
        }
})