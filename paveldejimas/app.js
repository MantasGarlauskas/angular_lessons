"use strict";
class Gyvunas {
    constructor(_vardas, _amzius) {
        this._vardas = _vardas;
        this._amzius = _amzius;
    }
    printInfo() {
        console.log(`Gyvuno vardas ${this._vardas}`);
        console.log(`Amzius yra ${this._amzius}`);
        console.log(`--------------`);
    }
}
class Suo extends Gyvunas {
    constructor(_vardas, _amzius, _veisle) {
        super(_vardas, _amzius);
        this._veisle = _veisle;
    }
    printInfo() {
        console.log(`Suo vardu: ${this._vardas} amzius yra ${this._amzius}`);
    }
    loti() {
        console.log(`Au au au`);
    }
}
class Katinas extends Gyvunas {
    printInfo() {
        console.log(`Kate vardu: ${this._vardas} amzius yra ${this._amzius}`);
    }
}
let g1 = new Suo("Brisius", 20, "Kolis");
let g2 = new Katinas("Murkle", 20);
let g3 = new Gyvunas("Zyle", 20);
let g4 = new Suo("Rudis", 20, "Serbernaras");
g1.printInfo();
g2.printInfo();
g3.printInfo();
let prieglauda = [];
prieglauda.push(g1);
prieglauda.push(g2);
prieglauda.push(g3);
prieglauda.forEach((g) => {
    g.printInfo();
});
