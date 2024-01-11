const aboutPage = () => {
  // populate main element
  const main = document.querySelector("main");
  main.innerHTML = `
          <!-- about title -->
          <p class="rust about-sign">Las Brasas</p>
          <h1 class="about-title">Nuestra Empreza</h1>
          <div class="about-break" aria-hidden="true"></div>
         <!-- about biography -->
         <p class="text-body"> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi magnam dolorem repellendus mollitia dolor sequi minus ipsa adipisci. Dolor cupiditate dolore tempore ab nisi facilis quidem quibusdam aut molestiae recusandae? </p>
        `;
  main.classList.add("about-main");
};

export default aboutPage;
