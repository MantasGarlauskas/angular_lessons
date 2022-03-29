var output = document.getElementById("atsakymas");
var btSkaiciuoti = document.getElementById("skaiciuoti");
var inputX = document.getElementById("var_x");
var inputY = document.getElementById("var_y");
var atstumas = function (taskas) {
    return Math.sqrt(taskas.x * taskas.x + taskas.y * taskas.y);
};
var taskas = {
    x: 5,
    y: 3
};
var fSuskaiciuoti = function () {
    taskas.x = inputX.valueAsNumber; // ARBA --> +inputX.value
    taskas.y = inputY.valueAsNumber;
    if (output != null)
        output.innerHTML = "Atsakymas: " + atstumas(taskas);
};
if (btSkaiciuoti != null) {
    btSkaiciuoti.onclick = fSuskaiciuoti;
}
