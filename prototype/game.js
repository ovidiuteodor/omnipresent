const rating = document.querySelector("#rating");
const ratingValue = document.querySelector("#rating-value");

rating.addEventListener("input", () => {
    ratingValue.textContent = rating.value;
});

const ratingPanel = document.querySelector("#rating-panel");
const rateButton = document.querySelector("#rate-button");

rateButton.addEventListener("click", () => {
    ratingPanel.hidden = !ratingPanel.hidden;
    rateButton.setAttribute("aria-expanded", !ratingPanel.hidden);
});