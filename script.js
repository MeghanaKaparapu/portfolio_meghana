// Mobile menu toggle
const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const links = document.querySelectorAll('nav ul li a');

// Toggle mobile menu visibility
toggle.addEventListener('click', () => {
  menu.classList.toggle('show'); // Toggle 'show' class to display menu on small screens
});

// Close menu on link click (for mobile devices)
links.forEach(link => {
  link.addEventListener('click', () => {
    if (menu.classList.contains('show')) {
      menu.classList.remove('show'); // Close the mobile menu after link is clicked
    }
  });
});

// Highlight the active navigation item based on scroll position
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  let scrollY = window.pageYOffset;

  // Loop through each section to find the one currently in view
  sections.forEach(section => {
    const id = section.getAttribute('id');
    const offset = section.offsetTop - 70; // Adjust for nav bar height
    const height = section.offsetHeight;

    if (scrollY >= offset && scrollY < offset + height) {
      links.forEach(link => {
        link.classList.remove('active'); // Remove 'active' class from all links
      });
      document.querySelector(`nav ul li a[href="#${id}"]`).classList.add('active'); // Add 'active' class to the current section's link
    }
  });
});
