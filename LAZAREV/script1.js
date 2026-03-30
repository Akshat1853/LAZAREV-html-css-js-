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
      stagger: {
        amount: 0.1,
      },
    });
  });

  nav.addEventListener("mouseleave", function () {
    let tl = gsap.timeline();

    tl.to(".nav-part2 h5 span", {
      y: 25,
      stagger: {
        amount: 0.1,
      },
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

    // 🔥 hide button
    gsap.to(page3Center, {
      opacity: 0,
      pointerEvents: "none",
      duration: 0.3,
    });

    gsap.to(video, {
      transform: "scaleX(1) scaleY(1)",
      opacity: 1,
      borderRadius: 0,
    });
  });

  video.addEventListener("click", function () {
    video.pause();

    // 🔥 show button again
    gsap.to(page3Center, {
      opacity: 1,
      pointerEvents: "all",
      duration: 0.3,
    });

    gsap.to(video, {
      transform: "scaleX(0.7) scaleY(0)",
      opacity: 0,
      borderRadius: "30px",
    });
  });
}

navAnimation();
page3VideoAnimation();