"use strict";
class Darbuotojas {
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
    set vardas(vardas) {
        this._vardas = vardas;
    }
    set pavarde(pavarde) {
        this._pavarde = pavarde;
    }
    set atlyginimas(atlyginimas) {
        this._atlyginimas = atlyginimas;
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
class PirmaeilisDarbuotojas extends Darbuotojas {
    constructor(_vardas, _pavarde, _atlyginimas) {
        super(_vardas, _pavarde, _atlyginimas);
        this._npd = 0;
        this.perskaiciuotiNPD();
    }
    get npd() {
        return this._npd;
    }
    set npd(npd) {
        this._npd = npd;
    }
    perskaiciuotiNPD() {
        if (this._atlyginimas < 730) {
            return (this._npd = 460);
        }
        if (this._atlyginimas >= 730 && this._atlyginimas < 1678) {
            return (this._npd = 460 - 0.26 * (this._atlyginimas - 730));
        }
        if (this._atlyginimas >= 1678) {
            return (this._npd = 460 - 0.18 * (this._atlyginimas - 642));
        }
    }
    gpm() {
        return Math.round((this._atlyginimas - this._npd) * 0.2);
    }
}
class PraktikantasDarbuotojas extends Darbuotojas {
    constructor(_vardas, _pavarde, _atlyginimas = 0) {
        super(_vardas, _pavarde, _atlyginimas);
    }
}
// let jonas = new Darbuotojas("jonas", "jonaitis", 1200);
// let petras = new Darbuotojas("petras", "petraitis", 1200);
const jonas = new PirmaeilisDarbuotojas("Jonas", "jonaitis", 500);
const petras = new PirmaeilisDarbuotojas("Petras", "petraitis", 2000);
const onute = new PraktikantasDarbuotojas("Onute", "Petraite");
let imone = [];
imone.push(jonas);
imone.push(petras);
imone.push(onute);
console.log(imone);
imone.forEach((darbuotojas) => {
    console.log(`Darbuotojo vardas ${darbuotojas.vardas}, pavarde ${darbuotojas.pavarde}, atlyginimas ${darbuotojas.atlyginimas}, GPM ${darbuotojas.gpm()}, PSD ${darbuotojas.psd()}, VSD ${darbuotojas.vsd()}`);
});
// console.log(jonas.perskaiciuotiNPD());
// console.log(jonas.gpm());
// console.log(jonas);
