const toggleBtn = document.getElementById("themeToggle");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("light");
  body.classList.toggle("dark");

  toggleBtn.textContent =
    body.classList.contains("light") ? "🌙 Dark Mode" : "☀ Light Mode";
});