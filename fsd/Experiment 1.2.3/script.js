const svg = document.getElementById("canvas");
const colorPicker = document.getElementById("colorPicker");
const countText = document.getElementById("count");
const undoBtn = document.getElementById("undoBtn");

let circles = [];

svg.addEventListener("click", function(e) {
  const rect = svg.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circle.setAttribute("cx", x);
  circle.setAttribute("cy", y);
  circle.setAttribute("r", 8);
  circle.setAttribute("fill", colorPicker.value);

  svg.appendChild(circle);
  circles.push(circle);

  updateCount();
});

undoBtn.addEventListener("click", undo);

function undo() {
  if (circles.length > 0) {
    const lastCircle = circles.pop();
    svg.removeChild(lastCircle);
    updateCount();
  }
}

function updateCount() {
  countText.textContent = "Circles drawn: " + circles.length;
}
