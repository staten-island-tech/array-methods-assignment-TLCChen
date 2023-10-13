const animals = [
  {
    name: "Asian Tiger",
    genus: "Panthera",
    specific: "tigris tirgris",
    location: ["India", "Nepal", "China"],
    endangered: true,
  },

  {
    name: "Dhole",
    genus: "Cuon",
    specific: "alpinus",
    location: ["Central Asia", "South Asia", "East Asia", "Southeast Asia"],
    endangered: true,
  },

  {
    name: "Clouded Leopard",
    genus: "Neofelis",
    specific: "nebulosa",
    location: ["Northeast India", "Bhutan", "South China"],
    endangered: true,
  },
  {
    name: "African Crested Porcupine",
    genus: "Hystrix",
    specific: "cristata",
    location: ["Italy", "North Africa", "Sub-Saharan Africa"],
    endangered: false,
  },
];

/* animals.forEach((place) => {
  console.log(place.name, "lives in");
  place.location.forEach((land) => console.log(land));
});

const iAnimals = animals.filter((alive) => alive.name.includes("i"));
console.log(iAnimals); */

animals
  .filter((dead) => dead.endangered === false)
  .forEach((num) => num.location.forEach((call) => console.log(call)));

/* 
animals.forEach((nam) => console.log(nam.name));
animals.forEach((place) => {
  console.log(place.name);
  place.location.forEach((land) => console.log(land));
});
 */
/* animals.forEach((place) => {
  console.log(place.name, "lives in");
  place.location.forEach((land) => console.log(land));
});

const dead = animals.filter((num) => num.endangered === false);
console.log(dead);
 */
