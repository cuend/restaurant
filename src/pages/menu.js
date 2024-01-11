const menuPage = () => {
  // populate main element
  const main = document.querySelector("main");
  main.innerHTML = `
        <!-- menu title -->
        <p class="rust menu-sign">Las Brasas</p>
        <h1 class="menu-title">Menu</h1>
        <div class="menu-break" aria-hidden="true"></div>
        <!-- menu item -->
        <h2 class="item-title rust">Tacos de Asada (3)</h2>
        <p class="item-description">
            Tacos rellenos con tiras delgadas de carne de res asada, generalmente
            sazonadas con especias sabrosas y servidas con ingredientes como
            cebolla, cilantro y salsa.
        </p>
        <p class="item-title rust">$9</p>
        <div class="mini-menu-break" aria-hidden="true"></div>
        <!-- menu item -->
        <h2 class="item-title rust">Tacos de Pescado (3)</h2>
        <p class="item-description">
            Tacos con filetes de pescado, típicamente empanizados o a la parrilla,
            acompañados de repollo rallado, salsa de crema agria y limón. Una
            opción deliciosa para los amantes de los mariscos.
        </p>
        <p class="item-title rust">$12</p>
        <div class="mini-menu-break" aria-hidden="true"></div>
        <!-- menu item -->
        <h2 class="item-title rust">Tacos de Nopales (3)</h2>
        <p class="item-description">
            Tacos con nopales, que son pencas de cactus tiernas, generalmente
            asadas o salteadas. Se combinan con ingredientes como queso, cebolla,
            cilantro y salsa, ofreciendo una opción única y sabrosa.
        </p>
        <p class="item-title rust">$8</p>
      `;
  main.classList.add("menu-main");
};

export default menuPage;
