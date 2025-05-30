// Import modules
import { initNavigation } from './navigation.js';
import { initAnimations } from './animations.js';
import { initServices } from './services.js';
import { initNews } from './news.js';
import { initPartners } from './partners.js';
import { initContact } from './contact.js';
import { initTestimonials } from './testimonials.js';

// Initialize all modules when DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize navigation
  initNavigation();
  
  // Initialize scroll animations
  initAnimations();
  
  // Initialize services tabs
  initServices();
  
  // Initialize news filtering
  initNews();
  
  // Initialize partners slider
  initPartners();
  
  // Initialize testimonials slider
  initTestimonials();
  
  // Initialize contact form
  initContact();
  
  // Initialize back to top button
  initBackToTop();
});

// Back to top button functionality
function initBackToTop() {
  const backToTopButton = document.getElementById('backToTop');
  
  // Show/hide button based on scroll position
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopButton.classList.add('visible');
    } else {
      backToTopButton.classList.remove('visible');
    }
  });
  
  // Scroll to top when clicked
  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}