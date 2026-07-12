const mobileBtn = document.querySelector('[data-mobile-btn]');
const navLinks = document.querySelector('[data-navlinks]');
if (mobileBtn && navLinks) {
  mobileBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
}

const search = document.querySelector('[data-search]');
if (search) {
  const cards = [...document.querySelectorAll('[data-doc-card]')];
  search.addEventListener('input', () => {
    const q = search.value.trim().toLowerCase();
    cards.forEach(card => {
      const hay = card.innerText.toLowerCase();
      card.classList.toggle('hidden', q && !hay.includes(q));
    });
  });
}

const current = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('a[data-nav]').forEach(a => {
  const href = a.getAttribute('href');
  if (href && href.endsWith(current)) a.classList.add('active');
});
