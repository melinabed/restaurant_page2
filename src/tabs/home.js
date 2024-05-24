const content = document.querySelector("#content");

function homePage() {
  const pageContent = document.createElement("div");
  pageContent.setAttribute("id", "page-content");

  const homeContainer = document.createElement("div");
  homeContainer.classList.add("home-container");

  const tagContainer = document.createElement("div");
  tagContainer.classList.add("tag-container");

  const tag1 = document.createElement("div");
  tag1.textContent = "EAT";

  const tag2 = document.createElement("div");
  tag2.textContent = "DRINK";

  const tag3 = document.createElement("div");
  tag3.textContent = "VISIT";

  tagContainer.appendChild(tag1);
  tagContainer.appendChild(tag2);
  tagContainer.appendChild(tag3);

  const address = document.createElement("div");
  address.classList.add("address");
  address.textContent = "123 DEMO ST - SEABROOK, TX - (281)123-4567";

  homeContainer.appendChild(tagContainer);
  homeContainer.appendChild(address);

  pageContent.appendChild(homeContainer);
  content.appendChild(pageContent);
}

export default homePage;
