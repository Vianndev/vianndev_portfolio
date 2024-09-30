document.addEventListener("DOMContentLoaded", function() {
  smoothSnapOnAnchorLinksAndCenter();
  const is_review_received_checkbox = document.getElementById('is_review_received');
  // Initialize on page load
  toggleReviews(is_review_received_checkbox);

// Add event listener for the checkbox
  is_review_received_checkbox.addEventListener('change', () => toggleReviews(is_review_received_checkbox));
});

function toggleReviews(is_review_received_checkbox) {
  const reviewGiven = Array.from(document.getElementsByClassName('review_given'));
  const reviewReceived = Array.from(document.getElementsByClassName('review_received'));

  if (is_review_received_checkbox.checked) {
    reviewGiven.forEach(element => element.classList.add('!hidden'));
    reviewReceived.forEach(element => element.classList.remove('!hidden'));
    return;
  }

  reviewGiven.forEach(element => element.classList.remove('!hidden'));
  reviewReceived.forEach(element => element.classList.add('!hidden'));
}

const smoothSnapOnAnchorLinksAndCenter = () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView( {
        alignToTop: false,
        behavior: 'smooth',
        block: "center"
      });
    });
  });
}
