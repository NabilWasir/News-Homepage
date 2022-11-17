const btn = document.querySelector("#hambergermenu");
const menu = document.querySelector("#menu");
const closeBtn = document.querySelector(".overlay-hambergermenu");

btn.addEventListener("click", function () {
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
});

closeBtn.addEventListener("click", function () {
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
});
