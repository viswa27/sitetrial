const popupButton = document.getElementById('quote');
const closeButton = document.getElementById('close-button');
const popupOverlay = document.getElementById('popup-overlay');
const submitButton = document.getElementById('submit');

popupButton.addEventListener('click', function() {
  popupOverlay.classList.add('open');
});

closeButton.addEventListener('click', function() {
  popupOverlay.classList.remove('open');
});

submitButton.addEventListener('click', function() {
    popupOverlay.classList.remove('open');
});