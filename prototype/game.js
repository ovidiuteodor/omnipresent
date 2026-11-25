const rating = document.querySelector("#rating");
const ratingValue = document.querySelector("#rating-value");

rating.addEventListener("input", () => {
  ratingValue.textContent = rating.value;
});