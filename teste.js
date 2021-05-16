const options = [
   { "id": 6 },
   { "id": 5 },
   { "id": 7 },
   { "id": 8 }
];

const optionsPergunta = [];

while (options.length) {

   const index = Math.floor(Math.random() * options.length - 1);

   const [option] = options.splice(index, 1);

   optionsPergunta.push(option);
}

console.log(optionsPergunta);