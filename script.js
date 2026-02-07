document.addEventListener("DOMContentLoaded", function () {

    function textBreak() {
        var h1 = document.querySelector("h1");
        var h1text = h1.textContent;

        var splittedText = h1text.split("");
        var halfvalue = Math.floor(splittedText.length / 2);

        var clutter = "";

        splittedText.forEach(function (e, idx) {
            if (idx < halfvalue) {
                clutter += `<span class="a">${e}</span>`;
            } else {
                clutter += `<span class="b">${e}</span>`;
            }
        });

        h1.innerHTML = clutter;
    }

    textBreak();

    gsap.from("h1 .a", {
        y: 50,
        duration: 0.6,
        delay: 0.5,
        opacity: 0,
        stagger: 0.15,
    });
    gsap.from("h1 .b", {
        y: 50,
        duration: 0.6,
        delay: 0.5,
        opacity: 0,
        stagger: -0.15,
    });

});
