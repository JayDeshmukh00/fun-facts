// ===== ELEMENTS =====
const content = document.getElementById("content");
const clickSound = document.getElementById("clickSound");
const successSound = document.getElementById("successSound");

// ===== UTILITY =====
function playClick() {
    if (clickSound) clickSound.play();
}

// ===== LOCAL DATA =====
const marathiJokes = [
    "बायको: जेवण काय आहे? नवरा: भूक!",
    "शिक्षक: अभ्यास का नाही केला? विद्यार्थी: YouTube वर revision होतं",
    "मुलगा: आई पास झालो! आई: आधी exam दिलीस का?"
];

const nostalgiaFacts = [
    "90s kids waited all week for Sunday cartoons.",
    "Rewinding cassettes using a pencil was normal.",
    "Phone numbers were memorized, not saved."
];

const retroMusicFacts = [
    "People recorded songs directly from the radio.",
    "Walkman was once the coolest gadget.",
    "Mix tapes existed before playlists."
];

const gameFacts = [
    "Snake game ruled Nokia phones.",
    "Mario was originally called Jumpman.",
    "Contra cheat code made you invincible."
];

const challenges = [
    "Smile for 10 seconds 😊",
    "Send a meme to a friend now!",
    "Don’t touch your phone for 15 minutes."
];

// ===== API FUNCTIONS =====
async function catFact() {
    playClick();
    try {
        const res = await axios.get("https://catfact.ninja/fact");
        content.innerText = res.data.fact;
    } catch {
        content.innerText = "Failed to load cat fact 😿";
    }
}

async function dogFact() {
    playClick();
    try {
        const res = await axios.get("https://dogapi.dog/api/v2/facts");
        content.innerText = res.data[0].attributes.body;
    } catch {
        content.innerText = "Failed to load dog fact 🐶";
    }
}

async function joke() {
    playClick();
    try {
        const res = await axios.get("https://official-joke-api.appspot.com/random_joke");
        content.innerText = `${res.data.setup} 🤣 ${res.data.punchline}`;
    } catch {
        content.innerText = "Joke API failed 😅";
    }
}

async function crazyFact() {
    playClick();
    try {
        const res = await axios.get("https://uselessfacts.jsph.pl/random.json?language=en");
        content.innerText = res.data.text;
    } catch {
        content.innerText = "Crazy fact not available 🤯";
    }
}

// ===== LOCAL CONTENT FUNCTIONS =====
function marathiJoke() {
    playClick();
    content.innerText =
        marathiJokes[Math.floor(Math.random() * marathiJokes.length)];
}

function showNostalgia() {
    playClick();
    content.innerText =
        nostalgiaFacts[Math.floor(Math.random() * nostalgiaFacts.length)];
}

function retroMusic() {
    playClick();
    content.innerText =
        retroMusicFacts[Math.floor(Math.random() * retroMusicFacts.length)];
}

function oldGames() {
    playClick();
    content.innerText =
        gameFacts[Math.floor(Math.random() * gameFacts.length)];
}

function challenge() {
    playClick();
    content.innerText =
        challenges[Math.floor(Math.random() * challenges.length)];
}

// ===== EXTRA FEATURES =====
function saveFav() {
    if (!content.innerText) return;
    localStorage.setItem("favorite", content.innerText);
    if (successSound) successSound.play();
    alert("Saved to favorites ❤️");
}

function toggleTheme() {
    document.body.classList.toggle("light");
}
