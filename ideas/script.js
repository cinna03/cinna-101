// Select all items with the 'scroll-item' class
const scrollItems = document.querySelectorAll('.scroll-item');

// Callback function for Intersection Observer
const scrollAnimation = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Add 'active' class when the element is in view
      entry.target.classList.add('active');
    } else {
      // Optionally remove the 'active' class when out of view
      entry.target.classList.remove('active');
    }
  });
};

// Set up the Intersection Observer
const observer = new IntersectionObserver(scrollAnimation, {
  threshold: 0.5, // Trigger when 50% of the element is visible
});

// Observe each scroll item
scrollItems.forEach(item => {
  observer.observe(item);
});
