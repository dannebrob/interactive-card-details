# Frontend Mentor - Interactive card details form solution

This is a solution to the [Interactive card details form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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
- [Acknowledgments](#acknowledgments)


## Overview

### The challenge

Users should be able to:

- Fill in the form and see the card details update in real-time
- Receive error messages when the form is submitted if:
  - Any input field is empty
  - The card number, expiry date, or CVC fields are in the wrong format
- View the optimal layout depending on their device's screen size
- See hover, active, and focus states for interactive elements on the page

### Screenshot

![](./screenshot.jpg)

Add a screenshot of your solution. The easiest way to do this is to use Firefox to view your project, right-click the page and select "Take a Screenshot". You can choose either a full-height screenshot or a cropped one based on how long the page is. If it's very long, it might be best to crop it.

Alternatively, you can use a tool like [FireShot](https://getfireshot.com/) to take the screenshot. FireShot has a free option, so you don't need to purchase it. 

Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

**Note: Delete this note and the paragraphs above when you add your screenshot. If you prefer not to add a screenshot, feel free to remove this entire section.**

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Tailwind](https://tailwindcss.com/) - CSS framework
- [React Hook Form](https://react-hook-form.com/) - Forms in React

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

This was a nice challenge to me and I had a blast making it. I was looking for a project that could make me more confident with styling in Tailwind. I found that the utility-first approach was a good choice for the project. 

Also to get some experience with forms in React has been great. 

One challenge I meet was to get the spaces between the digits on the card front.

```
unction injectSpaces(str) {
    let groupsOf4 = [];
  
    for (let start = 0; start < str.length; start += 4) {
      let group = str.slice(start, start + 4);
      groupsOf4.push(group);
    }
  
    return groupsOf4.join(" ");
  }
```


### Continued development

I want to continue to get experience with  the Realtive and Absolute posistioning in CSS, its something that I have not been doing a lot before and it was nice to get some experience with it in this project and I will keep on using it more.

```
 <div className="relative h-[500px] w-[500px] m-auto">
          <div
            id="back-card"
            className="w-80 top-4 absolute left-20 rounded-md xl:top-52"
          >
            <div id="img" className="absolute z-1 z-0">
              <img src={bgCardBack} className="rounded-md" alt="card background" />
            </div>
            <p id="cvc" className="absolute top-[4.7rem] right-10 z-1 text-white">
              {cvc}
            </p>
          </div>
```


### Useful resources

- [Tailwind docs](https://tailwindcss.com/docs) - This was my go-to place for all Tailwind, would not have made it without it.
- [CSS Tricks](https://www.css-tricks.com) - My one-stop-place to the syntax of flexbox/grid, with great visuals so its easy to understand and use. 


## Author

- Website - [Daniel Brobäck](https://www.danielbroback.se)
- Frontend Mentor - [@dannebrob](https://www.frontendmentor.io/profile/dannebrob)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)


## Acknowledgments

Thank you frontend mentor for this amazing challenge, it has help me grow as a developer in so many ways. 

