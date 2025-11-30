# Frontend Mentor - Interactive rating component

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of Contents

- [Overview](#overview)
  - [The Challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My Process](#my-process)
  - [Built With](HTML CSS JS)
  - [What I Learned](#what-i-learned)
- [How to Use](#how-to-use)
- [Authors](#https://github.com/starry-seas #https://github.com/lj-enguita #https://github.com/thelastmedici)
- [Acknowledgments](#)

## Overview

### The Challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size.
- See hover and focus states for all interactive elements on the page.
- Select and submit a number rating.
- See the "Thank you" card state after submitting a rating.

### Screenshot

![](<./path/to/your/screenshot.jpg>)

*Note: Add a screenshot of your project here.*

### Links

- Solution URL: [Add solution URL here](https://github.com/starry-seas/interactive_rating_component)
- Live Site URL: [Add live site URL here](https://interactive-rating-card-lola-afifa-jc.netlify.app/)

## My Process

### Built With

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- Vanilla JavaScript

### What I Learned

This project was a great exercise in handling user interactions and updating the DOM with JavaScript. we particularly focused on:

- Using event listeners to capture user input.
- Toggling classes to manage the state of the rating buttons.
- Dynamically updating content on the "Thank You" card based on the user's selection.
- Structuring the JavaScript to be clean and maintainable.

```js
// Example of a code snippet we're proud of
submitButton.addEventListener('click', () => {
  if (selectedRating) {
    ratingCard.style.display = 'none';
    thankYouCard.style.display = 'block';
    ratingSpan.textContent = selectedRating;
  }
});
```

## How to Use

To run this project locally:

1. Clone the repository: `git clone https://github.com/starry-seas/interactive_rating_component`
2. Open the `index.html` file in your browser.

## Author


- Frontend Mentor - @yourusername

## Acknowledgments

A big thank you to Frontend Mentor for providing this challenge. It's a great way to practice and improve front-end development skills.
