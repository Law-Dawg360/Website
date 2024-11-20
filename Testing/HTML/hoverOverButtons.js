const button2 = document.querySelector('button2');

button2.addEventListener('mouseover', () => {
  button2.textContent = button.title;
});

button2.addEventListener('mouseout', () => {
  button2.textContent = 'Hover Me';
});
