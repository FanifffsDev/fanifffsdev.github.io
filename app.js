const cards = document.querySelectorAll('.category-card');
  
    cards.forEach(card => {
      card.addEventListener('click', () => {
        const panel = document.querySelector('.category-panel');
  
        const categoryTitle = panel.querySelector('h2');
        const categoryDescription = panel.querySelector('.category-content p');
  
        const cardTitle = card.querySelector('h3').textContent;
        const cardDescription = card.querySelector('.card-description p').textContent;

        categoryTitle.textContent = cardTitle;
        categoryDescription.textContent = cardDescription;
  
        panel.style.display = 'flex';

        const theoryButton = panel.querySelector('.buttons .theory-button')

        const practiceButton = panel.querySelector('.buttons .practice-button')
        
        theoryButton.addEventListener('click', () => {
          const category = card.dataset.category;
          window.location.href = `categories/${category}/theory.html`
        });

        practiceButton.addEventListener('click', () => {
          const category = card.dataset.category;
          window.location.href = `categories/${category}/practice.html`
        });
      });
    });
  
    const closeButton = document.querySelector('.category-panel .close-button');
  
    closeButton.addEventListener('click', () => {
      document.querySelector('.category-panel').style.display = 'none';
    });