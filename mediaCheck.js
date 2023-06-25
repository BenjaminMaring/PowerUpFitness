let review = document.getElementById("review");
let buttonSection = document.getElementById("button-section");
let buttonWrapper = document.getElementById("button-wrapper");
let menu = document.getElementById("menu");
let logo = document.getElementById("logo");

let x = window.matchMedia("(max-width: 1100px)");
mediaQuery(x) // Call listener function at run time
x.addListener(mediaQuery) // Attach listener function on state changes



function mediaQuery(x) {
    if (x.matches) { // If media query matches
      review.style = "display: flex; flex-direction: column; padding: 20px;";
      buttonSection.style = "grid-template-columns: repeat(1, 1fr); grid-template-rows: repeat(4, 1fr); height: 50%; top: 45%;"
      buttonWrapper.style = "width: 90vw;";
      logo.style = "width: 100%;";
      menu.style = "position: relative;"
      
    } else {
     review.style = "display: grid;";
     buttonSection.style = "grid-template-columns: repeat(4, 1fr); width: 60vw;"
     buttonWrapper.style = "width: 60vw;";
    }
  }
