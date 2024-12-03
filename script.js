function section1() {
  let tl = gsap.timeline();

  tl.from("nav h1, nav li, nav button", {
    y: -30,
    duration: 0.6,
    stagger: 0.2,
    opacity: 0,
  });

  tl.from(
    ".main-sec-1 h1",
    {
      x: -100,
      duration: 0.4,
      opacity: 0,
    },
    "-=0.5"
  );

  tl.from(".main-sec-1 p", {
    x: -100,
    duration: 0.35,
    opacity: 0,
  });

  tl.from(".main-sec-1 a", {
    duration: 0.37,
    opacity: 0,
  });

  tl.from(
    ".main-sec-2 img",
    {
      duration: 0.5,
      opacity: 0,
    },
    "-=0.5"
  );

  // * The "-=0.5" in the context of a GSAP timeline means that the animation should start 0.5 seconds earlier than the previous animation in the timeline.

  tl.from(".section-1-bottom img", {
    opacity: 0,
    y: 30,
    duration: 0.4,
    stagger: 0.15,
  });
}

function section2() {
  //* Section-2

  let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".section-2",
      scroller: "body",
    //   markers: true,
      start: "top 50%",
      end: "top -50%", //the animation will end when the top of the .section-2 element is 50% of the viewport height above the viewport (i.e., out of view above).
      scrub: 2,
    },
  });

  // * Section2- services

  tl2.from(".section-2-subSec-1", {
    y: 30,
    opacity: 0,
    duration: 0.5,
  });

  // * Section2- card

  tl2.from(
    "#card-1",
    {
      opacity: 0,
      x: -300,
      duration: 0.7,
    },
    "anim1"
  );

  tl2.from(
    "#card-2",
    {
      opacity: 0,
      x: 300,
      duration: 0.7,
    },
    "anim1"
  );

//   * The "anim1" string in the tl2.from calls is a label. Labels in GSAP timelines allow you to synchronize animations by marking specific points on the timeline.  Both animations for #card-1 and #card-2 will start at the same time because they share the "anim1" label. Without the label, these animations would be added sequentially, meaning #card-2 would animate only after #card-1 is complete.

  tl2.from(
    "#card-3",
    {
      opacity: 0,
      x: -100,
      duration: 0.7,
    },
    "anim2"
  );

  tl2.from(
    "#card-4",
    {
      opacity: 0,
      x: 100,
      duration: 0.7,
    },
    "anim2"
  );
}

function section3() {
  let tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".last-section",
      scroller: "body",
      markers: true,
      start: "top 50%",
      end: "top -50%",
      scrub: 2,
    },
  });

  tl3.from(".last-section-subSec-1 h3", {
    opacity: 0,
    x: -50,
    duration: 0.3
  });

  tl3.from(".last-section-subSec-1 p", {
    opacity: 0,
    x: -40,
    duration: 0.2,
  }, "-=0.2")

  tl3.from(".last-section-subSec-1 a", {
    opacity: 0,
    duration: 0.7,
  }, "-=0.2")

  tl3.from(".last-section-subSec-1 img", {
    opacity: 0,
    duration: 0.6 ,
  }, "-=0.6")

  tl3.from(".last-section-subSec-2", {
    y: 30,
    opacity: 0,
    duration: 0.5,
  });

  tl3.from(".last-section-subSec-3 .box", {
    y: 60,
    opacity: 0,
    duration: 0.5,
  });
}

section1();
section2();
section3();
