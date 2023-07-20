const navBar = document.getElementById("nav-bar");

document.getElementById("nav-btn").addEventListener("click", () => {
  if (navBar.classList.contains("invisible")) {
    navBar.classList.remove("invisible");
  } else {
    navBar.classList.add("invisible");
  }
});
