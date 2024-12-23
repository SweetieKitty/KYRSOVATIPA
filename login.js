const loginButton = document.getElementById('loginButton');
const registerButton = document.getElementById('registerButton');
const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
const verificationForm = document.getElementById('verificationForm');
const verifyButton = document.getElementById('verifyButton');
const c = document.getElementById('backButton');
loginButton.addEventListener('click', () => {
    loginForm.style.display = 'flex';
    registerForm.style.display = 'none';
    verificationForm.style.display = 'none';
    loginButton.style.display = 'none';
    registerButton.style.display = 'none';
    backButton.style.display = 'flex';
});
document.getElementById('nextButton').addEventListener('click', function() {
    window.location.href = '../index.html'; 
});
registerButton.addEventListener('click', () => {
    loginForm.style.display = 'none';
    registerForm.style.display = 'flex';
    verificationForm.style.display = 'none';
    loginButton.style.display = 'none';
    registerButton.style.display = 'none';
    backButton.style.display = 'flex';
});

verifyButton.addEventListener('click', () => {
    registerForm.style.display = 'none';
    verificationForm.style.display = 'flex';
    loginButton.style.display = 'none';
    registerButton.style.display = 'none';
    backButton.style.display = 'flex';
});
document.getElementById('backButton').addEventListener('click', function() {
    window.location.href = 'login.html'; 
});
    
    
document.getElementById('nextButton1').addEventListener('click', function() {
    window.location.href = '../index.html'; 
});


document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("api-data-container");

  const apiUrl = "https://jsonplaceholder.typicode.com/posts"; // тестовий API

  // Запит до API
  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error("Помилка завантаження даних");
      }
      return response.json();
    })
    .then(data => {
      // Виведення даних на сторінку
      data.slice(0, 10).forEach(item => { // виводимо перші 10 елементів
        const card = document.createElement("div");
        card.className = "catalog-item";
        card.innerHTML = `
          <h3>${item.title}</h3>
          <p>${item.body}</p>
        `;
        container.appendChild(card);
      });
    })
    .catch(error => {
      console.error("Помилка:", error);
      container.innerHTML = "<p>Не вдалося завантажити дані</p>";
    });
});
