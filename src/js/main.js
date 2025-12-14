const toggleBtn = document.getElementById('toggle-btn');
const row2 = document.getElementById('album-row-2');

toggleBtn.addEventListener('click', () => {
  row2.classList.toggle('hidden');
  toggleBtn.textContent = row2.classList.contains('hidden')
    ? 'See All'
    : 'Show Less';
});
const vinylCards = document.querySelectorAll('.vinyl-card');
const audioPlayer = document.getElementById('vinyl-audio');

vinylCards.forEach(card => {
  card.addEventListener('click', () => {
    const src = card.dataset.src;
    if (!src) return;
    audioPlayer.src = src;
    audioPlayer.play().catch(err => console.log("Playback blocked:", err));
    // Add spinning class if needed
    card.querySelector('img').style.animation = 'spin 2s linear infinite';
  });

  card.addEventListener('mouseleave', () => {
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
    // Stop spinning
    card.querySelector('img').style.animation = '';
  });

  // Optional: click fallback for browsers that block hover autoplay
  card.addEventListener('click', () => {
    const src = card.dataset.src;
    if (!src) return;
    audioPlayer.src = src;
    audioPlayer.play();
  });
});
