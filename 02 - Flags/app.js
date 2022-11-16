const regex1 = /the/g;
str = 'Please get The apple, the ball and the bat';

console.log(str.match(regex1));
console.log(str.search(regex1));
console.log(str.replace(regex1, "TEST"));

const regex2 = /the/i;
str = 'Please get The apple, the ball and the bat';

console.log(str.match(regex2));
console.log(str.search(regex2));
console.log(str.replace(regex2, "TEST"));

const regex3 = /the/gi;
str = 'Please get The apple, the ball and the bat';

console.log(str.match(regex3));
console.log(str.search(regex3));
console.log(str.replace(regex3, "TEST"));