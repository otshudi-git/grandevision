/**
 * Testimonials slider functionality
 */
export function initTestimonials() {
  const testimonialItems = document.querySelectorAll('.testimonial-item');
  const prevButton = document.querySelector('.testimonial-prev');
  const nextButton = document.querySelector('.testimonial-next');
  
  let currentIndex = 0;
  
  // Function to show testimonial at index
  const showTestimonial = (index) => {
    // Remove active class from all items
    testimonialItems.forEach(item => item.classList.remove('active'));
    
    // Show testimonial at current index
    testimonialItems[index].classList.add('active');
  };
  
  // Next button click
  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % testimonialItems.length;
    showTestimonial(currentIndex);
  });
  
  // Previous button click
  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + testimonialItems.length) % testimonialItems.length;
    showTestimonial(currentIndex);
  });
  
  // Auto-rotate testimonials every 5 seconds
  let autoRotate = setInterval(() => {
    currentIndex = (currentIndex + 1) % testimonialItems.length;
    showTestimonial(currentIndex);
  }, 5000);
  
  // Pause auto-rotation when hovering over testimonials
  const testimonialSlider = document.querySelector('.testimonial-slider');
  testimonialSlider.addEventListener('mouseenter', () => {
    clearInterval(autoRotate);
  });
  
  testimonialSlider.addEventListener('mouseleave', () => {
    autoRotate = setInterval(() => {
      currentIndex = (currentIndex + 1) % testimonialItems.length;
      showTestimonial(currentIndex);
    }, 5000);
  });
}