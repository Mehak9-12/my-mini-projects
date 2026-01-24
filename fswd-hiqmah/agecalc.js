const birthYear = [1990, 1991, 1992, 1993, 1999, 2000];
const ages = [];
for (let i = 0; i < birthYear.length; i++) {
  ages.push(2025 - birthYear[i]);
}
console.log(ages);
