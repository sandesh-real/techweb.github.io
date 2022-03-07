const headerMenu = document.querySelector(".header-nav__menu");
document.querySelector(".burgerMenu").addEventListener("click", (event) => {
  headerMenu.classList.remove("close");
});
document
  .querySelector(".header-nav__menu--cross")
  .addEventListener("click", (event) => {
    headerMenu.classList.add("close");
  });

//for slider
var width =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

const sliderBtnRight = document.querySelector(".ourteamright");
const sliderBtn = document.querySelector(".ourteamleft");
const imageBox = document.querySelectorAll(".main-ourteam__imageBox");
const imageBoxLength =
  document.querySelectorAll(".main-ourteam__imageBox").length - 4;
let R = 0;

sliderBtnRight.addEventListener("click", (event) => {
  console.log(R);
  if (
    +imageBox[0].style.left.slice(0, imageBox[0].style.left.length - 2) <
    -(imageBoxLength * 400)
  ) {
    return;
  }

  R++;

  for (let item of imageBox) {
    if (R <= imageBoxLength) {
      let leftNum = +item.style.left.slice(0, item.style.left.length - 2);

      leftNum -= width;

      item.style.left = `${leftNum}px`;
    }
  }
});

sliderBtn.addEventListener("click", (event) => {
  console.log(R);
  console.log(
    +imageBox[0].style.left.slice(0, imageBox[0].style.left.length - 2)
  );
  if (+imageBox[0].style.left.slice(0, imageBox[0].style.left.length - 2) > 0) {
    return;
  }
  if (R === 0) {
    return;
  }
  R--;

  for (let item of imageBox) {
    if (R >= 0) {
      let leftNum = +item.style.left.slice(0, item.style.left.length - 2);
      console.log(leftNum);
      leftNum += width;
      console.log(leftNum);
      item.style.left = `${leftNum}px`;
      console.log(item.style.left);
    }
  }
});
