document.addEventListener('DOMContentLoaded', function() {

  // Code navbar
  const navbar = document.querySelector('nav');
  const heroSection = document.querySelector('section');

  function handleScroll() {
    const heroHeight = heroSection.offsetHeight;
    const scrollPosition = window.scrollY;

    if (scrollPosition > heroHeight - 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', handleScroll);
  handleScroll();

  
  // Code contact
  // Code utils
});
