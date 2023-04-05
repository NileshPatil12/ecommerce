const bar = document.getElementById("bar");
const closed = document.getElementById("closed");
const nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("act"); 
  });
}
if (closed) {
    closed.addEventListener("click", () => {
      nav.classList.remove("act"); 
    });
}