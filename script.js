const menuToggle = document.querySelector('.site-nav__toggle');
const mobileMenu = document.querySelector('[data-mobile-menu]');
const menuLabel = document.querySelector('[data-menu-label]');
const siteStatus = document.querySelector('[data-site-status]');
const bagLink = document.querySelector('[href*="view=cart"]');
const bagCount = document.querySelector('[data-bag-count]');

function setMenu(open, returnFocus = false) {
  if (!menuToggle || !mobileMenu) return;

  menuToggle.setAttribute('aria-expanded', String(open));
  menuLabel.textContent = open ? 'Close menu' : 'Open menu';
  mobileMenu.classList.toggle('hidden', !open);

  if (returnFocus) menuToggle.focus();
}

menuToggle?.addEventListener('click', () => {
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  setMenu(!isOpen);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuToggle?.getAttribute('aria-expanded') === 'true') {
    setMenu(false, true);
  }
});

window.addEventListener('resize', () => {
  if (window.matchMedia('(min-width: 1024px)').matches) setMenu(false);
});

if (bagLink && bagCount) {
  const count = Number.parseInt(bagCount.textContent, 10);
  const label = count === 0 ? 'Bag, empty' : `Bag, ${count} ${count === 1 ? 'item' : 'items'}`;
  bagLink.setAttribute('aria-label', label);
}

if (siteStatus) {
  window.announceSiteStatus = (message) => {
    siteStatus.textContent = '';
    window.setTimeout(() => { siteStatus.textContent = message; }, 25);
  };
}
