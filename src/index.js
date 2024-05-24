import pageLoad from "./pageLoad";
import contact from "./tabs/contact";
import menu from "./tabs/menu";

pageLoad();

const switchTabs = (() => {
  const homeButton = document.querySelector("#home");
  homeButton.addEventListener("click", () => {
    homeButton.classList.add("active");
    menuButton.classList.remove("active");
    contactButton.classList.remove("active");
    pageLoad();
    clearPage();
  });

  const menuButton = document.querySelector("#menu");
  menuButton.addEventListener("click", () => {
    menuButton.classList.add("active");
    homeButton.classList.remove("active");
    contactButton.classList.remove("active");
    menu();
    clearPage();
  });

  const contactButton = document.querySelector("#contact");
  contactButton.addEventListener("click", () => {
    contactButton.classList.add("active");
    homeButton.classList.remove("active");
    menuButton.classList.remove("active");
    contact();
    clearPage();
  });
})();

function clearPage() {
  const content = document.querySelector("#content");
  const pageContent = document.querySelector("#page-content");
  if (pageContent) {
    content.removeChild(pageContent);
  }
}
