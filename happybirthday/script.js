// Função para criar confetes de cores variadas
function criarConfete() {
  const confete = document.createElement('div');
  confete.classList.add('confete');
  confete.style.left = `${Math.random() * 100}vw`;
  confete.style.backgroundColor = ['#FFD700', '#FF3D00', '#1E88E5'][Math.floor(Math.random() * 3)];
  confete.style.animationDuration = `${Math.random() * 3 + 2}s`;
  confete.style.opacity = Math.random();

  document.body.appendChild(confete);
  setTimeout(() => confete.remove(), 5000);
}

// Gera confetes a cada 300ms
setInterval(criarConfete, 300);

// Função para tocar o áudio de celebração
function tocarAudio() {
  const audio = document.getElementById("comemoracao-audio");
  audio.play();
}