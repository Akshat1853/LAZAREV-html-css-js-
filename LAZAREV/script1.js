function locomotiveAnimation() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
    tablet: { smooth: true },
    smartphone: { smooth: true },
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    // ✅ CRITICAL FIX
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}

function loadingAnimation() {
  var tl = gsap.timeline();

  tl.from("#page1", {
    opacity: 0,
    duration: 0.3,
    delay: 0.2,
  });

  tl.from("#page1", {
    transform: "scaleX(0.7) scaleY(0.2) translateY(80%)",
    borderRadius: "100px",
    duration: 2,
    ease: "expo.out",
  });

  tl.from("#nav", {
    opacity: 0,
    delay: -0.2,
  });

  tl.from("#page1 h1, #page1 p, #page1 div", {
    opacity: 0,
    duration: 0.5,
    stagger: 0.2,
  });
}

function navAnimation() {
  var nav = document.querySelector("nav");

  nav.addEventListener("mouseenter", function () {
    let tl = gsap.timeline();

    tl.to("#nav-bottom", {
      height: "22vh",
      duration: 0.3,
    });
    tl.to(".nav-part2 h5", {
      display: "block",
      duration: 0.2,
    });
    tl.to(".nav-part2 h5 span", {
      y: 0,
      stagger: { amount: 0.1 },
    });
  });

  nav.addEventListener("mouseleave", function () {
    let tl = gsap.timeline();

    tl.to(".nav-part2 h5 span", {
      y: 25,
      stagger: { amount: 0.1 },
    });

    tl.to(".nav-part2 h5", {
      display: "none",
      duration: 0.1,
    });

    tl.to("#nav-bottom", {
      height: 0,
      duration: 0.1,
    });
  });
}

function page3VideoAnimation() {
  var page3Center = document.querySelector(".page3-center");
  var video = document.querySelector("#page3 #video2");

  page3Center.addEventListener("click", function () {
    video.play();

    gsap.to(page3Center, {
      opacity: 0,
      pointerEvents: "none",
      duration: 0.3,
    });

    gsap.to(video, {
      scale: 1,
      opacity: 1,
      borderRadius: 0,
    });
  });

  video.addEventListener("click", function () {
    video.pause();

    gsap.to(page3Center, {
      opacity: 1,
      pointerEvents: "all",
      duration: 0.3,
    });

    gsap.to(video, {
      scale: 0.7,
      opacity: 0,
      borderRadius: "30px",
    });
  });
}

function page4Animation() {
  var sections = document.querySelectorAll(".sec-right");

  sections.forEach((elem) => {
    let video = elem.querySelector("video");

    elem.addEventListener("mouseenter", function () {
      video.style.opacity = 1;
      video.play();
    });

    elem.addEventListener("mouseleave", function () {
      video.style.opacity = 0;
      video.load();
    });
  });
}

function page6Animation() {
  const parts = ["#btm6-part2", "#btm6-part3", "#btm6-part4"];

  parts.forEach((part) => {
    gsap.from(`${part} h4`, {
      x: 100,
      opacity: 0,
      duration: 1,
      stagger: { amount: 0.3 },
      scrollTrigger: {
        trigger: part,
        scroller: ".main", // ✅ correct
        start: "top 80%",
        end: "top 10%",
        scrub: true,
      },
    });
  });
}

window.addEventListener("load", () => {
  locomotiveAnimation();
  loadingAnimation();
  navAnimation();
  page3VideoAnimation();
  page4Animation();
  page6Animation();
});
