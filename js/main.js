// Animación de bienvenida
setTimeout(() => {
  const welcome = document.getElementById('welcome-screen');
  if (welcome) {
    welcome.style.opacity = '0';
    setTimeout(() => welcome.remove(), 1000);
  }
}, 2500);

// Inicializar AOS
AOS.init({
  duration: 1000,
  once: true
});
