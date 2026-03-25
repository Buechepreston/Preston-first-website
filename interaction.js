document.addEventListener("DOMContentLoaded", () => {
  const hiBtn = document.getElementById("say-hi-btn");
  const yearSpan = document.getElementById("year");

  if (hiBtn) {
    hiBtn.addEventListener("click", () => {
      alert("Appreciate you checking out my site. More updates coming soon. – Preston");
    });
  }

  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
