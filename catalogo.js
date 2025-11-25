function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}
document.addEventListener("DOMContentLoaded", () => {
    const prototipos = document.querySelectorAll(".prototipo");
  
    prototipos.forEach(prototipo => {
      const vistas = prototipo.querySelectorAll(".vista");
      let index = 0;
      let interval; 3
  
      prototipo.addEventListener("mouseenter", () => {
        interval = setInterval(() => {
          vistas.forEach((img, i) => img.classList.remove("activa"));
          vistas[index].classList.add("activa");
          index = (index + 1) % vistas.length;
        }, 1000);
      });
  
      prototipo.addEventListener("mouseleave", () => {
        clearInterval(interval);
        vistas.forEach((img, i) => img.classList.remove("activa"));
        vistas[0].classList.add("activa");
        index = 0;
      });
    });
  });
  
  function abrirCarrito() {
    alert("Carrito abierto. Aquí puedes ver tus mochilas seleccionadas.");
    // Aquí puedes reemplazar con lógica real de carrito o abrir un panel/modal
  }
  