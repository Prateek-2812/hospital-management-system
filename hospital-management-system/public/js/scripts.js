import { getPageContent } from '../src/controllers/appController.js';

document.addEventListener('DOMContentLoaded', () => {
  const contentSection = document.getElementById('content');
  const navButtons = document.querySelectorAll('.nav-btn, .side-btn');

  navButtons.forEach(button => {
    button.addEventListener('click', () => {
      const page = button.getAttribute('data-page');
      contentSection.innerHTML = getPageContent(page);
    });
  });
});
