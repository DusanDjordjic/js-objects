// > Niz cuva vrednosti po indeksima
var arr = [
  true,
  false,
  1,
  2,
  "a",
  "b",
  [3, 4, 5],
  { name: "Jova", age: 26 },
  function () {
    console.log("Cao ja sam jova");
  },
];

for (var i in arr) {
  console.log(i);
  //   console.log(arr[i]);
}

console.clear();

// > Svaki User treba da ima Ime, sifru, bio
var useri = [
  ["Dusan", "Nemanja", "Marko", "Dragana"],
  ["123", "abc", "1234", "1989"],
  ["Cao Dusan ovde", "Cao Nemanja ovde", "Cao Marko ovde", "Cao Dragana ovde"],
];
console.log(
  "Ime: " + useri[0][2] + " Sifra: " + useri[1][2] + " Bio: " + useri[2][2]
);
// ! Kako dodati usera ?
// > Milan, 0000, Cao Milan ovde
useri[0].push("Milan");
useri[1].push("0000");
useri[2].push("Cao Milan ovde");

console.clear();

// > Skup parova kljuceva i vrednosti je objekat
var useri = [];
var mojUser = {
  ime: "Dusan",
  sifra: "123",
  bio: "Cao Dusan ovde",
  admin: false,
};
useri.push(mojUser);
mojUser = {
  ime: "Nemanja",
  sifra: "abc",
  bio: "Cao Nemanja ovde",
  admin: true,
};
useri.push(mojUser);
mojUser = {
  ime: "Marko",
  sifra: "1234",
  bio: "Cao Marko ovde",
  admin: true,
};
useri.push(mojUser);
mojUser = {
  ime: "Dragana",
  sifra: "1989",
  bio: "Cao Dragana ovde",
  admin: false,
};
useri.push(mojUser);
mojUser = {
  ime: "Natasa",
  sifra: "1589",
  bio: "Cao Natasa ovde",
  admin: true,
};
useri.push(mojUser);
// > 1: Od Dusan uzmi sifru **

var trazeniUser = "Marko";
console.log(useri);
for (var i = 0; i < useri.length; i++) {
  var user = useri[i];
  if (user.ime == trazeniUser) {
    console.log(`Ime: ${user.ime} Sifra: ${user.sifra}`);
  }
}

console.clear();
// > 2: Pronadji imena svih admina **

for (var i = 0; i < useri.length; i++) {
  var user = useri[i];
  //   console.log("Admin: ", user.admin);
  if (user.admin) {
    console.log(`User ${user.ime} je admin? ${user.admin}`);
  }
}
// > 3: Napravi niz admina **
var nizAdmina = [];
// > Niz admina je opet niz objekata ali sada smao usera kojima
// > je properti admin == true
for (var i = 0; i < useri.length; i++) {
  var user = useri[i];
  if (user.admin) {
    nizAdmina.push(user);
  }
}
console.log(nizAdmina);

var noviUser = {
  ime: "Jovana",
  email: "jovana123@gmail.com",
  godiste: 1999,
  admin: false,
  interesovanja: [
    { naziv: "Pecanje", stepen: 7 },
    { naziv: "Slikarstvo", stepen: 4 },
    { naziv: "JavaScript", stepen: 6 },
    { naziv: "Matematika", stepen: 2 },
    { naziv: "Kuvarstvo", stepen: 10 },
  ],
  predstaviSe: function () {
    console.log("Cao ja sam Jovana");
    // Vraca undefined
  },
};
// > Za naseg usera
// > Ispisati interesovanja kojima je stepen veci od 5
console.log(noviUser); // TODO 1: Imamo usera
console.log(noviUser.interesovanja); // TODO 2: Trazimo interesovanja tog usera
console.log(noviUser.interesovanja[0]); // TODO 3 Prodjemo kroz niz interesovanja
console.log(noviUser.interesovanja[1]); // TODO 3
console.log(noviUser.interesovanja[2]); // TODO 3
console.log(noviUser.interesovanja[3]); // TODO 3
console.log(noviUser.interesovanja[4]); // TODO 3
console.log(noviUser.interesovanja[0].stepen); // TODO 4 Nadjemo stepen interesovanja
console.log(noviUser.interesovanja[1].stepen); // TODO 4
console.log(noviUser.interesovanja[2].stepen); // TODO 4
console.log(noviUser.interesovanja[3].stepen); // TODO 4
console.log(noviUser.interesovanja[4].stepen); // TODO 4

