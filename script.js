/* ---------- Image Carousel ---------- */
const images = [
    "https://picsum.photos/400/250?1",
    "https://picsum.photos/400/250?2",
    "https://picsum.photos/400/250?3"
];

let index = 0;

function nextImage() {
    index = (index + 1) % images.length;
    document.getElementById("carouselImage").src = images[index];
}

function prevImage() {
    index = (index - 1 + images.length) % images.length;
    document.getElementById("carouselImage").src = images[index];
}

/* ---------- Quiz ---------- */
const quiz = {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "CSS", "JavaScript"],
    answer: "CSS"
};

document.getElementById("question").innerText = quiz.question;

quiz.options.forEach(option => {
    const btn = document.createElement("button");
    btn.innerText = option;
    btn.onclick = () => {
        document.getElementById("result").innerText =
            option === quiz.answer ? "Correct Answer ✅" : "Wrong Answer ❌";
    };
    document.getElementById("options").appendChild(btn);
});

/* ---------- Fetch API ---------- */
function getJoke() {
    fetch("https://official-joke-api.appspot.com/random_joke")
        .then(response => response.json())
        .then(data => {
            document.getElementById("joke").innerText =
                data.setup + " - " + data.punchline;
        })
        .catch(() => {
            document.getElementById("joke").innerText = "Error fetching joke!";
        });
}