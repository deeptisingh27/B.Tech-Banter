const quotes = [
    { text: "The most important line of code is the one you delete." }, 
    { text: "Debugging is twice as hard as writing the code in the first place. That’s why we learn to be patient coders." }, 
    { text: "Don’t just aim to pass the exams, aim to build the future you want." },
    { text: "Every great software engineer once struggled with their first ‘Hello World’." },
    { text: "Your code might fail a hundred times, but success only takes once." },
    { text: "The best project is the one you finish, not the one you keep perfecting." },
    { text: "Lab assignments are like bugs — they appear out of nowhere at the wrong time." },
    { text: "Every group project has three types of students: one who does all the work, one who copies, and one who disappears." },
    { text: "Exam preparation = 10% reading, 90% praying." },
    { text: "Half of B.Tech is debugging your code, the other half is debugging your life." },
    { text: "Ctrl + C and Ctrl + V: the real heroes of college assignments." },
    { text: "Canteen samosas and last-minute coding fuel 90% of student life." },
    { text: "Programming is the art of telling another human what you want the computer to do." },
    { text: "The best way to learn coding is to write more code, not just read about it." },
    { text: "The only thing that gets executed more than your code is your patience." },
    { text: "Your greatest asset as a coder is not what you know, but your ability to Google what you don't." },
    { text: "Finding a semicolon in C++ is like finding a needle in a haystack- a very large, very angry haystack." },
    { text: "Dream in code, build in projects, succeed in life." }
];

let firstClick = true;

function newQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteEl = document.getElementById("quote");
    const authorEl = document.getElementById("author");
    const button = document.querySelector(".generate");
    const selected = quotes[randomIndex];

    quoteEl.style.opacity = 0;
    authorEl.style.opacity = 0;

    setTimeout(() => {
        quoteEl.textContent = selected.text;
        authorEl.textContent = selected.author ? "— " + selected.author : "";
        quoteEl.style.opacity = 1;
        authorEl.style.opacity = 1;
    }, 300);

    if (firstClick) {
        button.textContent = "Next Line";
        firstClick = false;
    }
}

document.addEventListener("keydown", (e) => {
    if (e.code === "Space") {
        newQuote();
    }
});
