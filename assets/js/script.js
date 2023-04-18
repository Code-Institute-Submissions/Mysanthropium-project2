/**
 * Store elements in these variables
 */
const quizContainer = document.getElementById('quiz-box');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

function quizGame() {

}

function showResults() {

}

/**
 * Display quiz
 */
quizGame();

/**
 * submit button, show results
 */
submitButton.addEventListener('click', showResults);

/**
 * Quiz questions
 */
const myQuestions = [
    {
        question: "How many band members had The Beatles?",
        answers: {
            a: "3",
            b: "4",
            c: "5"
        },
        correctAnswer: "b"
    },
    {
        question: "Who's the lead singer in the Foo Fighters?",
        answers: {
            a: "John Lennon",
            b: "Ozzy Osbourne",
            c: "Lemmy Kilmister",
            d: "Dave Grohl"
        },
        correctAnswer: "d"
    }
]