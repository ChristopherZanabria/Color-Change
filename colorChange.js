const colors = ["#FF6B6B", "#FFD93D", "#6BCB77", "#4D96FF", "#9D4EDD"]; // 5 colors
let colorIndex = 0;

document.getElementById("changeColorBtn").addEventListener("click", () => {
  document.body.style.backgroundColor = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
});
