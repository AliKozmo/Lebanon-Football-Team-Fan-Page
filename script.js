// Pour etre Honnete j'ai eu recours a l'aide de chatgpt pour cette page 
const questions = [
    {
        question: "Who is the all-time top scorer for the Lebanon national football team?",
        options: ["Hassan Maatouk", "Roda Antar", "Ali Hamam", "Mahmoud Khamis"],
        correctAnswer: "Roda Antar"
    },
    {
        question: "When did Lebanon first qualify for the AFC Asian Cup, and how did they perform in their debut?",
        options: ["1996, reached the quarter-finals", "2000, reached the group stage", "2007, reached the round of 16", "2011, reached the semi-finals"],
        correctAnswer: "2000, reached the group stage"
    },
    {
        question: "Who is the current head coach of the Lebanon national football team?",
        options: ["Marc Wilmots", "Bertrand Marchand", "Alexander Doba", "Cedomir Janevski"],
        correctAnswer: "Alexander Doba"
    },
    {
        question: "What are some of Lebanon's biggest achievements in international football?",
        options: ["Winning the AFC Asian Cup", "Qualifying for the FIFA World Cup", "Qualifying for the AFC Asian Cup in 2000, 2011, and 2019", "Winning the Arab Cup"],
        correctAnswer: "Qualifying for the AFC Asian Cup in 2000, 2011, and 2019"
    },
    {
        question: "Which stadium serves as the home venue for the Lebanon national football team?",
        options: ["Fouad Chehab Stadium", "Camille Chamoun Sports City Stadium", "Kamal Saleh Stadium", "Al-Madina Stadium"],
        correctAnswer: "Camille Chamoun Sports City Stadium"
    }
];


let currentQuestionIndex = 0;
let score = 0;

function setActive(element) {
    
    var links = document.querySelectorAll('header ul li a');
    links.forEach(function(link) {
        link.classList.remove('active');
    });

    
    element.classList.add('active');
}


function shuffleQuestions() {
    
    questions.sort(() => Math.random() - 0.5);
}

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    const questionText = document.getElementById('question-text');
    const answerList = document.getElementById('answer-list');

    questionText.textContent = currentQuestion.question;

    
    answerList.innerHTML = "";

    
    currentQuestion.options.forEach(option => {
        const listItem = document.createElement('li');
        listItem.textContent = option;
        listItem.classList.add('answer-option');
        listItem.onclick = () => checkAnswer(option, listItem);
        answerList.appendChild(listItem);
    });
}

function checkAnswer(selectedOption, listItem) {
    const currentQuestion = questions[currentQuestionIndex];
    
    
    if (selectedOption === currentQuestion.correctAnswer) {
        score++;
        listItem.style.backgroundColor = 'green';
    } else {
        listItem.style.backgroundColor = 'red';
    }

    
    const allOptions = document.querySelectorAll('.answer-option');
    allOptions.forEach(option => option.onclick = null);

    
    document.getElementById('next-button').disabled = false;
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
        document.getElementById('next-button').disabled = true;
    } else {
        endQuiz();
    }
}

function endQuiz() {
    document.getElementById('score').textContent = score;
    document.getElementById('score-container').style.display = 'block';
    document.querySelector('.question-container').style.display = 'none';
    document.getElementById('next-button').style.display = 'none';
}

function replayQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    shuffleQuestions();
    displayQuestion();
    document.getElementById('score-container').style.display = 'none';
    document.querySelector('.question-container').style.display = 'block';
    document.getElementById('next-button').style.display = 'block';
    document.getElementById('next-button').disabled = true;
}


shuffleQuestions();
displayQuestion();
