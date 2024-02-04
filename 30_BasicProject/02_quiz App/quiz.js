const question = [
    {
        question: 'Which is largest animal in the world ?',
        answers:[
            {text:"Shark", correct:false},
            {text:"Bhue whale", correct:true},
            {text:"Elephant", correct:false},
            {text:"Giraffe", correct:false}
        ]
    },
    {
        question: 'What is the capital of India ?',
        answers:[
            {text:"pune", correct:false},
            {text:"mumbai", correct:false},
            {text:"New Delhi", correct:true},
            {text:"bengaluru", correct:false}
        ]

    },
    {
        question: 'What is the poorest state in India ?',
        answers:[
            {text:"Bihar", correct:true},
            {text:"Maharastra", correct:false},
            {text:"Odisa", correct:false},
            {text:"Up", correct:false}
        ]
    },
    {
        question: 'Where is India’s Silicon Valley located?',
        answers:[
            {text:"Chennai", correct:false},
            {text:"Bhopal", correct:false},
            {text:"Nagpur", correct:false},
            {text:"Bangalore", correct:true}
        ]
    }
];

const questionElement = document.querySelector("#questions");
const answerButtons = document.querySelector("#buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;
function startQuiz() {
    currentQuestionIndex= 0;
    score= 0;
    nextButton.innerHTML = "Next";
    showQuestions();
}
function showQuestions() {
    resetState();
    let currentQuestion = question[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". "+ currentQuestion.question;

    currentQuestion.answers.forEach(answers => {
        const button = document.createElement('button');
        button.innerHTML = answers.text;
        button.classList.add('btn')
        answerButtons.appendChild(button)
        if(answers.correct){
            button.dataset.correct = answers.correct;
        }
        button.addEventListener("click", selectAnswer);
    })
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild)
    }

}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true';
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add('correct')
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `Your score ${score} out of ${question.length} !`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}
function handleNextButton(){
    currentQuestionIndex ++;
    if (currentQuestionIndex < question.length) {
        showQuestions()
    }else{
        showScore();
    }
}

nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < question.length) {
        handleNextButton();
    }else{
        startQuiz()
    }
})

startQuiz();