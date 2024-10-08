const examples = [];
        let score = 0;
        let timer;
        const totalQuestions = 20;

        function generateExamples() {
            examples.length = 0;
            for (let i = 0; i < totalQuestions; i++) {
                const a = Math.floor(Math.random() * 20) + 1;
                const b = Math.floor(Math.random() * 10) + 1;
                const answer = a + b;
                examples.push({ question: `${a} + ${b}`, answer });
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
            let timeLeft = 300;
            const timerElement = document.querySelector('.timer');
        
            timerElement.className = 'timer green';
        
            timer = setInterval(() => {
                const minutes = Math.floor(timeLeft / 60);
                const seconds = timeLeft % 60;
                
                document.getElementById('timeLeft').innerText = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        
                if (timeLeft <= 120) {
                    timerElement.className = 'timer yellow'; 
                }
                
                if (timeLeft <= 60) {
                    timerElement.className = 'timer red';
                }
        
                if (timeLeft <= 0) {
                    clearInterval(timer);
                    submitTest();
                }
        
                timeLeft--;
            }, 1000);
        }

        function submitTest() {
            document.getElementById('finishButton').classList.add('hidden');
            clearInterval(timer);
            examples.forEach((ex, index) => {
                const userAnswer = parseInt(document.getElementById(`answer${index}`).value);
                const answerField = document.getElementById(`answer${index}`);
                
                if (userAnswer === ex.answer) {
                    score++;
                    answerField.classList.add('correct'); 
                } else {
                    answerField.classList.add('incorrect'); 
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