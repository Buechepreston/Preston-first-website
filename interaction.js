// interaction.js

document.addEventListener("DOMContentLoaded", () => {
  const hiBtn = document.getElementById("say-hi-btn");
  const yearSpan = document.getElementById("year");

  if (hiBtn) {
    hiBtn.addEventListener("click", () => {
      alert("Thanks for checking out my site! I'm still building, so check back soon. – Preston");
    });
  }

  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
