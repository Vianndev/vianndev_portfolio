const is_review_received_checkbox = document.getElementById('is_review_received');

function toggleReviews(checkbox) {
  const reviewGiven = Array.from(document.getElementsByClassName('review_given'));
  const reviewReceived = Array.from(document.getElementsByClassName('review_received'));

  if (checkbox.checked) {
    reviewGiven.forEach(element => element.classList.add('hidden'));
    reviewReceived.forEach(element => element.classList.remove('hidden'));
    return;
  }

  reviewGiven.forEach(element => element.classList.remove('hidden'));
  reviewReceived.forEach(element => element.classList.add('hidden'));
}

// Initialize on page load
toggleReviews(is_review_received_checkbox);

// Add event listener for the checkbox
is_review_received_checkbox.addEventListener('change', () => toggleReviews(is_review_received_checkbox));
