const arrayWords = [
    "apple", "banana", "orange", "grape", "peach", "melon", "cherry", "kiwi", "mango", "plum",
    "dog", "cat", "mouse", "elephant", "giraffe", "lion", "tiger", "bear", "zebra", "monkey",
    "house", "car", "bicycle", "train", "airplane", "boat", "motorcycle", "bus", "truck", "scooter",
    "red", "blue", "green", "yellow", "purple", "orange", "black", "white", "pink", "brown",
    "sun", "moon", "star", "cloud", "sky", "rain", "snow", "wind", "storm", "fog",
    "run", "walk", "jump", "fly", "swim", "read", "write", "draw", "sing", "dance",
    "happy", "sad", "angry", "excited", "bored", "tired", "scared", "brave", "shy", "kind",
    "pen", "pencil", "book", "paper", "desk", "chair", "table", "lamp", "computer", "phone",
    "school", "teacher", "student", "class", "lesson", "homework", "exam", "test", "grade", "subject",
    "city", "country", "village", "mountain", "river", "lake", "forest", "desert", "beach", "island",
    "bread", "milk", "cheese", "butter", "egg", "meat", "fish", "rice", "pasta", "soup",
    "shirt", "pants", "dress", "skirt", "hat", "shoes", "socks", "jacket", "coat", "scarf",
    "king", "queen", "prince", "princess", "knight", "castle", "sword", "shield", "dragon", "wizard",
    "computer", "keyboard", "mouse", "screen", "monitor", "internet", "website", "email", "password", "login",
    "book", "page", "chapter", "story", "author", "title", "cover", "library", "shelf", "bookmark",
    "time", "clock", "watch", "second", "minute", "hour", "day", "week", "month", "year",
    "money", "coin", "bill", "bank", "wallet", "price", "cost", "buy", "sell", "store",
    "friend", "family", "mother", "father", "brother", "sister", "uncle", "aunt", "cousin", "grandparent",
    "food", "drink", "snack", "meal", "breakfast", "lunch", "dinner", "fruit", "vegetable", "dessert",
    "animal", "bird", "fish", "insect", "reptile", "mammal", "amphibian", "pet", "wild", "zoo",
    "game", "toy", "ball", "doll", "puzzle", "board", "card", "dice", "console", "controller",
    "music", "song", "instrument", "guitar", "piano", "drum", "violin", "flute", "singer", "band",
    "sport", "team", "player", "coach", "match", "goal", "score", "win", "lose", "draw",
    "body", "head", "face", "eyes", "ears", "nose", "mouth", "hand", "leg", "foot",
    "color", "shape", "circle", "square", "triangle", "rectangle", "oval", "star", "heart", "diamond",
    "emotion", "feeling", "love", "hate", "joy", "fear", "surprise", "anger", "trust", "disgust",
    "job", "work", "career", "boss", "employee", "salary", "office", "company", "meeting", "project",
    "travel", "trip", "vacation", "journey", "flight", "ticket", "hotel", "tour", "guide", "map",
    "plant", "tree", "flower", "leaf", "grass", "bush", "root", "stem", "seed", "fruit",
    "tool", "hammer", "screwdriver", "wrench", "saw", "drill", "tape", "level", "nail", "screw",
    "clean", "wash", "sweep", "vacuum", "mop", "dust", "polish", "scrub", "rinse", "wipe",
    "science", "math", "history", "geography", "biology", "chemistry", "physics", "art", "music", "rich",
    "idea", "plan", "goal", "dream", "vision", "mission", "strategy", "tactic", "project", "task",
    "movie", "film", "actor", "actress", "director", "script", "scene", "camera", "screenplay", "studio",
    "water", "fire", "earth", "air", "energy", "power", "light", "dark", "heat", "cold",
    "language", "word", "letter", "sentence", "paragraph", "grammar", "vocabulary", "spelling", "reading", "writing",
    "weather", "temperature", "humidity", "forecast", "storm", "rainbow", "cloudy", "windy", "sunny", "snowy"
];

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const canvasLetters = document.getElementById("letterTried");
const ctxLetters = canvasLetters.getContext("2d");

function initializateHangman() {
    // Clear canvas before start drawing
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw body
    ctx.fillStyle = "black";
    ctx.fillRect(0, 250, 350, 1);
    ctx.fillRect(10, 0, 1, 250);
    ctx.fillRect(10, 0, 100, 1);
    ctx.fillRect(100, 0, 1, 50);
}

function drawHead() {
    // Draw head
    ctx.beginPath();
    ctx.arc(101, 65, 15, 0, 2 * Math.PI);
    ctx.stroke();
}

function drawBody() {
    // Draw body
    ctx.fillRect(101, 80, 1, 50);
}

