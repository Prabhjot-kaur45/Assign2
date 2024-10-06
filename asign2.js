// Arrays for different parts of speech
const nouns = ["the turkey", "the dog", "the cat", "the elephant", "my teacher"];
const verbs = ["sat on", "ate", "danced with", "saw", "kissed"];
const adjectives = ["a funny", "a scary", "a goofy", "a slimy", "a barking"];
const anotherNouns = ["goat", "monkey", "fish", "cow", "frog"];
const places = ["on the moon", "on the chair", "in my spaghetti", "in my soup", "on the grass"];

// Variable to hold the story
let textToSpeak = "";

// Function to get a random element from an array
function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

// Event listeners for the buttons
document.getElementById("nounButton").addEventListener("click", function() {
    textToSpeak += getRandomElement(nouns) + " ";
    updateStoryOutput();
});

document.getElementById("verbButton").addEventListener("click", function() {
    textToSpeak += getRandomElement(verbs) + " ";
    updateStoryOutput();
});

document.getElementById("adjectiveButton").addEventListener("click", function() {
    textToSpeak += getRandomElement(adjectives) + " ";
    updateStoryOutput();
});

document.getElementById("anotherNounButton").addEventListener("click", function() {
    textToSpeak += getRandomElement(anotherNouns) + " ";
    updateStoryOutput();
});

document.getElementById("placeButton").addEventListener("click", function() {
    textToSpeak += getRandomElement(places) + " ";
    updateStoryOutput();
});

// Function to generate a random story
document.getElementById("generateStoryButton").addEventListener("click", function() {
    textToSpeak = "";
    textToSpeak += getRandomElement(nouns) + " ";
    textToSpeak += getRandomElement(verbs) + " ";
    textToSpeak += getRandomElement(adjectives) + " ";
    textToSpeak += getRandomElement(anotherNouns) + " ";
    textToSpeak += getRandomElement(places) + " ";
    updateStoryOutput();
});

// Function to update the displayed story
function updateStoryOutput() {
    document.getElementById("storyOutput").innerText = textToSpeak;
}

// Function to speak the story
document.getElementById("speakButton").addEventListener("click", function() {
    const speech = new SpeechSynthesisUtterance(textToSpeak);
    window.speechSynthesis.speak(speech);
});

// Reset button functionality
document.getElementById("resetButton").addEventListener("click", function() {
    textToSpeak = "";
    updateStoryOutput();
});