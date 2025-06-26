import { useEffect } from 'react';

const upperAndLowerCase = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const getRandomLetter = () =>
  upperAndLowerCase[Math.floor(Math.random() * upperAndLowerCase.length)];

function scrambleOnce(selectors, duration = 1200) {
  let charData = [];
  let startTime = null;

  function splitChars(el) {
    if (el.dataset.scrambled) return;
    el.dataset.scrambled = 'true';
    const chars = el.textContent.split('');
    el.innerHTML = '';
    chars.forEach((char) => {
      const span = document.createElement('span');
      span.className = 'char';
      span.textContent = char;
      span.dataset.orig = char;
      el.appendChild(span);
    });
  }

  function updateCharData() {
    charData = [];
    selectors.forEach((sel) => {
      document.querySelectorAll(sel).forEach((el) => {
        splitChars(el);
        el.querySelectorAll('.char').forEach((char) => {
          charData.push({
            el: char,
            orig: char.dataset.orig || char.textContent
          });
        });
      });
    });
  }

  function animateScramble(ts) {
    if (!startTime) startTime = ts;
    const progress = Math.min(1, (ts - startTime) / duration);
    charData.forEach((data) => {
      if (progress < 1) {
        data.el.textContent = getRandomLetter();
      } else {
        data.el.textContent = data.orig;
      }
    });
    if (progress < 1) {
      requestAnimationFrame(animateScramble);
    }
  }

  updateCharData();
  requestAnimationFrame(animateScramble);
}

export default function TextScrambleEffect() {
  useEffect(() => {
    if (localStorage.getItem('scrambleDone')) return;
    // Ajoute ici tous les sélecteurs à animer sur toutes les pages
    const selectors = [
      '.home-title',
      '.home-subtitle',
      '.cta-button',
      '.projects-title',
      '.project-block-title',
      '.projects-cards-title',
      '.project-block-desc',
      // Ajoute d'autres classes selon tes pages
    ];
    scrambleOnce(selectors, 1200);
    localStorage.setItem('scrambleDone', '1');
  }, []);
  return null;
} 