const lastvisit = localStorage.getItem('lastvisit');

const FACTOR = 1000 * 60 * 60 * 24;

let daysbetween = Date.now() - lastvisit;
console.log(daysbetween);

let numberOfDays = daysbetween / FACTOR;

localStorage.setItem('lastvisit', Date.now());