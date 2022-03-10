const headerMenu = document.querySelector(".header-nav__menu");
document.querySelector(".burgerMenu").addEventListener("click", (event) => {
  headerMenu.classList.remove("close");
});
document
  .querySelector(".header-nav__menu--cross")
  .addEventListener("click", (event) => {
    headerMenu.classList.add("close");
  });

//sticky nav bar
const header = document.querySelector(".header");
const navContainer = document.querySelector(".header-nav");
const stickyNavbar = (entries) => {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) {
    navContainer.classList.add("sticky");
  } else {
    navContainer.classList.remove("sticky");
  }
};

const headerObserver = new IntersectionObserver(stickyNavbar, {
  root: null,
  threshold: 0,
});
headerObserver.observe(header);

if (document.querySelector(".header-body__downarrow")) {
  document
    .querySelector(".header-body__downarrow")
    .addEventListener("click", () => {
      document
        .querySelector(".main-aboutus")
        .scrollIntoView({ behavior: "smooth" });
    });

  document.querySelectorAll(".header-nav__menu--list a").forEach((item) => {
    console.log(item);
    item.addEventListener("click", function (event) {
      console.log(event.target.getAttribute("href") !== "./career/career.html");
      if (event.target.getAttribute("href") !== "./career/career.html") {
        event.preventDefault();
        document
          .querySelector(this.getAttribute("href"))
          .scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}
