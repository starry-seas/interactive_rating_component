const submitButton = document.querySelector(".submit");
const ratings = document.querySelector(".ratings");
const ratingsButtons = document.querySelectorAll(".ratings-num");
const thankYouMessage = document.querySelector(".thank-you");
const ratingSummary = document.querySelector(".user-rating");
const rating =document.querySelector(".rating");

let selectRating = null;

ratingsButtons.forEach (button => {
    button.addEventListener("click", function () {
    selectRating = button.textContent.trim();
    console.log(selectRating);
    })
})

submitButton.addEventListener("click", function () {
    if (selectRating) {
        rating.style.display = "none";
        thankYouMessage.style.display = "block";
        ratingSummary.textContent = `${selectRating}`;
    }
})