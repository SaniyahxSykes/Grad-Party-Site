
const loveButton = document.getElementById('lovebutton');
const popup = document.getElementById('popup');
const closeBtn = document.querySelector('.close-btn');

// Show popup when button is clicked
loveButton.addEventListener('click', () => {
  popup.classList.add('show');
});

// Close popup when X is clicked
closeBtn.addEventListener('click', () => {
  popup.classList.remove('show');
});

// Close popup when clicking outside the content
popup.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.classList.remove('show');
  }
});

const phrases = [
  "Computer Science Major",
  "HBCU Bound",
  "Class of 2025!",
]; 

let i = 0;
let j = 0;
let currentPhrase = [];
let isDeleting = false;
let isEnd = false; 

function loop() {
  isEnd = false; 
  const typedText = document.getElementById('typed-text'); 
  
  if (i < phrases.length) {
    if (!isDeleting && j <= phrases[i].length) {
      currentPhrase.push(phrases[i][j]);
      j++;
      typedText.textContent = currentPhrase.join('');
    } 
    
    if (isDeleting && j <= phrases[i].length) {
      currentPhrase.pop();
      j--;
      typedText.textContent = currentPhrase.join('');
    }
    
    if (j == phrases[i].length) {
      isEnd = true;
      isDeleting = true;
    }
    
    if (isDeleting && j === 0) {
      currentPhrase = [];
      isDeleting = false;
      i++;
      if (i === phrases.length) {
        i = 0;
      }
    }
  }
  
  const spedUp = Math.random() * (80 - 50) + 50;
  const normalSpeed = Math.random() * (300 - 200) + 200;
  const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed;
  
  setTimeout(loop, time);
}

// Start the typewriter effect when page loads
window.addEventListener('load', () => {
  loop();
});

document.getElementById("magic-cap").addEventListener("click", function(){
  confetti({ particleCount: 200, spread: 100, origin: { y: 0.6 } });
});