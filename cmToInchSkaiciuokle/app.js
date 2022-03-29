var output = document.getElementById("atsakymas");
var btSkaiciuoti = document.getElementById("skaiciuoti");
var inputCm = document.getElementById("cm");
var cmToInch = function (unit) {
    return unit.cm * unit["in"];
};
var unit = {
    cm: 5,
    "in": 0.393700787
};
var fSuskaiciuoti = function () {
    unit.cm = inputCm.valueAsNumber;
    if (output != null)
        output.innerHTML = "Inches: " + cmToInch(unit);
};
if (btSkaiciuoti != null) {
    btSkaiciuoti.onclick = fSuskaiciuoti;
}
