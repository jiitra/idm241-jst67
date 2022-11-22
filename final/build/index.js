document
  .querySelector("#trigger-overlay")
  .addEventListener("click", function () {
    document.querySelector(".overlay").classList.add("open");
  });
document.querySelector(".overlay-close").addEventListener("click", function () {
  document.querySelector(".overlay").classList.remove("open");
});

var resume = document.querySelector("#resume");
var about = document.querySelector("#about");
var contact = document.querySelector("#contact");
let color;

resume.addEventListener('click', function() {
  document.querySelector(".overlay").style.background = "red";
});

about.addEventListener('click', function() {
  document.querySelector(".overlay").style.background = "blue";
});

contact.addEventListener('click', function() {
  document.querySelector(".overlay").style.background = "orange";
});

function delay(URL) {
  setTimeout(function () {
    window.location = URL;
  }, 1000);
}
