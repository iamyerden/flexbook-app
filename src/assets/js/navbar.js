window.addEventListener("scroll", function check() {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});
