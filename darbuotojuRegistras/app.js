"use strict";
class Darbuotojai {
    constructor(_vardas, _pavarde, _atlyginimas) {
        this._vardas = _vardas;
        this._pavarde = _pavarde;
        this._atlyginimas = _atlyginimas;
    }
    get vardas() {
        return this._vardas;
    }
    get pavarde() {
        return this._pavarde;
    }
    get atlyginimas() {
        return this._atlyginimas;
    }
    gpm() {
        return Math.round(this._atlyginimas * 0.2);
    }
    psd() {
        return Math.round(this._atlyginimas * 0.0698);
    }
    vsd() {
        return Math.round(this._atlyginimas * 0.01252);
    }
}
const btnPrideti = document.getElementById("prideti");
const btnIstrinti = document.getElementById("istrinti");
const inpVardas = document.getElementById("vardas");
const inpPavarde = document.getElementById("pavarde");
const inpAtlyginimas = document.getElementById("atlyginimas");
const output = document.getElementById("output");
const outGpm = document.getElementById("gpm");
const outPsd = document.getElementById("psd");
const outVsd = document.getElementById("vsd");
let imone = [];
let jsonString = localStorage.getItem("darbuotojai");
if (jsonString != null) {
    let data = JSON.parse(jsonString);
    data.forEach((obj) => {
        let prod = new Darbuotojai(obj._vardas, obj._pavarde, obj._atlyginimas);
        imone.push(prod);
    });
}
let outputDarbuotojai = () => {
    if (output != null && outGpm != null && outPsd != null && outVsd != null) {
        output.innerHTML = "";
        let gpm = 0;
        let psd = 0;
        let vsd = 0;
        imone.forEach((darbuotojas, indeksas) => {
            gpm += darbuotojas.gpm();
            psd += darbuotojas.psd();
            vsd += darbuotojas.vsd();
            const li = document.createElement("li");
            li.className = "list-group-item";
            li.textContent = `${darbuotojas.vardas} ${darbuotojas.pavarde} - atlyginimas (gross) ${darbuotojas.atlyginimas}`;
            const btn = document.createElement("button");
            btn.textContent = "Atleisti";
            btn.className = "btn btn-danger float-end";
            btn.onclick = () => {
                deleteDarbuotoja(indeksas);
            };
            li.appendChild(btn);
            output.appendChild(li);
        });
        outGpm.textContent = gpm + " EUR";
        outPsd.textContent = psd + " EUR";
        outVsd.textContent = vsd + " EUR";
    }
};
let deleteDarbuotoja = (indeksas) => {
    imone.splice(indeksas, 1);
    outputDarbuotojai();
    localStorage.setItem("darbuotojai", JSON.stringify(imone));
};
if (btnPrideti != null) {
    btnPrideti.onclick = () => {
        imone.push(new Darbuotojai(inpVardas.value, inpPavarde.value, inpAtlyginimas.valueAsNumber));
        outputDarbuotojai();
        localStorage.setItem("darbuotojai", JSON.stringify(imone));
    };
}
if (btnIstrinti != null) {
    btnIstrinti.onclick = () => {
        localStorage.removeItem("darbuotojai");
        imone = [];
        outputDarbuotojai();
    };
}
outputDarbuotojai();
