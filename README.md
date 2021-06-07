# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say _"[Field Name] cannot be empty"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Looks like this is not an email"_

### Screenshot

![](./images/Solution%20PC.png)
![](./images/Solution%20PC%20Error.png)
![](./images/Solution%20Mobile.png)
![](./images/Solution%20Mobile%20Error.png)

### Links

- Solution URL: [Solution](https://github.com/fidellim/Intro-Component-with-Signup-Form)
- Live Site URL: [Live Site](https://gracious-babbage-267216.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- SASS
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

A better way of adding an image combining it with background color.

```css
body {
	background: url(./images/bg-intro-mobile.png), $red;
}
```

### Continued development

To continue practicing SASS.

### Useful resources

- [Background Image with Color](https://stackoverflow.com/questions/8195215/css-background-image-on-background-color) - Gave me an idea on how to implement background image with color.
- [Stack Elements using Z-index](https://stackoverflow.com/questions/3032856/is-it-possible-to-set-the-stacking-order-of-pseudo-elements-below-their-parent-e) - To have an idea on how to stack elements using z-index

## Author

- Website - [Fidel Lim](https://fidellim-portfolio.netlify.app/)
- Frontend Mentor - [@fidellim](https://www.frontendmentor.io/profile/fidellim)
- Github - [@fidellim](https://github.com/fidellim)
