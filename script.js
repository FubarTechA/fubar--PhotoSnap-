// "use strict";

const main = document.querySelector("main");
console.log(main.classList.contains("indexMain"));

const app = function () {
  // Element Selectors
  const headerWriteup = document.querySelector(".indHeadWriteup");
  const headerH2 = headerWriteup.querySelector("h2");
  const headerP = headerWriteup.querySelector("p");
  const headerA = headerWriteup.querySelector("a");
  const section1 = document.querySelector(".beautyWriteup");
  const section1H2 = section1.querySelector("h2");
  const section1P = section1.querySelector("p");
  const section1A = section1.querySelector("a");
  const section2 = document.querySelector(".designWriteup");
  const section2H2 = section2.querySelector("h2");
  const section2P = section2.querySelector("p");
  const section2A = section2.querySelector("a");
  const partners = document.querySelector(".indexPartners");
  const partnersIcons = partners.querySelector("div");
  const locate = document.querySelector(".indexLocation");
  const locations = locate.querySelectorAll(".locat");
  const feat = document.querySelector(".indexFeat");
  const overlay = document.querySelector(".overlay");
  const modal = document.querySelector(".modal");
  const invitebtn = document.querySelectorAll(".iv");
  const closeModalIcon = document.querySelector(".fa-x");
  console.log(closeModalIcon);
  console.log(invitebtn);

  // Functions;
  const openModal = function () {
    overlay.classList.remove("hidden");
    modal.classList.remove("hidden");
  };

  const closeModal = function () {
    overlay.classList.add("hidden");
    modal.classList.add("hidden");
  };

  invitebtn.forEach((btn) => btn.addEventListener("click", openModal));
  overlay.addEventListener("click", closeModal);
  closeModalIcon.addEventListener("click", closeModal);

  const displayOnLoad = function (divH2, divP, divA, px = 0) {
    divH2.style.transform = `translateX(-${px}px)`;
    divP.style.transform = `translateX(${px}px)`;
    divA.style.transform = `translateY(${px}px)`;
  };

  const upAndDown = function (e) {
    if (e.target.classList.contains("locat")) {
      const divs = e.target;
      divs.querySelector("div").style.transform = `translateY(${this}px)`;
    }
  };

  const slideIntoView = function (el, num) {
    feat
      .querySelectorAll(`${el}`)
      .forEach((i) => (i.style.transform = `translateY(${num}px)`));
  };

  // Original States (States on Load)
  displayOnLoad(headerH2, headerP, headerA, 700);
  displayOnLoad(section1H2, section1P, section1A, 500);
  displayOnLoad(section2H2, section2P, section2A, 500);

  partnersIcons.style.opacity = 0;

  locations.forEach(
    (l) => (l.querySelector("div").style.transform = "translateY(200px)")
  );

  feat
    .querySelectorAll("i")
    .forEach((i) => (i.style.transform = "translateY(-300px)"));

  feat
    .querySelectorAll(".indexFeatWriteup")
    .forEach((i) => (i.style.transform = "translateY(300px)"));
  partnersIcons.style.opacity = 0;

  // Behaviours
  // window.addEventListener("load", function () {
  //   const display = function () {
  //     // headerWriteup.style.opacity = 1;

  //     displayOnLoad(headerH2, headerP, headerA);
  //   };
  //   this.setTimeout(display, 1000);
  // });

  const headerobsCallback = function (entries, observer) {
    const [entry] = entries;
    // console.log(entry);
    if (entry.isIntersecting) {
      const display = function () {
        headerWriteup.style.opacity = 1;
        displayOnLoad(headerH2, headerP, headerA);
      };

      setTimeout(display, 500);
    } else {
      displayOnLoad(headerH2, headerP, headerA, 700);
    }
  };

  const headerobsOptions = {
    root: null,
    threshold: 1,
  };

  const headerobserver = new IntersectionObserver(
    headerobsCallback,
    headerobsOptions
  );
  headerobserver.observe(headerWriteup);

  const section1obsCallback = function (entries, observer) {
    const [entry] = entries;
    // console.log(entry);
    if (entry.isIntersecting) {
      const display = function () {
        section1.style.opacity = 1;
        displayOnLoad(section1H2, section1P, section1A);
      };

      setTimeout(display, 500);
    } else {
      displayOnLoad(section1H2, section1P, section1A, 500);
    }
  };

  const section1obsOptions = {
    root: null,
    threshold: 0.5,
  };

  const section1observer = new IntersectionObserver(
    section1obsCallback,
    section1obsOptions
  );
  section1observer.observe(section1);

  const section2obsCallback = function (entries, observer) {
    const [entry] = entries;
    // console.log(entry);
    if (entry.isIntersecting) {
      const display = function () {
        section2.style.opacity = 1;
        displayOnLoad(section2H2, section2P, section2A);
      };

      setTimeout(display, 500);
    } else {
      displayOnLoad(section2H2, section2P, section2A, 500);
    }
  };

  const section2obsOptions = {
    root: null,
    threshold: 0.5,
  };

  const section2observer = new IntersectionObserver(
    section2obsCallback,
    section2obsOptions
  );
  section2observer.observe(section2);

  const partnersobsCallback = function (entries, observer) {
    const [entry] = entries;
    // console.log(entry);
    if (entry.isIntersecting) partnersIcons.style.opacity = 1;
    else partnersIcons.style.opacity = 0;
  };

  const partnersobsOptions = {
    root: null,
    threshold: 0.7,
  };

  const partnersobserver = new IntersectionObserver(
    partnersobsCallback,
    partnersobsOptions
  );
  partnersobserver.observe(partners);

  locate.addEventListener("mouseover", upAndDown.bind(0));
  locate.addEventListener("mouseout", upAndDown.bind(200));

  const featobsCallback = function (entries, observer) {
    const [entry] = entries;
    if (entry.isIntersecting) {
      slideIntoView("i", 0);
      slideIntoView(".indexFeatWriteup", 0);
    } else {
      slideIntoView("i", -300);
      slideIntoView(".indexFeatWriteup", 300);
    }
  };

  const featobsOptions = {
    root: null,
    threshold: 0.7,
  };

  const featobserver = new IntersectionObserver(
    featobsCallback,
    featobsOptions
  );
  featobserver.observe(feat);
};

// console.log();

if (main.classList.contains("indexMain")) app();

const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal");
const invitebtn = document.querySelectorAll(".iv");
const closeModalIcon = document.querySelector(".fa-x");

const openModal = function () {
  overlay.classList.remove("hidden");
  modal.classList.remove("hidden");
};

const closeModal = function () {
  overlay.classList.add("hidden");
  modal.classList.add("hidden");
};

invitebtn.forEach((btn) => btn.addEventListener("click", openModal));
overlay.addEventListener("click", closeModal);
closeModalIcon.addEventListener("click", closeModal);

console.log("how e dey be");
