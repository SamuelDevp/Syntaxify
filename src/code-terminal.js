
document.addEventListener("DOMContentLoaded", () => {
  
  const buttons = document.querySelectorAll(".copy-btn");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const code = button.previousElementSibling.querySelector("code").innerText;
      navigator.clipboard.writeText(code).then(() => {
        // Update button text for feedback
        button.textContent = "Copied!";
        setTimeout(() => {
          button.textContent = "Copy";
        }, 2000);
      });
    });
  });
});