document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const visualizeLink = document.getElementById('visualizeLink');
    const visualizeSection = document.getElementById('visualizeSection');
    const closeButton = document.getElementById('closeButton');
    
    visualizeLink.addEventListener('click', function(e) {
      e.preventDefault();
      visualizeSection.classList.add('show');
    });
    
    closeButton.addEventListener('click', function() {
      visualizeSection.classList.remove('show');
    });
  });

// Select all elements with class 'visualize-card'
document.querySelectorAll('.visualize-card').forEach(card => {
  // Add click event listener to each card
  card.addEventListener('click', function() {
    // Select the 'visualizeSection' element
    const visualizeSection = document.getElementById('visualizeSection');
    // Remove the 'show' class from 'visualizeSection'
    visualizeSection.classList.remove('show');
  });
});
