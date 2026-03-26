/* ===================================
   script.js — Portfolio Tom Vandebroek
   Handles: mobile hamburger menu toggle
   =================================== */

// Wait until the full page (DOM) is loaded before running our code
document.addEventListener('DOMContentLoaded', function () {

  // Grab the hamburger button and the nav links list
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('nav-links');

  // Toggle the "open" class on the nav when the hamburger is clicked
  // The "open" class makes the menu visible on mobile (see style.css)
  hamburger.addEventListener('click', function () {
    navLinks.classList.toggle('open');
  });

  // Close the mobile menu when the user clicks a nav link
  // (makes the menu disappear after navigating to another page)
  const links = navLinks.querySelectorAll('a');
  links.forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('open');
    });
  });

});
