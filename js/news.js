/**
 * News filtering functionality
 */
export function initNews() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const newsItems = document.querySelectorAll('.news-item');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      
      // Add active class to clicked button
      button.classList.add('active');
      
      // Get the filter value
      const filterValue = button.getAttribute('data-filter');
      
      // Filter news items
      newsItems.forEach(item => {
        // Show all items if 'all' is selected
        if (filterValue === 'all') {
          item.style.display = 'block';
          
          // Add animation with delay for staggered effect
          setTimeout(() => {
            item.classList.add('visible');
          }, 100 * Array.from(newsItems).indexOf(item));
        } 
        // Otherwise, show only items matching the filter
        else {
          const itemCategory = item.getAttribute('data-category');
          
          if (itemCategory === filterValue) {
            item.style.display = 'block';
            setTimeout(() => {
              item.classList.add('visible');
            }, 100 * Array.from(newsItems).indexOf(item));
          } else {
            item.style.display = 'none';
            item.classList.remove('visible');
          }
        }
      });
    });
  });
}