// Face hover logic
const face = document.getElementById("face");
const coder = document.getElementById("coder");
const designer = document.getElementById("designer");
const faceImg = document.getElementById("face-img");

const defaultImg = "assests/demo1.png";
const designerImg = "assests/colored_face.png";
const coderImg = "assests/simple_face1.png";

face.addEventListener("mousemove", (e) => {
  const faceRect = face.getBoundingClientRect();
  const x = e.clientX - faceRect.left;
  const width = faceRect.width;

  if (x < width / 2) {
    coder.style.opacity = 0;
    designer.style.opacity = 1;
    faceImg.src = designerImg;
  } else {
    designer.style.opacity = 0;
    coder.style.opacity = 1;
    faceImg.src = coderImg;
  }
});

face.addEventListener("mouseleave", () => {
  coder.style.opacity = 1;
  designer.style.opacity = 1;
  faceImg.src = defaultImg;
});

window.addEventListener("load", () => {
  document.querySelector(".navbar").classList.add("active");
  document.querySelector(".slide-from-left").classList.add("active");
  document.querySelector(".slide-from-right").classList.add("active");
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const overlay = document.querySelector('.overlay');
const closeMenu = document.querySelector('.close-menu');

menuToggle.addEventListener('click', () => {
  mobileMenu.classList.add('active');
  overlay.classList.add('active');
});

closeMenu.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
  overlay.classList.remove('active');
});

overlay.addEventListener('click', () => {
  mobileMenu.classList.remove('active');
  overlay.classList.remove('active');
});


