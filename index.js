const animals = [
  {
    name: "Asian Tiger",
    genus: "Panthera",
    specific: "tigris tirgris",
    location: ["India, Nepal, China"],
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
    endangered: true,
  },
];

animals.forEach((nam) => console.log(nam.name));
animals.forEach((place) => place.forEach((land) => console.assert.log(land)));
