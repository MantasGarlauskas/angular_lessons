const output = document.getElementById("atsakymas");
const btSkaiciuoti = document.getElementById("skaiciuoti");
let inputX = <HTMLInputElement>document.getElementById("var_x");
let inputY = <HTMLInputElement>document.getElementById("var_y");

interface Taskas {
  x: number;
  y: number;
}

let atstumas = (taskas: Taskas) => {
  return Math.sqrt(taskas.x * taskas.x + taskas.y * taskas.y);
};

let taskas: Taskas = {
  x: 5,
  y: 3,
};

const fSuskaiciuoti = () => {
  taskas.x = inputX.valueAsNumber; // ARBA --> +inputX.value
  taskas.y = inputY.valueAsNumber;
  if (output != null) output.innerHTML = "Atsakymas: " + atstumas(taskas);
};

if (btSkaiciuoti != null) {
  btSkaiciuoti.onclick = fSuskaiciuoti;
}
