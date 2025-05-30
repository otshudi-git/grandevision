/**
 * Services tabs functionality
 */
export function initServices() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');
  
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons and panels
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabPanels.forEach(panel => panel.classList.remove('active'));
      
      // Add active class to clicked button
      button.classList.add('active');
      
      // Get the tab to activate
      const tabToActivate = button.getAttribute('data-tab');
      
      // Activate the corresponding panel
      document.getElementById(tabToActivate).classList.add('active');
    });
  });
}