// TODO 5 Proveriti da li je stepen veci od 5
if (noviUser.interesovanja[0].stepen > 5) {
  console.log(noviUser.interesovanja[0].naziv, "Ima interesovanje vece od 5");
}
if (noviUser.interesovanja[1].stepen > 5) {
  console.log(noviUser.interesovanja[1].naziv, "Ima interesovanje vece od 5");
}
if (noviUser.interesovanja[2].stepen > 5) {
  console.log(noviUser.interesovanja[2].naziv, "Ima interesovanje vece od 5");
}
if (noviUser.interesovanja[3].stepen > 5) {
  console.log(noviUser.interesovanja[3].naziv, "Ima interesovanje vece od 5");
}
if (noviUser.interesovanja[4].stepen > 5) {
  console.log(noviUser.interesovanja[4].naziv, "Ima interesovanje vece od 5");
}
console.clear();

var nizInteresovanja = noviUser.interesovanja;
// console.log(nizInteresovanja);
for (var i in nizInteresovanja) {
  var interesovanje = nizInteresovanja[i];
  //   console.log(i, interesovanje);
  if (interesovanje.stepen > 5) {
    console.log(interesovanje.naziv, "Ima interesovanje vece od 5");
  } else {
    console.log(interesovanje.naziv, "Nema interesovanje vece od 5");
  }
}

// ! Pravimo niz usera
var nizNovihUsera = [];
var noviUser = {
  ime: "Jovana",
  email: "jovana123@gmail.com",
  godiste: 1999,
  admin: false,
  interesovanja: [
    { naziv: "Pecanje", stepen: 7 },
    { naziv: "Slikarstvo", stepen: 4 },
    { naziv: "JavaScript", stepen: 6 },
    { naziv: "Matematika", stepen: 2 },
    { naziv: "Kuvarstvo", stepen: 10 },
  ],
  predstaviSe: function () {
    console.log("Cao ja sam Jovana");
    // Vraca undefined
  },
};
nizNovihUsera.push(noviUser);
noviUser = {
  ime: "Stefan",
  email: "stefan009@gmail.com",
  godiste: 1979,
  admin: true,
  interesovanja: [
    { naziv: "Skijanje", stepen: 9 },
    { naziv: "Plivanje", stepen: 7 },
    { naziv: "Trcanje", stepen: 10 },
    { naziv: "Filozofija", stepen: 3 },
  ],
  predstaviSe: function () {
    console.log("Cao ja sam Stefan");
    // Vraca undefined
  },
};
nizNovihUsera.push(noviUser);
noviUser = {
  ime: "Gorana",
  email: "gor@gmail.com",
  godiste: 1998,
  admin: false,
  interesovanja: [
    { naziv: "Sminkanje", stepen: 9 },
    { naziv: "Moda", stepen: 10 },
    { naziv: "Prirodne nauke", stepen: 3 },
    { naziv: "Sociologija", stepen: 0 },
  ],
  predstaviSe: function () {
    console.log("Cao ja sam Gorana");
    // Vraca undefined
  },
};
nizNovihUsera.push(noviUser);

console.clear();
console.log(nizNovihUsera);

for (var i in nizNovihUsera) {
  var mojUser = nizNovihUsera[i];
  console.log("I ", i, mojUser);
  if (mojUser.admin) {
    mojUser.predstaviSe();
  } else {
    var mojNizIntereseovanja = mojUser.interesovanja;
    for (var j in mojNizIntereseovanja) {
      var mojeInteresovanje = mojNizIntereseovanja[j];
      console.log("J ", j, mojeInteresovanje);
      if (mojeInteresovanje.naziv == "Matematika") {
        console.warn("Matematika me ne interesuje.");
        continue;
      }
      if (mojeInteresovanje.stepen > 5) {
        console.log(
          `${mojeInteresovanje.naziv}: stepen zainteresovanostvi = ${mojeInteresovanje.stepen}`
        );
      } else {
        console.log(
          `${mojeInteresovanje.naziv}: stepen zainteresovanostvi previse mali`
        );
      }
    }
  }
}

// console.clear();
var objekat = {
  ime: "Gavrilo",
  email: "g@gmail.com",
  godine: 22,
  kljuc: "My Key",
  1: "one",
};
for (var kljuc in objekat) {
  console.log(kljuc, ":", objekat[kljuc]);
}
