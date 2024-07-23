const btn = document.querySelector("button");
const body = document.querySelector("body");

btn.addEventListener("click", (e) => {
  body.classList.toggle("body-dark");

  if (document.title === "Good Morning  ") {
    document.title = "Good Night ";
  } else {
    document.title = "Good Night ";
  }
});