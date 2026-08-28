document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  const copyButton = document.getElementById("copy-email-btn");
  const copyStatus = document.getElementById("copy-status");

  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  if (copyButton && copyStatus) {
    copyButton.addEventListener("click", async () => {
      const email = copyButton.dataset.email;

      try {
        await navigator.clipboard.writeText(email);
        copyStatus.textContent = "Email copied.";
        copyButton.textContent = "Copied";

        window.setTimeout(() => {
          copyStatus.textContent = "";
          copyButton.textContent = "Copy email";
        }, 1800);
      } catch {
        copyStatus.textContent = email;
      }
    });
  }
});
