
const face = document.getElementById("face");
const coder = document.getElementById("coder");
const designer = document.getElementById("designer");
const faceImg = document.getElementById("face-img");

const defaultImg = "assests/about.jpg";
const designerImg = "assests/colored_face.png";
const coderImg = "assests/simple_face.png"; // use different if needed

face.addEventListener("mousemove", (e) => {
  const faceRect = face.getBoundingClientRect();
  const x = e.clientX - faceRect.left;
  const width = faceRect.width;

  if (x < width / 2) {
    // Hovering on designer side
    coder.style.opacity = 0;
    designer.style.opacity = 1;
    faceImg.src = designerImg;
  } else {
    // Hovering on coder side
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