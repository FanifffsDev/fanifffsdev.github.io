function saveUserData() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const name = document.getElementById('name').value;
  
    if (password !== confirmPassword) {
      document.getElementById('password').classList.add('error');
      document.getElementById('confirmPassword').classList.add('error');
      alert('Пароли не совпадают');
      return;
    }
  
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    localStorage.setItem('name', name);
  
    console.log('Данные успешно сохранены в localStorage');
    document.getElementById('registration-form').reset();
  }
  
  document.getElementById('registration-form').addEventListener('submit', (event) => {
    event.preventDefault();
    saveUserData();
  });