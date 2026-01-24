const library = [
  {
    title: ' AnimalFarm',
    author: 'George Orwell',
    year: 1990,
    available: true,
  },
  {
    title: 'The old wives',
    author: 'Bennet',
    year: 1995,
    available: false,
  },
  {
    title: 'abc',
    author: 'Mehak',
    year: 1985,
    available: true,
  },
  {
    title: 'xyz',
    author: 'tanzeela',
    year: 1996,
    available: false,
  },
];
//add new book
library.push({
  title: 'The Silent Patient',
  author: 'Alex Michaelides',
  year: 2019,
  available: true,
});
console.log(library);
const availableBook = [];
for (let i = 0; i < library.length; i++) {
  if (library[i].available === true) {
    availableBook.push(library[i]);
  }
}
console.log(availableBook);
//TODO:
//FIXME:
