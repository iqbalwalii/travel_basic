const sidebar = document.querySelector(".sidebar");
document
  .querySelector(".toggle")
  .addEventListener("click", () => sidebar.classList.toggle("hidden"));
const img = document.querySelector(".container");
let interval = 0;
setInterval(function () {
  const images = [
    'url("./assets/img/carousel-1.jpg")',
    'url("./assets/img/carousel-2.jpg")',
    'url("./assets/img/carousel-3.jpg")',
    'url("./assets/img/carousel-4.jpg")',
  ];
  if (interval < images.length - 1) {
    interval++;
  } else {
    interval = 0;
  }
  img.style.backgroundImage = images[interval];
}, 5000);
