/**
 * List of quiz questions
 */
const questions = [
    {
        question: "How many band members had The Beatles?",
        answers: [
            { text: "3", correct: false},
            { text: "4", correct: true},
            { text: "5", correct: false},
            { text: "6", correct: false},
        ]
    },
    {
        question: "Who's the lead singer in the Foo Fighters?",
        answers: [
            { text: "John Lennon", correct: false},
            { text: "Ozzy Osbourne", correct: false},
            { text: "Lemmy Kilmister", correct: false},
            { text: "Dave Grohl", correct: true},
        ]
    },
    {
        question: "What year did Lemmy Kilmister die?",
        answers: [
            { text: "2015", correct: true},
            { text: "2017", correct: false},
            { text: "2018", correct: false},
            { text: "2020", correct: false},
        ]
    },
    {
        question: "What country is the band ABBA from?",
        answers: [
            { text: "England", correct: false},
            { text: "Sweden", correct: true},
            { text: "Denmark", correct: false},
            { text: "Finland", correct: false},
        ]
    },
    {
        question: "What year did ABBA release their first album?",
        answers: [
            { text: "1972", correct: false},
            { text: "1976", correct: false},
            { text: "1983", correct: false},
            { text: "1973", correct: true},
        ]
    },
    {
        question: "What year was the release of The Black Album by Metallica?",
        answers: [
            { text: "1991", correct: true},
            { text: "1993", correct: false},
            { text: "1987", correct: false},
            { text: "1989", correct: false},
        ]
    },
    {
        question: "How many band members is there in Metallica?",
        answers: [
            { text: "3", correct: false},
            { text: "5", correct: false},
            { text: "4", correct: true},
            { text: "6", correct: false},
        ]
    },
    {
        question: "What's Red Hot Chili Peppers basist called?",
        answers: [
            { text: "Mike", correct: false},
            { text: "Flea", correct: true},
            { text: "Balz", correct: false},
            { text: "Michael", correct: false},
        ]
    },
    {
        question: "Who was the lead singer in Nirvana?",
        answers: [
            { text: "Dave Grohl", correct: false},
            { text: "Chad Channing", correct: false},
            { text: "Curt Cobain", correct: true},
            { text: "Chester Bennington", correct: false},
        ]
    },
    {
        question: "What country is Metallicas drummer, Lars Ulrich from?",
        answers: [
            { text: "Sweden", correct: false},
            { text: "Norway", correct: false},
            { text: "Finland", correct: false},
            { text: "Denmark", correct: true},
        ]
    }
];

/**
 * Variables 
 */
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

/**
 * Countdown timer, the first one I had didnt reset on each question, so I had some great help from tutor support so get it sorted out!
 */
let timer = document.getElementById("timer-box");
let timeLeft = 30;
let timerId = setInterval(startTimer, 1000);
function startTimer(duration) {
    timeLeft = duration;
    if (timerId) {
        clearInterval(timerId);
        
    } timerId = setInterval (() => {
        if (timeLeft === -1) {
            clearTimeout (timerId);
            doSomething();
        }
     else {
        timer.innerHTML = timeLeft + ' seconds remaining';
        timeLeft--;
    }
}, 1000);
}



/**
 * This basic quiz I found on Youtube after a bit of research, it does pretty much exactly what I was looking for, I made a couple of small changes to it.
 * Mostly because I wanted a timer, more questions and some different variable names.
 * Variables to keep the question index and score
 */
let currentQuestionIndex = 0;
let score = 0;

/**
 * Start function to reset the score and show Next button
 */
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
    timer.style.display = "block";
}

/**
 * Display questions with numbers, add button function and check if answer is correct/incorrect
 */
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
    startTimer(30);
}

/**
 * Resets the previous question function and removes the next button if no answer is selected
 */
function resetState() {
    nextButton.style.display = "none";
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

/**
 * Check if the selected answer is correct then add point, and display next button.
 */
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

/**
 * Display your score and play again button to restart quiz
 */
function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
    
}

/**
 * If there's no questions left, show score
 */
function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        showQuestion();
        timer.style.display = "block";
    } else {
        showScore();
        timer.style.display = "none";
    }
}

/**
 * If there's no questions left, restart the quiz
 */
nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    } else {
        startQuiz();
    }
})

startQuiz();
