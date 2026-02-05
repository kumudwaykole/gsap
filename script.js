var main = document.querySelector("#main")
var cursor = document.querySelector("#cursor")
var imgdiv = document.querySelector("#image")

window.addEventListener("mousemove", function(dets){
   gsap.to(cursor,{
    x: dets.clientX,
    y: dets.clientY,
    duration: 1,
    ease: "back.out",
   })
})

imgdiv.addEventListener("mouseenter", function(){
    cursor.innerHTML = 'View more'

    gsap.to(cursor, {
        scale:4,
        backgroundColor: "fffffff8a"
    })
})


imgdiv.addEventListener("mouseleave", function () {
    cursor.innerHTML = ""
    gsap.to(cursor, {
        scale: 1,
        backgroundColor: "fff"

    })
})