function drawLeftHand() {
    // Draw left hand
    ctx.fillRect(102, 100, 25, 1);
}

function drawRightHand() {
    // Draw right hand
    ctx.fillRect(80, 100, 25, 1);
}

function drawLeftLeg() {
    // Draw left leg
    ctx.moveTo(102, 130);
    ctx.lineTo(75, 150);
    ctx.stroke();
}

function drawRightLeg() {
    // Draw right leg
    ctx.moveTo(102, 130);
    ctx.lineTo(130, 150);
    ctx.stroke();
}

function endMessage(status, color) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.textAlign = "center";
    ctx.font = "20px 'Press Start 2P'";
    ctx.fillStyle = color;
    ctx.fillText(status, canvas.width / 2, canvas.height / 2);

    ctx.fillStyle = "black";

    ctx.font = "15px 'Press Start 2P'";
    ctx.fillText("To play again", (canvas.width / 2), (canvas.height / 2) + 50);

    ctx.font = "10px 'Press Start 2P'";
    ctx.fillText("Press the green button =)", (canvas.width / 2), (canvas.height / 2) + 70);
}

function drawing(countError) {
    switch (countError) {
        case 0: initializateHangman(); break;
        case 1: drawHead(); break;
        case 2: drawBody(); break;
        case 3: drawLeftHand(); break;
        case 4: drawRightHand(); break;
        case 5: drawLeftLeg(); break;
        case 6: drawRightLeg(); break;
    }
}

function letterTried(position, letter, color) {
    ctxLetters.fillStyle = color;
    ctxLetters.textAlign = "center";
    ctxLetters.font = "20px 'Press Start 2P'";
    ctxLetters.fillText(letter, 70, 50 + position);
}

let countWins = 0;
let arrayLetter, arrayUnderscore, wordToGuess, countLives, rightAnswer, countError, countTries;
let wrongTry = [];

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function main() {
    document.getElementById('input-area').disabled = false;

    const randNum = randomNumber(0, arrayWords.length - 1);
    wrongTry = [];

    wordToGuess = arrayWords[randNum];
    arrayLetter = Array.from(wordToGuess);
    arrayUnderscore = new Array(arrayLetter.length).fill("_");
    countLives = 6;
    rightAnswer = 0;
    countError = 0;
    countTries = 0;

    document.getElementById('word').innerText = arrayUnderscore.join(" ");
    document.getElementById('lifes').innerText = "Lives: " + countLives;
    document.getElementById('wins').innerText = "Wins: " + countWins;
    document.getElementById('input-area').value = "";

    drawing(countError);
    ctxLetters.clearRect(0, 0, canvasLetters.width, canvasLetters.height);
}

function getLetter() {
    let inputLetter = document.getElementById('input-area').value.toLowerCase();
    document.getElementById('input-area').value = "";

    if (inputLetter.length != 1) {
        alert(`${inputLetter} is not a valid character. Only letters (A-Z)!`);
        return;
    }

    let isRight = false;

    for (let i = 0; i < arrayLetter.length; i++) {
        if (arrayLetter[i].toLowerCase() === inputLetter) {
            if (arrayLetter[i].toLowerCase() === inputLetter) {
                if (arrayUnderscore[i].toLowerCase() === inputLetter.toLowerCase()) {
                    alert("You already tried this letter");
                    return;
                }
                else {
                    arrayUnderscore[i] = inputLetter;
                    rightAnswer += 1;
                    document.getElementById('word').innerText = arrayUnderscore.join(" ");
                    isRight = true;
                }
            }
            else {
                if (wrongTry.includes(inputLetter)) {
                    alert("You already tried this letter");
                    return;
                }
            }
        }

        if (!isRight) {
            wrongTry.push(inputLetter);

            countLives -= 1;
            countError += 1;

            document.getElementById('lifes').innerText = "Lives: " + countLives;
            drawing(countError);

            countTries += 30;
            letterTried(countTries, inputLetter, "red");

            if (countLives === 0) {
                endMessage("You lost!! =(", "red");
                document.getElementById('word').innerText = arrayLetter.join(" ");
                document.getElementById('input-area').disabled = true;
                //main();
            }
        }
        else {
            countTries += 30;
            letterTried(countTries, inputLetter, "green");
        }

        if (rightAnswer === arrayLetter.length) {
            endMessage("You won!! =D", "green");
            countWins += 1;
            document.getElementById('wins').innerText = "Wins: " + countWins;
            document.getElementById('word').innerText = arrayLetter.join(" ");

            //main();
        }
        document.getElementById('input-area').value = "";

    }
}

document.getElementById('play-again').addEventListener("click", main);
document.getElementById('input-area').addEventListener("input", function (e) {
    getLetter();
});


main();
