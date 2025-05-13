// Wait for the DOM to fully load before running any JavaScript
document.addEventListener('DOMContentLoaded', function() {
  // Counter functionality
  const counterElement = document.getElementById('counter');
  const counterButton = document.getElementById('counter-button');
  let count = 0;

  counterButton.addEventListener('click', function() {
    count++;
    counterElement.textContent = count;
    
    // Add a simple animation effect
    counterElement.style.transform = 'scale(1.2)';
    setTimeout(() => {
      counterElement.style.transform = 'scale(1)';
    }, 200);
  });

  // Add smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('nav a');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      window.scrollTo({
        top: targetSection.offsetTop - 20,
        behavior: 'smooth'
      });
    });
  });

  // Add a class to highlight the active section based on scrolling
  window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (window.pageYOffset >= sectionTop - 60 && 
          window.pageYOffset < sectionTop + sectionHeight - 60) {
        
        // Remove active class from all nav links
        navLinks.forEach(link => {
          link.classList.remove('active');
        });
        
        // Add active class to corresponding nav link
        const correspondingLink = document.querySelector(`nav a[href="#${section.id}"]`);
        if (correspondingLink) {
          correspondingLink.classList.add('active');
        }
      }
    });
  });

  // Add style for active nav links
  const style = document.createElement('style');
  style.textContent = `
    nav a.active {
      background-color: rgba(255, 255, 255, 0.3);
      font-weight: bold;
    }
  `;
  document.head.appendChild(style);

  // Add some animations to the sections when they come into view
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  // Observe all sections
  const sections = document.querySelectorAll('section');
  sections.forEach(section => {
    // Add initial hidden style
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.5s, transform 0.5s';
    
    observer.observe(section);
  });

  // Add the visible class handler
  const visibleStyle = document.createElement('style');
  visibleStyle.textContent = `
    section.visible {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
  `;
  document.head.appendChild(visibleStyle);
});

// Add an initial animation when the page loads
window.addEventListener('load', function() {
  document.querySelector('header').style.animation = 'fadeIn 1s';
  
  // Add the animation keyframes
  const fadeAnimation = document.createElement('style');
  fadeAnimation.textContent = `
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(-20px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `;
  document.head.appendChild(fadeAnimation);
});