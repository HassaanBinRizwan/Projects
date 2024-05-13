var rect = document.querySelector('#center');

rect.addEventListener('mousemove', function (details) {
    var rectLoc = rect.getBoundingClientRect();
    var insidRect = details.clientX - rectLoc.left;
    if (insidRect < rectLoc.width / 2) {
        var redcolor = gsap.utils.mapRange(0,rectLoc.width / 2, 255, 0, insidRect);
        gsap.to(rect, {
            backgroundColor: `rgb(${redcolor}, 0, 0)`,
            ease: Power4,
    });
    } 
    else
    {
        var bluecolor = gsap.utils.mapRange(rectLoc.width / 2, rectLoc.width, 0, 255, insidRect);
        gsap.to(rect, {
            backgroundColor: `rgb(0, 0, ${bluecolor})`,
            ease: Power4,
    });
}
});

rect.addEventListener('mouseleave', function(){
    gsap.to(rect, {
        backgroundColor: "White"
    })
})