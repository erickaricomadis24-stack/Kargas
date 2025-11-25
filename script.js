function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}

function abrirCarrito() {
  alert("Carrito abierto. Aquí puedes ver tus mochilas seleccionadas.");
  // Aquí puedes reemplazar con lógica real de carrito o abrir un panel/modal
}

  const cartButton = document.getElementById('cart-button');
  const cartPopover = document.getElementById('cart-popover');
  const closeBtn = document.querySelector('.close-btn');

  cartButton.addEventListener('click', () => {
    cartPopover.classList.remove('hidden');
  });

  closeBtn.addEventListener('click', () => {
    cartPopover.classList.add('hidden');
  });

  window.addEventListener('click', (e) => {
    if (e.target === cartPopover) {
      cartPopover.classList.add('hidden');
    }
  });
  const colorPrincipal = document.getElementById('color-principal');
  const colorCierres = document.getElementById('color-cierres');
  const preview = document.getElementById('previewMochila');

  function actualizarVistaPrevia() {
    preview.style.backgroundColor = colorPrincipal.value;
    preview.style.borderColor = colorCierres.value;
  }

  colorPrincipal.addEventListener('input', actualizarVistaPrevia);
  colorCierres.addEventListener('input', actualizarVistaPrevia);
  actualizarVistaPrevia();

  // colores  
  const colorInput = document.getElementById('color-principal');
  const overlay = document.getElementById('colorOverlay');

  function actualizarColor() {
    overlay.style.backgroundColor = colorInput.value;
  }

  colorInput.addEventListener('input', actualizarColor);
  actualizarColor();

