/**
 * Scroll animations
 */
export function initAnimations() {
  // Elements to animate
  const animatedElements = document.querySelectorAll(
    '.reveal-left, .reveal-right, .reveal-bottom, .reveal-scale, .reveal-item'
  );
  
  // Function to check if an element is in viewport
  const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85 &&
      rect.bottom >= 0
    );
  };
  
  // Function to handle scroll
  const handleScroll = () => {
    animatedElements.forEach(element => {
      if (isInViewport(element)) {
        // Add delay if specified
        const delay = element.getAttribute('data-delay');
        if (delay) {
          setTimeout(() => {
            element.classList.add('visible');
          }, parseInt(delay));
        } else {
          element.classList.add('visible');
        }
      }
    });
  };
  
  // Initial check on load
  handleScroll();
  
  // Listen for scroll events
  window.addEventListener('scroll', handleScroll);
  
  // Also trigger on window resize
  window.addEventListener('resize', handleScroll);
}