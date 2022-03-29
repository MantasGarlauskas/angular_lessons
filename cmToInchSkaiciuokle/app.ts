const output = document.getElementById("atsakymas");
const btSkaiciuoti = document.getElementById("skaiciuoti");
let inputCm = <HTMLInputElement>document.getElementById("cm");

interface Units {
  cm: number;
  in: number;
}

let cmToInch = (unit: Units) => {
  return unit.cm * unit.in;
};

let unit: Units = {
  cm: 5,
  in: 0.393700787,
};

const fSuskaiciuoti = () => {
  unit.cm = inputCm.valueAsNumber;
  if (output != null) output.innerHTML = "Inches: " + cmToInch(unit);
};

if (btSkaiciuoti != null) {
  btSkaiciuoti.onclick = fSuskaiciuoti;
}
