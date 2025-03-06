import "./dark-mode.js";
import "./loader.js";
import "./product.js";
import "./cart.js";
import { fetchData } from "./fetchData.js";
import { showCards } from "./updateUI.js";

fetchData("https://dummyjson.com/product?limit=194")
  .then((data) => {
    showCards(data);
  })
  .catch((error) => {
    console.log(error);
  });
