// gsap.to("#box1", {
//     x:1000,
//     duration:2,
//     delay:1,
//     rotate:360,
//     backgroundColor: "orange",
//     borderRadius: "50%",
  
// })

// gsap.from("#box2", {
//     x:1000,
    
//     duration:2,
//     delay:41
// })

// gsap.from("h1",{
//     color: "pink",
//     opacity: 0,
//     duration: 1,
//     delay:1,
//     y:30,
// })

// gsap.to("#box",{
//     x:1200,
//     duration:1,
//     delay:1,
//     rotate:360,
//     repeat: -1,
//     yoyo: true
// })


// gsap.to("#box", {
//     x: 1500,
//     duration: 1.5,
//     delay: 1,
//     rotate: 360,
// })

// gsap.to("#box1", {
//     x: 1500,
//     backgroundColor: "red",
//     duration: 1.5,
//     delay: 2.5,
//     borderRadius: "50%",
//     rotate: 360,
// })


var tl = gsap.timeline()

tl.from("h2",{
     y:-30,
     opacity:0,
     duration:1,
     delay:0.5
})
tl.from("h4",{
    y:-30,
    opacity:0,
    duration: 1,
    stagger:0.3
})

tl.to("heading",{
    y:-50,
    opacity: 0,
    duration: 1,
    
})