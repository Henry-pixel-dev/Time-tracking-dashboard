# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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


**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://time-tracking-dashboard-olive-six.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
-  - Vanilla JS
- [Next.js](https://nextjs.org/) - React framework
- [Tailwindcss](https://tailwindcss.com/) 


### What I learned

what i learnt in this project is about the use of mapping and multiple rendering and also the use of scalebiblity in our code writing lesser code that does the same thing as our thousand lines of code

=

```html
<label class="text-navy200">
  <input type="radio" name="Date" value="daily" class="sr-only peer">
    <span class="text-lg peer-checked:text-white">
     Daily
    </span>   
</label>
```
```css
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
```
```js
function renderCards(cards) {
  cards.forEach(card => {
    const key = card.title.replace(/\s/g, '');
    
    const currentEl = document.getElementById(`current${key}Time`);
    const previousEl = document.getElementById(`previous${key}Time`);
    
    if (currentEl && previousEl) {
      currentEl.textContent = card.current;
      previousEl.textContent = card.previous;
    }
  });
}
```

### Continued development

learning more on dynamic rendering and the use of mapping and flitering the correct way while focusing on scalablity

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**



## Author


- Frontend Mentor - [@Henry-pixel-dev](https://www.frontendmentor.io/profile/Henry-pixel-dev)
- Twitter - [@Histobloq](https://www.twitter.com/Histobloq)

