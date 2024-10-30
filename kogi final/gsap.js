gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray("span").forEach((span) => {
    ScrollTrigger.create({
        trigger: span,
        start: "top center",                 // Trigger when the top of each span reaches the center of the viewport
        onEnter: () => span.classList.add("blow"),
        onLeave: () => span.classList.remove("blow"),   // Optional: remove the class on scroll out
    });
});