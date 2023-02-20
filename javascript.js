// zoom in zoom out 
function increase(){
   document.querySelector("#human").style.transform ="scale(1.1)";

}
function decrease(){
   document.querySelector("#human").style.transform ="scale(0.9)";
   
}

//
//button hovor color
function mouseOver(button)
{
    document.getElementById("button").style.backgroundColor="darkblue";
}
function mouseOut(button){
    document.getElementById("button").style.backgroundColor="gray";
}
 
        
// animation
// Create an array to store the rain drops
var drops = [];

// Create a function to initialize the rain effect
function initRain() {
  // Get the rain element
  var rain = document.getElementById('rain');

  // Create the rain drops
  for (var i = 0; i < 50; i++) {
    var drop = document.createElement('div');
    drop.className = 'drop';
    drop.style.left = Math.random() * window.innerWidth + 'px';
    drop.style.top = Math.random() * -100 + 'px';
    drop.style.animationDelay = Math.random() * 5 + 's';
    rain.appendChild(drop);
    drops.push(drop);
  }
}

// Call the initRain function when the page loads
window.onload = initRain;

