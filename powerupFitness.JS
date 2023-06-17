let Equipment = document.getElementById("Equipment");

changeSelected = input=> {
    if (input == "Equipment"){
        Equipment.innerHTML="<button class='selector-button' style='font-size: calc(20px + 1rem);'>Pool</button>";
    }
}