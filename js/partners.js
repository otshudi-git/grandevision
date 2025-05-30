/**
 * Partners slider functionality
 */
export function initPartners() {
  const partnersTrack = document.querySelector('.partners-track');
  
  // Clone the track content for infinite loop effect
  if (partnersTrack) {
    const originalContent = partnersTrack.innerHTML;
    partnersTrack.innerHTML = originalContent + originalContent;
    
    // Pause animation on hover
    partnersTrack.addEventListener('mouseenter', () => {
      partnersTrack.style.animationPlayState = 'paused';
    });
    
    partnersTrack.addEventListener('mouseleave', () => {
      partnersTrack.style.animationPlayState = 'running';
    });
  }
}