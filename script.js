var initialpath = `M 10 100 Q 500 100 990 100`;
var finalpath = `M 10 100 Q 500 100 990 100`;

var string = document.querySelector("#string")

string.addEventListener("mousemove", function(dets){
    initialpath = `M 10 100 Q ${dets.x} ${dets.y} 990 100`
    gsap.to("svg path", {
        attr:{d:initialpath},    // in the attribute, the path value for y exis has been changed - the Q 500 100 denotes the center of string. 100 value is for center point from y axis
                                // that value is changed according to mouse move
        duration: 0.3,
        ease: "power3.out"
    })
})

string.addEventListener("mouseleave", function(){
    gsap.to("svg path", {
        attr:{d:finalpath},
        duration:0.5,
        ease:"elastic.out(1,0.2)"
    })
})