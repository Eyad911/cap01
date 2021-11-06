let Animals = [
    "ant",
    "bat",
    "bear",
    "beaver",
    "bird",
    "bobcat",
    "camel",
    "cat",
    "catfish",
    "dog",
    "dolphin",
    "donkey",
    "fox",
    "frog",
    "goat",
    "gorilla",
    "hamster",
    "horse",
    "jellyfish",
    "tiger",
    "Turkey",
  ];


  const randomWord=()=> {
    return Animals[
      Math.floor(Math.random() * Animals.length)
    ];
  }
  
  export  { randomWord };
  