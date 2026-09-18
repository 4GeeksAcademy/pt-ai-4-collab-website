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

const purchaseButton = document.getElementById('purchaseButton');
const confirmationModal = document.getElementById('confirmationModal');
const closeModalButton = document.getElementById('closeModal');

if (purchaseButton && confirmationModal && closeModalButton) {
  purchaseButton.addEventListener('click', () => {
    confirmationModal.classList.add('visible');
  });

  closeModalButton.addEventListener('click', () => {
    confirmationModal.classList.remove('visible');
  });

  confirmationModal.addEventListener('click', (event) => {
    if (event.target === confirmationModal) {
      confirmationModal.classList.remove('visible');
    }
  });
}

const cartItems = [...document.querySelectorAll('.cart-item')];
const cartCount = document.querySelector('[data-cart-count]');
const subtotalElement = document.querySelector('[data-subtotal]');
const taxElement = document.querySelector('[data-tax]');
const totalElement = document.querySelector('[data-total]');
const shippingElement = document.querySelector('[data-shipping]');
const currency = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

function updateCart() {
  let itemCount = 0;
  let subtotal = 0;

  cartItems.forEach((item) => {
    const quantityElement = item.querySelector('[data-quantity]');
    const lineTotalElement = item.querySelector('[data-line-total]');
    const quantity = Number.parseInt(quantityElement.textContent, 10);
    const unitPrice = Number(item.dataset.unitPrice);
    const lineTotal = unitPrice * quantity;

    itemCount += quantity;
    subtotal += lineTotal;
    lineTotalElement.textContent = currency.format(lineTotal);
  });

  const shipping = itemCount === 0 ? 0 : 35;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  cartCount.textContent = `${itemCount} ${itemCount === 1 ? 'item' : 'items'}`;
  subtotalElement.textContent = currency.format(subtotal);
  shippingElement.textContent = currency.format(shipping);
  taxElement.textContent = currency.format(tax);
  totalElement.textContent = currency.format(total);
}

cartItems.forEach((item) => {
  const quantityElement = item.querySelector('[data-quantity]');
  const quantityButtons = item.querySelectorAll('.qty-control button');
  const removeButton = item.querySelector('.link-button');

  quantityButtons[0].addEventListener('click', () => {
    quantityElement.textContent = Math.max(1, Number.parseInt(quantityElement.textContent, 10) - 1);
    updateCart();
  });

  quantityButtons[1].addEventListener('click', () => {
    quantityElement.textContent = Number.parseInt(quantityElement.textContent, 10) + 1;
    updateCart();
  });

  removeButton.addEventListener('click', () => {
    item.remove();
    cartItems.splice(cartItems.indexOf(item), 1);
    updateCart();
  });
});

if (cartItems.length) updateCart();
