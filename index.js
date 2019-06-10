$(function () { // wait for document ready
        // init
        var controller = new ScrollMagic.Controller();

        // define movement of panels
        var wipeAnimation = new TimelineMax()
            .fromTo(".section.two",    1, {y:  "100%"}, {y: "0%", ease: Linear.easeNone})  // in from right
            .fromTo(".section.three", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone}) // in from top
            .fromTo(".section.four", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone})
            .fromTo(".section.five", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone})
            .fromTo(".section.six", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone})
            .fromTo(".section.seven", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone})
            .fromTo(".section.eight", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone})
            .fromTo(".section.nine", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone})
            .fromTo(".section.ten", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone})
            .fromTo(".section.eleven", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone})
            .fromTo(".section.twelve", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone})
            .fromTo(".section.thirteen", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone})
            .fromTo(".section.fourteen", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone})
            .fromTo(".section.fifteen", 1, {y: "100%"}, {y: "0%", ease: Linear.easeNone}); // in from top

        // create scene to pin and link animation
        new ScrollMagic.Scene({
                triggerElement: ".sections",
                triggerHook: "onLeave",
                duration: "300%"
            })
            .setPin(".sections")
            .setTween(wipeAnimation)
            // add indicators (requires plugin)
            .addTo(controller);
    });

Resources

