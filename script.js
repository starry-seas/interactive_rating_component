const submitButton = document.querySelector(".submit");
const ratings = document.querySelector(".ratings");
const ratingsButtons = document.querySelectorAll(".rating-button");
const thankYouMessage = document.querySelector(".thank-you");





submitButton.addEventListener("click", function () {
    if (thankYouMessage.style.display === "none"){
        thankYouMessage.style.display = "block"();
    }
})