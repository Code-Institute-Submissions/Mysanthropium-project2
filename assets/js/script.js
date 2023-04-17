let questions = [
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

let questionElement = document.getElementById("question");
let answers = document.getElementById("answers");
let nextQuestion = document.getElementById("next-question");