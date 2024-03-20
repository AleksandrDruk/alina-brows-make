//Реализация preloader
window.onload = function () {
  var preloader = document.getElementById("heart-box");
  preloader.classList.add("fadeOut");

  setTimeout(function () {
    preloader.style.display = "none";
  }, 800);
};
