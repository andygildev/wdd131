document.getElementById("currentyear").textContent = new Date().getFullYear();


document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;


const menubutton = document.querySelector("#menuButton");
const navlinks = document.querySelector(".navlinks");

menubutton.addEventListener("click", () => {
  navlinks.classList.toggle("open");
  menubutton.textContent = navlinks.classList.contains("open") ? "✖" : "☰";
});
