const questions = [
   
    {
        question: "Select the appropriate form: 'She enjoys _____ in the park.'",
        options: ["to walk", "walking"],
        answer: "walking"
    },
    {
        question: "Fill in the blank: 'He hopes _____ the match tomorrow.'",
        options: ["to win", "winning"],
        answer: "to win"
    },
    {
        question: "Choose the correct form: 'They are interested in _____ new languages.'",
        options: ["to learn", "learning"],
        answer: "learning"
    },
    {
        question: "Identify the correct form: 'She avoided _____ her homework.'",
        options: ["to do", "doing"],
        answer: "doing"
    },
    {
        question: "Select the appropriate form: 'I plan _____ a trip next month.'",
        options: ["to take", "taking"],
        answer: "to take"
    },
    {
        question: "Fill in the blank: 'He suggested _____ a movie tonight.'",
        options: ["to watch", "watching"],
        answer: "watching"
    },
    {
        question: "Choose the correct form: 'I dislike _____ in the rain.'",
        options: ["to run", "running"],
        answer: "running"
    },
    {
        question: "Identify the correct form: 'We decided _____ to the beach.'",
        options: ["to go", "going"],
        answer: "to go"
    },
    {
        question: "Select the appropriate form: 'They enjoy _____ soccer on weekends.'",
        options: ["to play", "playing"],
        answer: "playing"
    },
    {
        question: "Fill in the blank: 'I hope _____ good news.'",
        options: ["to hear", "hearing"],
        answer: "to hear"
    },
    {
        question: "Choose the correct form: 'She loves _____ with her friends.'",
        options: ["to hang out", "hanging out"],
        answer: "hanging out"
    },
    {
        question: "Identify the correct form: 'He finished _____ his project.'",
        options: ["to complete", "completing"],
        answer: "completing"
    },
    {
        question: "Select the appropriate form: 'They promised _____ us.'",
        options: ["to help", "helping"],
        answer: "to help"
    },
    {
        question: "Fill in the blank: 'I dislike _____ to loud music.'",
        options: ["to listen", "listening"],
        answer: "listening"
    },
    {
        question: "Choose the correct form: 'She suggested _____ a picnic.'",
        options: ["to have", "having"],
        answer: "having"
    },
    {
        question: "Identify the correct form: 'He enjoys _____ in the garden.'",
        options: ["to work", "working"],
        answer: "working"
    },
    {
        question: "Select the appropriate form: 'They are planning _____ a trip next summer.'",
        options: ["to take", "taking"],
        answer: "to take"
    },
    {
        question: "Fill in the blank: 'I want _____ my homework first.'",
        options: ["to finish", "finishing"],
        answer: "to finish"
    },
    {
        question: "Choose the correct form: 'He can't stand _____ early.'",
        options: ["to wake up", "waking up"],
        answer: "waking up"
    },
    {
        question: "Identify the correct form: 'She prefers _____ tea over coffee.'",
        options: ["to drink", "drinking"],
        answer: "drinking"
    }
];


let score = 0;

const questionsContainer = document.getElementById("questions");
const resultElement = document.getElementById("result");
const scoreElement = document.getElementById("score");
const correctAnswersContainer = document.getElementById("correct-answers");
const restartButton = document.getElementById("restart-button");
const quizForm = document.getElementById("quiz-form");

function loadQuestions() {
    questions.forEach((q, index) => {
        const questionDiv = document.createElement("div");
        questionDiv.classList.add("question");
        questionDiv.innerHTML = `
            <h3>${index + 1}. ${q.question}</h3>
            ${q.options.map((option, idx) => `
                <div>
                    <input type="radio" name="question${index}" id="q${index}option${idx}" value="${option}" />
                    <label for="q${index}option${idx}">${idx + 1}. ${option}</label>
                </div>
            `).join("")}
        `;
        questionsContainer.appendChild(questionDiv);
    });
}

quizForm.addEventListener("submit", (e) => {
    e.preventDefault();
    score = 0;
    let incorrectAnswers = [];

    questions.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption && selectedOption.value === q.answer) {
            score++;
        } else {
            incorrectAnswers.push({
                question: q.question,
                correctAnswer: q.answer,
                selectedAnswer: selectedOption ? selectedOption.value : "No answer selected"
            });
        }
    });

    showResult(incorrectAnswers);
});

restartButton.addEventListener("click", () => {
    resultElement.style.display = "none";
    correctAnswersContainer.innerHTML = ""; // Clear correct answers
    questionsContainer.innerHTML = "";
    loadQuestions();
});

function showResult(incorrectAnswers) {
    questionsContainer.innerHTML = ""; // Clear questions
    resultElement.style.display = "block"; // Show result container
    scoreElement.innerText = `${score} out of ${questions.length}`;

    // ভুল উত্তরগুলো প্রদর্শন করা
    if (incorrectAnswers.length > 0) {
        correctAnswersContainer.innerHTML = "<h3>Incorrect Answers:</h3>";
        incorrectAnswers.forEach(item => {
            correctAnswersContainer.innerHTML += `
                <div>
                    <p>Question: ${item.question}</p>
                    <p>Your Answer: ${item.selectedAnswer}</p>
                    <p>Correct Answer: ${item.correctAnswer}</p>
                    <hr/>
                </div>
            `;
        });
    } else {
        correctAnswersContainer.innerHTML = "<p>All answers are correct!</p>";
    }
}

loadQuestions();
