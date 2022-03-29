var output = document.getElementById("atsakymas");
var btSkaiciuoti = document.getElementById("skaiciuoti");
var inputCm = document.getElementById("cm");
var cmToInch = function (unit) {
    return unit.cm * unit["in"];
};
var unit = {
    cm: 0,
    "in": 0.393700787
};
var fSuskaiciuoti = function () {
    unit.cm = inputCm.valueAsNumber;
    if (output != null) {
        if (inputCm.value == "") {
            output.innerHTML = "No cm INPUT";
        }
        else {
            output.innerHTML = "Inches: " + cmToInch(unit);
        }
    }
};
if (btSkaiciuoti != null) {
    btSkaiciuoti.onclick = fSuskaiciuoti;
}
