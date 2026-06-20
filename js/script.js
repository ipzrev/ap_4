gsap.to(".word", {
  y: 0,
  duration: 1.2,
  ease: "power4.out",
  stagger: 0.15,
});

const btn = document.querySelector(".menu-btn");
const overlay = document.querySelector(".menu-overlay");
const links = document.querySelectorAll(".menu-nav a");

gsap.set(overlay, {
  clipPath: "inset(0 0 100% 0)",
});

gsap.set(links, {
  y: 50,
  opacity: 0,
});

const tl = gsap.timeline({ paused: true });

tl.to(overlay, {
  clipPath: "inset(0 0 0% 0)",
  duration: 0.9,
  ease: "power4.inOut",
}).to(
  links,
  {
    y: 0,
    opacity: 1,
    stagger: 0.08,
    duration: 0.6,
    ease: "power3.out",
  },
  "-=0.3",
);

let open = false;

btn.addEventListener("click", () => {
  open = !open;

  if (open) {
    tl.play();
  } else {
    tl.reverse();
  }
});
