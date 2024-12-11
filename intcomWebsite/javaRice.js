// Get elements by class name
const container = document.querySelector('.container');
const clickableImages = document.getElementsByClassName('image');
const popups = document.getElementsByClassName('popup');
const popupOverlay = document.querySelector('.popup-overlay');

// Function to show popup and blur background
function showPopup(popup) {
    popup.classList.add('show');
    popupOverlay.classList.add('show');
    container.classList.add('blurred');
}

// Function to hide popup and remove blur background
function hidePopup(popup) {
    popup.classList.remove('show');
    popupOverlay.classList.remove('show');
    container.classList.remove('blurred');
}

// Event listeners for images
for (let i = 0; i < clickableImages.length; i++) {
    clickableImages[i].addEventListener('click', () => showPopup(popups[i]));
}

// Event listener for overlay (to close popup)
popupOverlay.addEventListener('click', function() {
    for (let popup of popups) {
        hidePopup(popup);
    }
});

// Event listeners for popups (to prevent clicking inside the popup from closing it)
for (let popup of popups) {
    popup.addEventListener('click', (e) => e.stopPropagation());
}
