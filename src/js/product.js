import { fetchData } from "./fetchData.js";
import "./dark-mode.js";
import "./loader.js";
const card = document.querySelector(".card");
const cardTitle = document.querySelector(".card-title");
const cardText = document.querySelector(".text");
const Prating = document.querySelector(".rating");
const Preview = document.querySelector(".review");
const img = document.querySelector(".card-img");
const priceOfProduct = document.querySelector(".priceOfProduct");
const discountPrice = document.querySelector(".discountPrice");

const queryString = window.location.search;
const id = new URLSearchParams(queryString).get("id");
// const url = "https://dummyjson.com/product/" + id;

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

  img.src = thumbnail;
  cardTitle.textContent = title;
  cardText.textContent = description;
  Prating.textContent = rating;
  priceOfProduct.textContent = `${price}$`;
  discountPrice.textContent = `${(price - (price / 100) * discountPercentage).toFixed(2)}`;
  Preview.textContent = `${reviews.length} Reviews`;

  //   const getClone = template.content.cloneNode(true);
  // const card = getClone.querySelector(".card");
  // const img = getClone.querySelector(".card-img");
  // const cardTitle = getClone.querySelector(".card-title");
  // const cardText = getClone.querySelector(".text");
  // const productRating = getClone.querySelector(".rating");
  // const priceOfProduct = getClone.querySelector(".priceOfProduct");
  // const discountPrice = getClone.querySelector(".discountPrice");
  // const productReview = getClone.querySelector(".review");
};

fetchData("https://dummyjson.com/product/" + id)
  .then((product) => {
    showProduct(product);
  })
  .catch((error) => {
    console.log(error);
  });
