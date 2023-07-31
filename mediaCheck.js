let review = document.getElementById("review");
let buttonSection = document.getElementById("button-section");
let buttonWrapper = document.getElementById("button-wrapper");
let menu = document.getElementById("menu");
let logo = document.getElementById("logo");
let mobileLinks = document.getElementById("mobile-links");

let contactGrid = document.getElementById("contactGrid");

let footerImg = document.getElementById("footer-img");

let x = window.matchMedia("(max-width: 1300px)");
mediaQuery(x) // Call listener function at run time
x.addListener(mediaQuery) // Attach listener function on state changes



function mediaQuery(x) {
    if (x.matches) { // If media query matches
      review.style = "display: flex; flex-direction: column; padding: 20px;";
      buttonSection.style = "grid-template-columns: repeat(1, 1fr); grid-template-rows: repeat(4, 1fr); height: 50%; top: 45%;"
      buttonWrapper.style = "width: 90vw;";
      logo.style = "width: 100%;";
      menu.style = "position: relative;"

      links.innerHTML = "";
      links.className = "";

      mobileLinks.innerHTML = "<a href='https://www.mindbodyonline.com/explore/locations/power-up-fitness-studio' class='menu-link'>Classes</a><a href='#contact-link' class='menu-link'>Contact Us</a>";
      mobileLinks.classList = "safari-links";

      contactGrid.style = "grid-template-columns: repeat(1, 1fr); padding: 0px;";

      footerImg.style = "width: 150px;"
    } else {
     review.style = "display: grid;";
     buttonSection.style = "grid-template-columns: repeat(4, 1fr); width: 60vw;"
     buttonWrapper.style = "width: 60vw;";

     links.innerHTML = "<a href='https://www.mindbodyonline.com/explore/locations/power-up-fitness-studio' class='menu-link'>Classes</a><a href='#contact-link' class='menu-link'>Contact Us</a>";
     links.classList = "links";

    mobileLinks.innerHTML = "";
    mobileLinks.classList = "";

    contactGrid.style = "";

    footerImg.style = "width: 250px;"

    }
  }
