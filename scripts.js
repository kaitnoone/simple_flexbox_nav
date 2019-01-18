document.addEventListener("DOMContentLoaded", function() {
  let trigger = document.querySelectorAll(".nav--trigger")[0];
  let mainNav = document.querySelectorAll("nav.main")[0];
  trigger.addEventListener("click", function(evt) {
    trigger.classList.toggle("open");
    mainNav.classList.toggle("open");
  });
});
