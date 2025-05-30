/**
 * Navigation functionality
 */
export function initNavigation() {
  const header = document.getElementById('header');
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-menu a');
  
  // Toggle mobile menu
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
    document.body.classList.toggle('menu-open');
    
    // Transform hamburger into X
    if (menuToggle.classList.contains('active')) {
      menuToggle.querySelector('span:nth-child(1)').style.transform = 'rotate(45deg) translate(5px, 5px)';
      menuToggle.querySelector('span:nth-child(2)').style.opacity = '0';
      menuToggle.querySelector('span:nth-child(3)').style.transform = 'rotate(-45deg) translate(7px, -7px)';
    } else {
      menuToggle.querySelector('span:nth-child(1)').style.transform = 'none';
      menuToggle.querySelector('span:nth-child(2)').style.opacity = '1';
      menuToggle.querySelector('span:nth-child(3)').style.transform = 'none';
    }
  });
  
  // Close mobile menu when clicking a link
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      menuToggle.classList.remove('active');
      document.body.classList.remove('menu-open');
      
      // Reset hamburger icon
      menuToggle.querySelector('span:nth-child(1)').style.transform = 'none';
      menuToggle.querySelector('span:nth-child(2)').style.opacity = '1';
      menuToggle.querySelector('span:nth-child(3)').style.transform = 'none';
      
      // Update active link
      navLinks.forEach(link => link.classList.remove('active'));
      link.classList.add('active');
    });
  });
  
  // Change header background on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
      header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    } else {
      header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
      header.style.boxShadow = '0 1px 2px rgba(0, 0, 0, 0.05)';
    }
  });
  
  // Highlight active menu item based on scroll position
  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    
    // Get all sections and their positions
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        // Remove active class from all links
        navLinks.forEach(link => link.classList.remove('active'));
        
        // Add active class to corresponding link
        const correspondingLink = document.querySelector(`.nav-menu a[href="#${sectionId}"]`);
        if (correspondingLink) {
          correspondingLink.classList.add('active');
        }
      }
    });
  });
}