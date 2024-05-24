const content = document.querySelector("#content");

const entrees = [
  { item: "Birria Tacos", price: 20 },
  { item: "Tomato and Basil Pasta", price: 15 },
  { item: "Grilled Salmon", price: 19 },
  { item: "Charbroiled Steak", price: 20 },
  { item: "Steak Sandwich", price: 25 },
];

const appetizers = [
  { item: "Chips and Salsa", price: 5 },
  { item: "Jalepeno Poppers", price: 7 },
  { item: "Garlic Bread Bites", price: 10 },
];

const drinks = [
  { item: "Soft Drink", price: 4 },
  { item: "Iced Tea", price: 4 },
  { item: "Water", price: 1 },
  { item: "Lemonade", price: 3 },
];

const hardDrinks = [
  { item: "Rum Punch", price: 10 },
  { item: "Old Fashioned", price: 9 },
  { item: "Spiked Lemonade", price: 8 },
  { item: "Bloody Mary", price: 15 },
  { item: "Beer", price: 7 },
];

function menu() {
  const pageContent = document.createElement("div");
  pageContent.setAttribute("id", "page-content");

  const menu = document.createElement("div");
  menu.classList.add("menu");

  //Entree Section

  const entreeSection = document.createElement("div");
  entreeSection.classList.add("entree");

  const entreeTitle = document.createElement("div");
  entreeTitle.setAttribute("id", "entree-title");
  entreeTitle.textContent = "Entrees";
  entreeSection.appendChild(entreeTitle);

  const itemsContainer = document.createElement("div");
  itemsContainer.classList.add("entree-items-container");
  entreeSection.appendChild(itemsContainer);

  const entreeItems = document.createElement("div");
  entreeItems.classList.add("entree-items");
  itemsContainer.appendChild(entreeItems);

  const entreePrices = document.createElement("div");
  entreePrices.classList.add("entree-prices");
  itemsContainer.appendChild(entreePrices);

  const entree = entrees.map((value) => {
    const itemNames = document.createElement("div");
    itemNames.textContent = value.item;
    entreeItems.appendChild(itemNames);

    const itemPrices = document.createElement("div");
    itemPrices.textContent = `$${value.price}`;
    entreePrices.appendChild(itemPrices);
  });

  //Appetizer Section

  const appSection = document.createElement("div");
  appSection.classList.add("app");

  const appTitle = document.createElement("div");
  appTitle.setAttribute("id", "app-title");
  appTitle.textContent = "Appetizers";
  appSection.appendChild(appTitle);

  const appitemsContainer = document.createElement("div");
  appitemsContainer.classList.add("app-items-container");
  appSection.appendChild(appitemsContainer);

  const appItems = document.createElement("div");
  appItems.classList.add("app-items");
  appitemsContainer.appendChild(appItems);

  const appPrices = document.createElement("div");
  appPrices.classList.add("app-prices");
  appitemsContainer.appendChild(appPrices);

  const app = appetizers.map((value) => {
    const itemNames = document.createElement("div");
    itemNames.textContent = value.item;
    appItems.appendChild(itemNames);

    const itemPrices = document.createElement("div");
    itemPrices.textContent = `$${value.price}`;
    appPrices.appendChild(itemPrices);
  });

  //Drink Section

  const drinkSection = document.createElement("div");
  drinkSection.classList.add("drinks");

  const drinkTitle = document.createElement("div");
  drinkTitle.setAttribute("id", "drink-title");
  drinkTitle.textContent = "Drinks";
  drinkSection.appendChild(drinkTitle);

  const drinkitemsContainer = document.createElement("div");
  drinkitemsContainer.classList.add("drink-items-container");
  drinkSection.appendChild(drinkitemsContainer);

  const drinkItems = document.createElement("div");
  drinkItems.classList.add("drink-items");
  drinkitemsContainer.appendChild(drinkItems);

  const drinkPrices = document.createElement("div");
  drinkPrices.classList.add("drink-prices");
  drinkitemsContainer.appendChild(drinkPrices);

  const drink = drinks.map((value) => {
    const itemNames = document.createElement("div");
    itemNames.textContent = value.item;
    drinkItems.appendChild(itemNames);

    const itemPrices = document.createElement("div");
    itemPrices.textContent = `$${value.price}`;
    drinkPrices.appendChild(itemPrices);
  });

  //Hard Drinks Section

  const hardSection = document.createElement("div");
  hardSection.classList.add("hard");

  const hardTitle = document.createElement("div");
  hardTitle.setAttribute("id", "hard-title");
  hardTitle.textContent = "Hard Drinks";
  hardSection.appendChild(hardTitle);

  const harditemsContainer = document.createElement("div");
  harditemsContainer.classList.add("hard-items-container");
  hardSection.appendChild(harditemsContainer);

  const hardItems = document.createElement("div");
  hardItems.classList.add("hard-items");
  harditemsContainer.appendChild(hardItems);

  const hardPrices = document.createElement("div");
  hardPrices.classList.add("hard-prices");
  harditemsContainer.appendChild(hardPrices);

  const hard = hardDrinks.map((value) => {
    const itemNames = document.createElement("div");
    itemNames.textContent = value.item;
    hardItems.appendChild(itemNames);

    const itemPrices = document.createElement("div");
    itemPrices.textContent = `$${value.price}`;
    hardPrices.appendChild(itemPrices);
  });

  menu.appendChild(entreeSection);
  menu.append(appSection);
  menu.appendChild(drinkSection);
  menu.appendChild(hardSection);

  pageContent.appendChild(menu);
  content.appendChild(pageContent);
}

export default menu;
