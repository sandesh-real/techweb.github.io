const headerMenu = document.querySelector(".header-nav__menu");
document.querySelector(".burgerMenu").addEventListener("click", (event) => {
  headerMenu.classList.remove("close");
});
document
  .querySelector(".header-nav__menu--cross")
  .addEventListener("click", (event) => {
    headerMenu.classList.add("close");
  });
