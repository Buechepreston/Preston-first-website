// (Optional: Move the JS from index.html here for organization.)
// Show/hide back-to-top button
window.addEventListener('scroll', function() {
  document.getElementById('backToTop').style.display =
    window.scrollY > 300 ? 'block' : 'none';
});
document.getElementById('backToTop').onclick = function() {
  window.scrollTo({top: 0, behavior: 'smooth'});
};