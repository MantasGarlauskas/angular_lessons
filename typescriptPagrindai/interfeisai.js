/*
interface Zmogus {
  vardas: string;
  amzius: number;
  telefonas?: string; //? galiu nurodyti arba ne
}

let apsilankymas = (lankytojas: Zmogus) => {
  console.log(
    "Pas mus apslainke" + lankytojas.vardas + ", jo amzius" + lankytojas.amzius
  );
};

let paliko = (lankytojas: Zmogus) => {
  console.log(
    `Is pastato idejo ${lankytojas.vardas}, jo amzius ${lankytojas.amzius}`
  );
};

let lankytojas: Zmogus = {
  vardas: "Jonas",
  amzius: 35,
  telefonas: "867556788",
};

apsilankymas(lankytojas);
paliko(lankytojas);
*/
//Sukurkite rodyklės (lambda) funkciją  metodą, kuriai paduotumėte tašką (interfeiso point objektą, turintį du kintamuosius x,y). Funkcija turi grąžinti atstumą nuo koordinačių pradžios taško (0,0) iki taško. Jis apskaičiuojamas ištraukus šaknį iš taško koordinačių pakeltų kvadratu sumos: sqrt(x^2+y^2).
var atstumas = function (taskas) {
    return Math.sqrt(taskas.x * taskas.x + taskas.y * taskas.y);
};
var koordinates = {
    x: 1,
    y: 1
};
console.log(atstumas(koordinates));
