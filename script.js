const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex ++;
    setNextQuestion();
})

function startGame() {
startButton.classList.add('hide');
shuffledQuestions = questions.sort(() => Math.random() - .5);
currentQuestionIndex = 0;
questionContainerElement.classList.remove('hide');
setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);


}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    })
}

function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    } 
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    }else {
        startButton.innerText = 'Restart';
        startButton.classList.remove('hide');
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    }else {
        element.classList.add('incorrect');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('incorrect');
}


const questions = [
    {
        question: "What is my name?",
        answers: [
            {text: 'Anele', correct: true},
            {text: 'Zanele', correct: false},
            {text: 'Nkateko', correct: false},
            {text: 'Anne', correct: false}
        ]
    },
    {
        question: "Where was I born?",
        answers: [
            {text: 'Pretoria', correct: false},
            {text: 'Pietersburg', correct: false},
            {text: 'Mafikeng', correct: true},
            {text: 'Durban', correct: false}
        ]
    },
    {
        question: "What is my star sign?",
        answers: [
            {text: 'Taurus', correct: false},
            {text: 'Sagitarius', correct: true},
            {text: 'Aquarius', correct: false},
            {text: 'Scorpio', correct: false}
        ]
    },
    {
        question: "What is my major?",
        answers: [
            {text: 'Politics', correct: false},
            {text: 'Computer Science', correct: false},
            {text: 'Law', correct: false},
            {text: 'Finance', correct: true}
        ]
    },
    {
        question: "How old am I?",
        answers: [
            {text: '25', correct: false},
            {text: '20', correct: true},
            {text: '17', correct: false},
            {text: '22', correct: false}
        ]
    },
    {
        question: "What are my interests?",
        answers: [
            {text: 'FinTech', correct: true},
            {text: 'Asset/Portfolio Management', correct: true},
            {text: 'Analytics', correct: true},
            {text: 'Organisational Psychology', correct: true}
        ]
    },
    {
        question: "What are some of my hobbies?",
        answers: [
            {text: 'Literature', correct: true},
            {text: 'Beauty & Health', correct: true},
            {text: 'Public Speaking', correct: true},
            {text: 'Softball', correct: true}
        ]
    },
    {
        question: "Which statements most accurately describe me?",
        answers: [
            {text: 'Complacent', correct: false},
            {text: 'Analytical', correct: true},
            {text: 'Artistic', correct: false},
            {text: 'Emotive', correct: false}
        ]
    },
    {
        question: "What is my personality type?",
        answers: [
            {text: 'Architect: INTJ-A/ INTJ-T', correct: false},
            {text: 'Logician: INTP-A/ INTP-T', correct: true},
            {text: 'Commander: ENTJ-A/ ENTJ-T', correct: false},
            {text: 'Debater: ENTP-A/ ENTP-T', correct: false}
        ]
    },
]