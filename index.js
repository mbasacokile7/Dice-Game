//Put the image paths in an array 

const imagesArray = ["images/dice1.png", "images/dice2.png",  "images/dice3.png", "images/dice4.png", "images/dice5.png","images/dice6.png"];

//Generate random numbers between zero and 5


//Create Start Game Function

function startGame(){

  //Generate Random Numbers to be Used as indices
  let randomNum_1 = Math.floor(Math.random() * (5 + 1));;
  let randomNum_2 = Math.floor(Math.random() * (5 + 1));;

  // Randomly select the image path for different images
  document.querySelector(".img1").setAttribute("src", `${imagesArray[randomNum_1]}`);
  document.querySelector(".img2").setAttribute("src", `${imagesArray[randomNum_2]}`);

  // Game Logic
  if (randomNum_1 > randomNum_2) {
    document.querySelector("h1").innerHTML = "The winner is Player 1";
   } else if (randomNum_1 === randomNum_2) {
     document.querySelector("h1").innerHTML = "We have a tie";
   } else {
     document.querySelector("h1").innerHTML = "The winner is Player 2";
   }
}
//console.log(imagesArray[randomNum_1]);
//console.log(randomNum_2);

