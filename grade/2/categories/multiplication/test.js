const examples = [];
let score = 0;
let timer;
const totalQuestions = 10;

function generateExamples() {
    examples.length = 0;
    for (let i = 0; i < totalQuestions; i++) {
        const a = Math.floor(Math.random() * 10) + 1;
        const b = Math.floor(Math.random() * 10) + 1;
        const answer = a * b;
        examples.push({ question: `${a} * ${b}`, answer });
    }
}

function displayExamples() {
    const examplesDiv = document.getElementById('examples');
    examplesDiv.innerHTML = '';
    examples.forEach((ex, index) => {
        examplesDiv.innerHTML += `
            <div class="example">
                ${ex.question} = <input type="number" id="answer${index}">
            </div>
        `;
    });
}

function startTimer() {
    let timeLeft = 30;
    document.getElementById('timeLeft').innerText = timeLeft;
    const timerElement = document.querySelector('.timer');

    timerElement.className = 'timer green';

    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('timeLeft').innerText = timeLeft;

        if (timeLeft <= 10) {
            timerElement.className = 'timer yellow'; 
        }
        
        if (timeLeft <= 5) {
            timerElement.className = 'timer red';
        }

        if (timeLeft <= 0) {
            clearInterval(timer);
            submitTest();
        }
    }, 1000);
}

function submitTest() {
    document.getElementById('finishButton').classList.add('hidden');
    clearInterval(timer);
    examples.forEach((ex, index) => {
        const userAnswer = parseInt(document.getElementById(`answer${index}`).value);
        if (userAnswer === ex.answer) {
            score++;
        } else {
            document.getElementById(`answer${index}`).classList.add('incorrect');
        }
    });
    showResult();
}

function showResult() {
    document.getElementById('score').innerText = `Правильные ответы: ${score} из ${totalQuestions}`;
    document.getElementById('result').style.display = 'block';
    document.getElementById('finishButton').style.display = 'none';
}

document.getElementById('finishButton').addEventListener('click', submitTest);
document.getElementById('retryButton').addEventListener('click', () => {
    score = 0;
    generateExamples();
    displayExamples();
    startTimer();
    document.getElementById('result').style.display = 'none';
    document.getElementById('finishButton').style.display = 'inline-block';
});

generateExamples();
displayExamples();
startTimer();