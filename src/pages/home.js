import menuPage from "./menu";
import clearBody from "../functions/clearBody";

const homePage = () => {
  // populate main element
  const main = document.querySelector("main");
  main.innerHTML = `
        <p class="rust sign">Las Brasas</p>
        <h1 class="home-h1">Taqueria</h1>

        <div class="home-break" aria-hidden="true"></div>
        <p>
            Bienvenido al fogón de tradición en Taquería Las Brasas, donde la
            autenticidad arde en cada platillo.
        </p>
        <button>Ver el Menu</button>
    `;

  const button = document.querySelector("button");

  button.addEventListener("click", function () {
    clearBody();
    menuPage();
  });
};

export default homePage;
