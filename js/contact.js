/**
 * Contact form validation and functionality
 */
export function initContact() {
  const contactForm = document.getElementById('contactForm');
  const newsletterForm = document.getElementById('newsletterForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Get form inputs
      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const subjectInput = document.getElementById('subject');
      const messageInput = document.getElementById('message');
      
      // Basic validation
      let isValid = true;
      
      // Validate name
      if (!nameInput.value.trim()) {
        showError(nameInput, 'Veuillez entrer votre nom');
        isValid = false;
      } else {
        removeError(nameInput);
      }
      
      // Validate email
      if (!emailInput.value.trim()) {
        showError(emailInput, 'Veuillez entrer votre email');
        isValid = false;
      } else if (!isValidEmail(emailInput.value)) {
        showError(emailInput, 'Veuillez entrer un email valide');
        isValid = false;
      } else {
        removeError(emailInput);
      }
      
      // Validate subject
      if (!subjectInput.value.trim()) {
        showError(subjectInput, 'Veuillez entrer un sujet');
        isValid = false;
      } else {
        removeError(subjectInput);
      }
      
      // Validate message
      if (!messageInput.value.trim()) {
        showError(messageInput, 'Veuillez entrer votre message');
        isValid = false;
      } else {
        removeError(messageInput);
      }
      
      // Submit form if valid
      if (isValid) {
        // Normally would send to server here
        // For demo purposes, show success message and reset form
        showSuccessMessage(contactForm, 'Votre message a été envoyé avec succès!');
        contactForm.reset();
      }
    });
  }
  
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Get email input
      const emailInput = newsletterForm.querySelector('input[type="email"]');
      
      // Validate email
      if (!emailInput.value.trim()) {
        showError(emailInput, 'Veuillez entrer votre email');
      } else if (!isValidEmail(emailInput.value)) {
        showError(emailInput, 'Veuillez entrer un email valide');
      } else {
        removeError(emailInput);
        
        // Show success message and reset form
        showSuccessMessage(newsletterForm, 'Merci pour votre inscription!');
        newsletterForm.reset();
      }
    });
  }
  
  // Helper function to validate email
  function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
  
  // Helper function to show error message
  function showError(input, message) {
    // Remove any existing error
    removeError(input);
    
    // Create error message element
    const errorElement = document.createElement('div');
    errorElement.className = 'error-message';
    errorElement.style.color = 'var(--error)';
    errorElement.style.fontSize = 'var(--font-size-xs)';
    errorElement.style.marginTop = '4px';
    errorElement.textContent = message;
    
    // Add red border to input
    input.style.borderColor = 'var(--error)';
    
    // Insert error message after input
    input.parentNode.appendChild(errorElement);
  }
  
  // Helper function to remove error message
  function removeError(input) {
    // Reset input styling
    input.style.borderColor = '';
    
    // Remove error message if exists
    const errorElement = input.parentNode.querySelector('.error-message');
    if (errorElement) {
      errorElement.remove();
    }
  }
  
  // Helper function to show success message
  function showSuccessMessage(form, message) {
    // Remove any existing success message
    const existingSuccess = form.parentNode.querySelector('.success-message');
    if (existingSuccess) {
      existingSuccess.remove();
    }
    
    // Create success message element
    const successElement = document.createElement('div');
    successElement.className = 'success-message';
    successElement.style.backgroundColor = 'var(--success)';
    successElement.style.color = 'white';
    successElement.style.padding = 'var(--space-sm)';
    successElement.style.borderRadius = 'var(--radius-sm)';
    successElement.style.marginTop = 'var(--space-md)';
    successElement.style.textAlign = 'center';
    successElement.textContent = message;
    
    // Insert success message after form
    form.parentNode.appendChild(successElement);
    
    // Remove success message after 5 seconds
    setTimeout(() => {
      successElement.remove();
    }, 5000);
  }
}