
document.querySelector('.rotate-btn').addEventListener('click', () => {
  const shoe = document.querySelector('.shoe img');
  shoe.style.transition = 'transform 1s ease-in-out';
  shoe.style.transform = 'rotateY(360deg)';
  setTimeout(() => {
    shoe.style.transform = 'rotateY(0deg)';
  }, 1000);
});