function buildQuiz(){
    const output = [];

    myQuestions.forEach(
        (currentQuestion, questionNumber) => {

            const answers = [];

            for(letter in currentQuestion.answers){

                answers.push(
                    `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter} : ${currentQuestion.answers[letter]}
                    </label>`
                );
            }

            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
                <div class="answers"> ${answers.join('')} </div>`
            );
        }
    );

    quizContainer.innerHTML = output.join('');
}

function showResults() {

}

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
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
];

/**
 * Start Quiz
 */
buildQuiz();

/**
 * submit button, show results
 */
submitButton.addEventListener('click', showResults);


