let Equipment = document.getElementById("Equipment");
let Pool = document.getElementById("Pool");
let Courts = document.getElementById("Courts");
let Sauna = document.getElementById("Sauna");

let background = document.getElementById("background");

// This method below is used to switch between which view is going to be displayed.
//it has the paramater that is whichever view is desired by clicking on the button,
//and consists of a few if else statements to decide what to do with the desired paramater.
//when one button is clicked, it sets the other buttons to the not selected view and changed 
//the selected button to the selected view. it changes the contents of the button as well as the class.
//This method will also change the background picture, once those are available.
//There is probably a more efficient way to go about this, however this is the solution that I have for now.
changeSelected = input => {
   if (input == Equipment) {
    Pool.innerHTML = "Pool";
    Pool.className = "button-not-selected";
    Courts.innerHTML = "Courts";
    Courts.className ="button-not-selected";
    Sauna.innerHTML = "Classes"
    Sauna.className = "button-not-selected";
    Equipment.innerHTML = "<p style='font-size: calc(20px + 1.2rem); text-decoration: underline;'>Equipment</p> <p style='font-size: calc(12px + .3rem)'>Regardless of your skill level, our gym offers a welcoming space where you can explore a full range of equipment.</p>"
    Equipment.className="button-selected";
    background.style = "background: url(Pictures/gym.png); height: 90vh; max-width: 100vw; background-size: cover;";

} else if (input == Sauna) {
    Equipment.innerHTML = "Equipment";
    Equipment.className="button-not-selected";
    Courts.innerHTML = "Courts";
    Courts.className="button-not-selected";
    Sauna.innerHTML = "Classes"
    Sauna.className="button-not-selected";
    Pool.innerHTML = "<p style='font-size: calc(20px + 1.2rem); text-decoration: underline;'>Pool</p> <p style='font-size: calc(12px + .3rem)'>Take a break from the heat and come relax in the pool</p>"
    Pool.className="button-selected";
    background.style = "background: url(Pictures/poolFull.png); height: 90vh; max-width: 100vw; background-size: cover; background-position: center;";

   } else if (input == Courts) {
    Equipment.innerHTML = "Equipment";
    Equipment.className="button-not-selected";
    Pool.innerHTML = "Pool";
    Pool.className="button-not-selected";
    Sauna.innerHTML = "Classes"
    Sauna.className="button-not-selected";
    Courts.innerHTML = "<p style='font-size: calc(20px + 1.2rem); text-decoration: underline;'>Courts</p> <p style='font-size: calc(12px + .3rem)'>Enjoy a 24/7 full size basket ball court as well as a racket ball court</p>"
    Courts.className="button-selected";
    background.style = "background: url(pictures/basketBall.png); height: 90vh; max-width: 100vw; background-size: cover; background-position: center right;";


   } else if (input == Pool) {
    Equipment.innerHTML = "Equipment";
    Equipment.className="button-not-selected";
    Pool.innerHTML = "Pool";
    Pool.className="button-not-selected";
    Courts.innerHTML = "Courts"
    Courts.className="button-not-selected";
    Sauna.innerHTML = "<p style='font-size: calc(20px + 1.2rem); text-decoration: underline;'>Classes</p> <p style='font-size: calc(12px + .3rem)'>Check out the classes that we offer <a href='' style='color: black;'>Here</a></p>"
    Sauna.className="button-selected";
    background.style = "background: url(pictures/class.png); height: 90vh; max-width: 100vw; background-size: cover; background-position: center;";
   }
}