const toggleBtn = document.getElementById('toggle-btn');
const row2 = document.getElementById('album-row-2');

toggleBtn.addEventListener('click', () => {
  row2.classList.toggle('hidden');
  toggleBtn.textContent = row2.classList.contains('hidden')
    ? 'See All'
    : 'Show Less';
});