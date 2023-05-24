document.getElementById("autoplay").play();

const scrollBtn = document.getElementById("scrollTop");
window.addEventListener("scroll", toggleVisibility);
function toggleVisibility() {
  if (window.pageYOffset > 200) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
}
scrollBtn.addEventListener("click", scrollToTop);
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
