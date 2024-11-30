// Event Listener for Childhood Photo Buttons
document.querySelectorAll('.child-photo-button').forEach((button) => {
  button.addEventListener('click', () => {
    const imgId = button.getAttribute('data-img-id'); // Fetch the image ID
    if (imgId) {
      // Hide all images
      document.querySelectorAll('#images img').forEach((img) => {
        img.classList.add('hidden');
      });

      // Show the relevant image
      const targetImg = document.getElementById(imgId);
      if (targetImg) {
        targetImg.classList.remove('hidden');
      } else {
        console.error(`Image with ID "${imgId}" not found.`);
      }
    } else {
      console.error('No data-img-id attribute found for this button.');
    }
  });
});

// Event Listener for Surprise Image Button
document.getElementById('showWishImage').addEventListener('click', () => {
  const wishImage = document.getElementById('wishImage');
  if (wishImage) {
    wishImage.classList.remove('hidden'); // Show the surprise image
  } else {
    console.error('Wish image element not found.');
  }
});

// Event Listener for Future Journey Buttons
document.querySelectorAll('.future-alert-button').forEach((button) => {
  button.addEventListener('click', () => {
    const message = button.getAttribute('data-future'); // Fetch the future message
    if (message) {
      alert(message); // Display the message in an alert
    } else {
      console.error('No data-future attribute found for this button.');
    }
  });
});
