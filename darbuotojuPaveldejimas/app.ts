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
    this.perskaiciuotiNPD();
  }
  public _npd: number = 0;
  get npd() {
    return this._npd;
  }
  set npd(npd: number) {
    this._npd = npd;
  }
  override get atlyginimas() {
    return this._atlyginimas;
    this.perskaiciuotiNPD();
  }
  override set atlyginimas(atlyginimas: number) {
    this._atlyginimas = atlyginimas;
    this.perskaiciuotiNPD();
  }
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
  constructor(_vardas: string, _pavarde: string, _atlyginimas: number) {
    super(_vardas, _pavarde, _atlyginimas);
  }
  override get atlyginimas() {
    return this._atlyginimas;
  }
  override set atlyginimas(atlyginimas: number) {
    this._atlyginimas = atlyginimas;
  }
  public override gpm() {
    return Math.round(this._atlyginimas * 0.2);
  }
  public override psd() {
    return Math.round(this._atlyginimas * 0.0698);
  }
  public override vsd() {
    return Math.round(this._atlyginimas * 0.01252);
  }
}

// let jonas = new Darbuotojas("jonas", "jonaitis", 1200);
// let petras = new Darbuotojas("petras", "petraitis", 1200);

const jonas = new PirmaeilisDarbuotojas("Jonas", "Jonaitis", 500);
jonas.atlyginimas = 2000;
const petras = new PirmaeilisDarbuotojas("Petras", "Petraitis", 2000);
const onute = new PraktikantasDarbuotojas("Onute", "Petraite", 0);

let imone: Darbuotojas[] = [];
imone.push(jonas);
imone.push(petras);
imone.push(onute);

console.log(imone);

imone.forEach((darbuotojas) => {
  console.log(
    `Darbuotojo vardas ${darbuotojas.vardas}, pavarde ${
      darbuotojas.pavarde
    }, atlyginimas ${
      darbuotojas.atlyginimas
    }, GPM ${darbuotojas.gpm()}, PSD ${darbuotojas.psd()}, VSD ${darbuotojas.vsd()}`
  );
});

// console.log(jonas.perskaiciuotiNPD());
// console.log(jonas.gpm());
// console.log(jonas);
