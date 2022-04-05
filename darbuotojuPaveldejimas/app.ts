class Darbuotojas {
  constructor(
    protected _vardas: string,
    protected _pavarde: string,
    protected _atlyginimas: number
  ) {}

  get vardas() {
    return this._vardas;
  }
  get pavarde() {
    return this._pavarde;
  }
  get atlyginimas() {
    return this._atlyginimas;
  }
  set vardas(vardas: string) {
    this._vardas = vardas;
  }
  set pavarde(pavarde: string) {
    this._pavarde = pavarde;
  }

  set atlyginimas(atlyginimas: number) {
    this._atlyginimas = atlyginimas;
  }
  public gpm() {
    return Math.round(this._atlyginimas * 0.2);
  }
  public psd() {
    return Math.round(this._atlyginimas * 0.0698);
  }
  public vsd() {
    return Math.round(this._atlyginimas * 0.01252);
  }
}

class PirmaeilisDarbuotojas extends Darbuotojas {
  constructor(_vardas: string, _pavarde: string, _atlyginimas: number) {
    super(_vardas, _pavarde, _atlyginimas);
  }
  public _npd: number = 0;
  public perskaiciuotiNPD() {
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
  public override gpm(): number {
    return Math.round((this._atlyginimas - this._npd) * 0.2);
  }
}

class PraktikantasDarbuotojas extends Darbuotojas {
  constructor(_vardas: string, _pavarde: string, _atlyginimas: number = 0) {
    super(_vardas, _pavarde, _atlyginimas);
  }
}

// let jonas = new Darbuotojas("jonas", "jonaitis", 1200);
// let petras = new Darbuotojas("petras", "petraitis", 1200);

const pirmaeilisDarbuotojas = new PirmaeilisDarbuotojas(
  "jonas",
  "jonaitis",
  500
);

console.log(pirmaeilisDarbuotojas.perskaiciuotiNPD());
console.log(pirmaeilisDarbuotojas.gpm());
console.log(pirmaeilisDarbuotojas);

// imone.push(jonas);
// imone.push(petras);
