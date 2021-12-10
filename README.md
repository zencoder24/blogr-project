# Frontend Mentor - Blogr landing page solution

This is a solution to the [Blogr landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/blogr-landing-page-EX2RLAApP). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)




## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](./mobile-menu.png)
![](./desktop.png)


### Links

- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- Mobile-first workflow
- [Sass](https://sass-lang.com/)
- [Bourbon](https://www.bourbon.io/) - Sass tool set



### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

How to use media queries inside of Javascript
```js
const mediaQueryTablet = '(min-width: 768px)';
const mediaQueryListTablet = window.matchMedia(mediaQueryTablet);
```
```js
mediaQueryListTablet.addEventListener('change', event => {
  if (event.matches) {
    toggleOpen.style.display = "none";
    toggleClose.style.display = "none";
  } 
});
```
How to style a dropdown menu using CSS.
```css
 .product-link ul,
  .company-link ul,
  .connect-link ul{
    position: absolute;
    background-color: white;
    margin-top: 10px;
    width: 150px;
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    border-radius: 5px;
    padding-left: 20px;
    opacity: 0;
    pointer-events: none;
    transform: translateY(10px);
    transition: all 0.4s ease;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  }
  
  .product-link li a,
  .company-link li a,
  .connect-link li a{
    color: black;
    font-family: $primary-font;
    font-size: 1.075rem;
  }
  
  .product-link li a:hover,
  .company-link li a:hover,
  .connect-link li a:hover{
    font-weight: weight(overpass-semi-bold);
    text-decoration: none;
  }
  
  .product-link button:focus img,
  .company-link button:focus img,
  .connect-link button:focus img{
    transform:rotate(180deg);
  }
  
  .product-link button:focus + ul,
  .company-link button:focus + ul,
  .connect-link button:focus + ul{
    opacity: 1;
    pointer-events: all;
  }
  }

}
```


### Useful resources

- [Organizing Sass | Front-End Architecture](https://www.youtube.com/watch?v=qUnIReTCsZY&t=542s&ab_channel=JesseShowalter) - This helped me with organizing my Sass files. I really liked this pattern and will use it going forward.
- [How to create a CSS-Only Accordion (Mobile Friendly) - HTML & CSS Tutorial](https://www.youtube.com/watch?v=pzy_QStQaqA&ab_channel=dcode) - I used this video to help me design the accordion functionality in the mobile menu design. This video help me wrap my head around the design and it actually works. It is nice for me  to know this without using a frontend framework.
- [How To Create a HTML Dropdown Menu | CSS Dropdown Tutorial](https://www.youtube.com/watch?v=o0YiZF9XZL0&ab_channel=DevEd) - This video help me with creating dropodown menu for my navigation bar. I was able to easily pick up the concept on how one is made.


## Author

- Frontend Mentor - [@zencoder24](https://www.frontendmentor.io/profile/zencoder24)



