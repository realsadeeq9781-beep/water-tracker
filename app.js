let goal = 2000;
let current = parseInt(localStorage.getItem("water")) || 0;

updateUI();

function addWater(amount) {
  current += amount;

  if (current > goal) current = goal;

  localStorage.setItem("water", current);
  updateUI();
}

function reset() {
  current = 0;
  localStorage.setItem("water", current);
  updateUI();
}

function updateUI() {
  document.getElementById("count").innerText =
    current + " / " + goal + " ml";

  let percent = (current / goal) * 100;
  document.getElementById("bar").style.width = percent + "%";
}
