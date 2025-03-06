import { fetchData } from "./fetchData.js";
import "./dark-mode.js";
import "./loader.js";
const template = document.querySelector("template");
const container = document.querySelector(".hero__container");


const queryString = window.location.search;
const id = new URLSearchParams(queryString).get("id");


const showProduct = (product) => {
  const {
    thumbnail,
    title,
    description,
    price,
    discountPercentage,
    rating,
    reviews,
  } = product;

  const getClone = template.content.cloneNode(true);

  const card = getClone.querySelector(".productCard");
  const img = getClone.querySelector(".card-img");
  const cardTitle = getClone.querySelector(".card-title");
  const cardText = getClone.querySelector(".text");
  const productRating = getClone.querySelector(".rating");
  const priceOfProduct = getClone.querySelector(".priceOfProduct");
  const discountPrice = getClone.querySelector(".discountPrice");
  const productReview = getClone.querySelector(".review");

  img.src = thumbnail;
  cardTitle.textContent = title;
  cardText.textContent = description;
  productRating.textContent = rating;
  priceOfProduct.textContent = `${price}$`;
  discountPrice.textContent = `${(price - (price / 100) * discountPercentage).toFixed(2)}`;
  productReview.textContent = `${reviews.length} Reviews`;
  container.appendChild(card);
};

fetchData("https://dummyjson.com/product/" + id)
  .then((product) => {
    showProduct(product);
  })
  .catch((error) => {
    console.log(error);
  });
