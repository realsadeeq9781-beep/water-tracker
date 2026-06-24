let goal = 2000;
let current = localStorage.getItem("water") || 0;

updateUI();

function addWater(amount) {
  current = parseInt(current) + amount;
  localStorage.setItem("water", current);
  updateUI();
}

function reset() {
  current = 0;
  localStorage.setItem("water", current);
  updateUI();
}

function updateUI() {
  document.getElementById("progress").innerText =
    current + " / " + goal + " ml";

  if (current >= goal) {
    alert("🎉 Ka cika burinka!");
  }
}
