// Navbar Fixed
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#to-top');
  
    if (window.scrollY > fixedNav) {
      header.classList.add('navbar-fixed');
      toTop.classList.remove('hidden');
      toTop.classList.add('flex');
    } else {
      header.classList.remove('navbar-fixed');
      toTop.classList.remove('flex');
      toTop.classList.add('hidden');
    }
  };

const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');
hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

// Klik di luar hamburger
window.addEventListener('click', function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove('hamburger-active');
    navMenu.classList.add('hidden');
  }
});

// Darkmode toggle
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function () {
  if (darkToggle.checked) {
    html.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    html.classList.remove('dark');
    localStorage.theme = 'light';
  }
});

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  darkToggle.checked = true
} else {
  darkToggle.checked = false
}


const textElement = document.getElementById('typing-text');
const texts = ['Akhmad Syahbani.', 'Fulstack Developer.', 'Sipaling.'];
let textIndex = 0;
let charIndex = 0;

function typeText() {
  if (textIndex < texts.length) {
    if (charIndex < texts[textIndex].length) {
      textElement.textContent += texts[textIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeText, 100); // Waktu delay antar karakter (misalnya 100ms)
    } else {
      setTimeout(eraseText, 1000); // Waktu delay sebelum menghapus teks (misalnya 1000ms)
    }
  } else {
    textIndex = 0;
    setTimeout(typeText, 1000); // Waktu delay sebelum mulai dari awal (misalnya 1000ms)
  }
}

function eraseText() {
  if (textElement.textContent.length > 0) {
    textElement.textContent = textElement.textContent.slice(0, -1);
    setTimeout(eraseText, 50); // Waktu delay antar karakter saat menghapus (misalnya 50ms)
  } else {
    textIndex++;
    charIndex = 0;
    setTimeout(typeText, 1000); // Waktu delay sebelum mengetik teks berikutnya (misalnya 1000ms)
  }
}

// Mulai animasi ketika halaman dimuat
window.onload = typeText;
