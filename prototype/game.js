function getRatingLabel(score) {
    if (score >= 10) {
        return "Masterpiece";
    } else if (score >= 9) {
        return "Excellent";
    } else if (score >= 8) {
        return "Great";
    } else if (score >= 7) {
        return "Good";
    } else if (score >= 5) {
        return "Decent";
    } else if (score >= 3) {
        return "Poor";
    } else {
        return "Awful";
    }
}

const ratingPanel = document.querySelector("#rating-panel");
const rateButton = document.querySelector("#rate-button");
const rating = document.querySelector("#rating");
const ratingValue = document.querySelector("#rating-value");
const ratingLabel = document.querySelector("#rating-label");

rating.addEventListener("input", () => {
    ratingValue.textContent = rating.value;
    ratingLabel.textContent = getRatingLabel(Number(rating.value));
});

rateButton.addEventListener("click", () => {
    ratingPanel.hidden = !ratingPanel.hidden;
    rateButton.setAttribute("aria-expanded", !ratingPanel.hidden);
});