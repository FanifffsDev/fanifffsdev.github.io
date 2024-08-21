let score = 0
let currentExample = generateExample();

function generateExample() {
  let a, b;
  do {
    a = Math.floor(Math.random() * 9) + 1; 
    b = Math.floor(Math.random() * 9) + 1; 

    a*= a;
  } while (a % b !== 0);

  const example = `<span class="number">${a}</span> ÷ <span class="number">${b}</span>`;
  document.getElementById('example').innerHTML = example;
  return { a, b, result: a / b };
}

document.getElementById('submit').addEventListener('click', () => {
  const userAnswer = parseInt(document.getElementById('answer').value);
  if (isNaN(userAnswer)) {
    alert('Пожалуйста, введите число.');
    return;
  }
  if (userAnswer === currentExample.result) {
    score++;
    document.getElementById('score').textContent = `Счет: ${score}`;
    document.getElementById('submit').style.display = 'none';
    document.getElementById('next').style.display = 'inline';

    document.getElementById('next').click();
  } else {
    document.getElementById('correct-answer').textContent = currentExample.result;
    document.getElementById('wrong-answer-panel').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
  }
});

document.getElementById('next').addEventListener('click', () => {
  currentExample = generateExample();
  document.getElementById('answer').value = '';
  document.getElementById('submit').style.display = 'inline';
  document.getElementById('next').style.display = 'none';
  document.getElementById('wrong-answer-panel').style.display = 'none';
  document.getElementById('overlay').style.display = 'none';
});

document.getElementById('try-again').addEventListener('click', () => {
  document.getElementById('answer').value = '';
  document.getElementById('wrong-answer-panel').style.display = 'none';
  document.getElementById('overlay').style.display = 'none';
});

document.getElementById('try-again-theory').addEventListener('click', () => {
  window.location.href = 'theory.html'
});