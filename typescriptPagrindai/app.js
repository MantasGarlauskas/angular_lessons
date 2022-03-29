//TIPAI
// var kiekis = 5;
// kiekis = "Penki"; // jau negalimas veiksmas
// var kiekis;
// kiekis = 5;
// kiekis = "Penki"; // jau galimas veiksmas
// var kiekis: number;
// kiekis = 5;
// kiekis = "Penki";
// var vardas;
// vardas = "mantas";
// var vardasIssaugojimui: string;
// vardasIssaugojimui = vardas as string; // (<string>vardas); //pakeitimas is ANY
// let x: number = 10;
// let vyras: boolean = false;
// let vardas: string = "Jonaitis";
// let kazkas: any = "tekstas"; //gali buti ir skaicius
// let savaitesTempeeraturos: number[] = [1, 5, 4, 3];
// let darbuotojuSarasas: string[] = ["Jonaitis", "Petraitis"];
// enum Spalva {
//   Juoda,
//   Balta,
//   Geltona,
// }
// let dazai: Spalva.Geltona;
// Paprasta funkcija
// function suma(x: number, y: number) {
//   return x + y;
// }
// let rezultatas = suma(8, 2);
// console.log(rezultatas);
//Arrow funkcija
// let suma = (x: number, y: number) => {
//   let res: number;
//   res = x + y;
//   return res;
// };
// console.log(suma(5, 8));
//faktorialas - 5=5*4*3*2*1
/*
let faktorialas = (n: number): number => {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
};

console.log(faktorialas(3)); //atsakymas 6
console.log(faktorialas(5)); // atsakymas 120
*/
//Sukurkite rodyklės (lambda) funkciją kuriai įvestumėte du skaičius ir kuri grąžintų tų skaičių bendrą didžiausią daliklį (BDD) Pvyzdžiui jei funkcijai paduodami kintamieji: n = 5, m = 3, tai f-ja turi grąžinti bdd = 1. Išbandykite funkciją. Funkcijos kintamiesiems ir grąžinamoms reikšmėms nurodykite tipus.
// let bdd = (n: number, m: number): number => {
//   if (m === 0) {
//     return n;
//   }
//   return bdd(m, n % m);
// };
// console.log(bdd(5, 3));
var bdd = function (n, m) {
    var number = 1;
    for (var i = 1; i <= n && i <= m; ++i) {
        if (n % i == 0 && m % i == 0)
            number = i;
    }
    return number;
};
console.log(bdd(10, 15));
