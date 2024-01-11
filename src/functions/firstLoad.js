import menuPage from "../pages/menu";
import clearBody from "./clearBody";

const firstLoad = () => {
  const contentDiv = document.getElementById("content");

  // Create a new nav element
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");

  const menuItems = ["Home", "Menu", "About"];

  menuItems.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;

    // Assign an ID to each li element based on its content
    li.id = item.toLowerCase();

    ul.appendChild(li);
  });

  nav.appendChild(ul);

  // Create a new main element
  const main = document.createElement("main");
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

  // Create a new footer element
  const footer = document.createElement("footer");
  footer.innerHTML = `
        <p>
            Developed with ♥ by
            <a href="https://github.com/cuend/restaurant">David Cuen</a>
        </p>
    `;

  // Append the created elements to the contentDiv
  contentDiv.appendChild(nav);
  contentDiv.appendChild(main);
  contentDiv.appendChild(footer);

  const button = document.querySelector("button");

  button.addEventListener("click", function () {
    clearBody();
    menuPage();
  });
};

export default firstLoad;
