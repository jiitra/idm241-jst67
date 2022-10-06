document.querySelector("#trigger-overlay").addEventListener("click", function () {
	document.querySelector(".overlay").classList.add("open");
});
document.querySelector(".overlay-close").addEventListener("click", function () {
	document.querySelector(".overlay").classList.remove("open");
});