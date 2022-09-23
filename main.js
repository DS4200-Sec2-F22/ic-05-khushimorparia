
let numClicks = 0;

function buttonClickNum() {

	numClicks += 1;

    let newText = "Number of times button clicked: " + numClicks; 

    let buttonDiv = document.getElementById("button-div");

    buttonDiv.innerHTML = newText; 
}