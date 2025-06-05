// Show/hide back-to-top button
window.addEventListener('scroll', function() {
  var btn = document.getElementById('backToTop');
  if (btn) btn.style.display = window.scrollY > 300 ? 'block' : 'none';
});
var backToTopBtn = document.getElementById('backToTop');
if (backToTopBtn) {
  backToTopBtn.onclick = function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  };
}

// Feature 1: Time-based greeting
var greetingDiv = document.getElementById('greeting');
if (greetingDiv) {
  function getGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning! Hope you have an awesome day in the D!";
    if (hour < 18) return "Good afternoon! Sending some Detroit sunshine your way!";
    return "Good evening! Relax and enjoy some Motor City vibes!";
  }
  greetingDiv.textContent = getGreeting();
}

// Feature 2: Random Detroit fact
var factBtn = document.getElementById('factBtn');
var detroitFactDiv = document.getElementById('detroitFact');
if (factBtn && detroitFactDiv) {
  const detroitFacts = [
    "Detroit is known as the Motor City because it's the birthplace of the modern automobile industry.",
    "The first paved road in the world was built in Detroit in 1909 (Woodward Avenue).",
    "Detroit has the second largest theater district in the U.S., right after New York City.",
    "Motown Records, which changed music forever, was founded in Detroit in 1959.",
    "Detroit is home to one of the largest island parks in the U.S.—Belle Isle!",
    "The iconic Detroit-style pizza is square and has a thick, crispy crust.",
    "Detroit’s Eastern Market is the largest historic public market district in the United States.",
    "The Spirit of Detroit statue is one of the city’s most famous landmarks."
  ];
  factBtn.onclick = function() {
    const idx = Math.floor(Math.random() * detroitFacts.length);
    detroitFactDiv.textContent = detroitFacts[idx];
  };
}