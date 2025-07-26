// Contenedor principal
const contenedor = document.getElementById('contenedor');

// Función para generar un "Te Amo" aleatorio
function crearTeAmo() {
  const teAmo = document.createElement('div');
  teAmo.classList.add('te-amo');
  teAmo.innerText = 'Te Amo';

  // Posición aleatoria en X
  const x = Math.random() * window.innerWidth;
  teAmo.style.left = `${x}px`;

  // Color aleatorio suave
  const colores = ['#ff4d6d', '#ff758f', '#ffb3c1', '#ffc8dd', '#ff8fab'];
  teAmo.style.color = colores[Math.floor(Math.random() * colores.length)];

  contenedor.appendChild(teAmo);

  // Eliminar después de 5s
  setTimeout(() => {
    teAmo.remove();
  }, 5000);
}

// Crear un "Te Amo" cada 500ms
setInterval(crearTeAmo, 200);

// Evento para crear uno donde hagas clic o toques la pantalla
document.addEventListener('click', (e) => {
  const teAmo = document.createElement('div');
  teAmo.classList.add('te-amo');
  teAmo.innerText = 'Te Amo';
  teAmo.style.left = `${e.clientX}px`;
  teAmo.style.top = `${e.clientY}px`;

  // Color aleatorio
  const colores = ['#ff4d6d', '#ff758f', '#ffb3c1', '#ffc8dd', '#ff8fab', '#f72585'];
  teAmo.style.color = colores[Math.floor(Math.random() * colores.length)];

  contenedor.appendChild(teAmo);

  // Que suba un poquito y desaparezca
  teAmo.style.animation = 'subir 2s ease-out forwards';

  setTimeout(() => {
    teAmo.remove();
  }, 2000);
});

// Animación para los clics
const style = document.createElement('style');
style.textContent = `
@keyframes subir {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-50px);
    opacity: 0;
  }
}`;
document.head.appendChild(style);
