

const vocabulary = [
    
]
const flashcard = document.getElementById('flashcard');
const wordElement = flashcard.querySelector('.front h1');
const definitionElement = flashcard.querySelector('.back h2');

let currentCardIndex = 0;

function showNextFlashcard() {

    currentCardIndex = Math.floor(Math.random() * vocabulary.length); // Loop back to the first card
    
    const currentCard = vocabulary[currentCardIndex];
    wordElement.textContent = currentCard.word;
    definitionElement.textContent = currentCard.definition;
    
    currentCardIndex++;
}

// Show the first flashcard initially
showNextFlashcard();

// Add a click event listener to the flashcard to show the next card when clicked
flashcard.addEventListener('click', showNextFlashcard);

document.getElementById("refreshButton").addEventListener("click", function() {
    showNextFlashcard();
});

// document.getElementById("refreshButton").addEventListener("click", function() {
//     var flashcard = document.getElementById("flashcard");
//     flashcard.classList.toggle("flipped");
// });

// Selecting the refresh button and flashcard
const refreshButton = document.getElementById("refreshButton");

// Function to handle showing definition
let showDefinitionTimeout;

function showDefinition(word) {
    const definition = vocabulary.find(item => item.word === word).definition;
    flashcard.querySelector(".back").textContent = definition;
    flashcard.classList.add("flipped");
}

// Function to handle keydown events
function handleKeydown(event) {
    // If right arrow key is pressed, trigger refresh button click
    if (event.code === "ArrowRight") {
        refreshButton.click();
    }
}


// Adding event listeners for keydown and keyup events
document.addEventListener("keydown", handleKeydown);
document.addEventListener("keyup", handleKeyup);

//Have example sentences for each word
