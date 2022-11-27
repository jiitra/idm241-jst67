document
  .querySelector("#trigger-overlay")
  .addEventListener("click", function () {
    document.querySelector(".overlay").classList.add("open");
  });

document.querySelector(".overlay-close").addEventListener("click", function () {
  document.querySelector(".overlay").classList.remove("open");
});

var about = document.querySelector("#about");
var resume = document.querySelector("#resume");
var contact = document.querySelector("#contact");

about.addEventListener("click", function () {
  about.querySelector(".underline").classList.add("active");
  document.querySelector(".overlay").style.transition = "all 0.5s";
  document.querySelector(".overlay").style.background = "#87ECEC";
});

resume.addEventListener("click", function () {
  resume.querySelector(".underline").classList.add("active");
  document.querySelector(".overlay").style.transition = "all 0.5s";
  document.querySelector(".overlay").style.background = "#FDD867";
});

contact.addEventListener("click", function () {
  contact.querySelector(".underline").classList.add("active");
  document.querySelector(".overlay").style.transition = "all 0.5s";
  document.querySelector(".overlay").style.background = "#F8D0E5";
});

function delay(URL) {
  setTimeout(function () {
    window.location = URL;
  }, 1000);
}
