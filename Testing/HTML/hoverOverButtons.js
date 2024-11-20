const button = document.querySelector('.defualtButtonsWithStyling');

defualtButtonsWithStyling.addEventListener('mouseover', () => {
  .defualtButtonsWithStyling.textContent = button.title;
});

defualtButtonsWithStyling.addEventListener('mouseout', () => {
  .defualtButtonsWithStyling.textContent = 'Hover Me';
});
