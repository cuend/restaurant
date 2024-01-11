import "./styles/home.css";
import "./styles/menu.css";
import "./styles/about.css";
import homePage from "./pages/home";
import menuPage from "./pages/menu";
import aboutPage from "./pages/about";
import clearBody from "./functions/clearBody";
import firstLoad from "./functions/firstLoad";

firstLoad();

const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const aboutButton = document.querySelector("#about");

homeButton.addEventListener("click", function () {
  clearBody();
  homePage();
});

menuButton.addEventListener("click", function () {
  clearBody();
  menuPage();
});

aboutButton.addEventListener("click", function () {
  clearBody();
  aboutPage();
});
