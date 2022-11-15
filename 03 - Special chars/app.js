const regex1 = /^Plea/;
str = 'Please get the apple and the ball';

console.log(str.match(regex1));
console.log(str.search(regex1));
console.log(str.replace(regex1, "TEST"));

const regex2 = /ball$/;
str = 'Please get the apple and the ball';

console.log(str.match(regex2));
console.log(str.search(regex2));
console.log(str.replace(regex2, "TEST"));

const regex3 = /^Please$/;
str = 'Please';

console.log(str.match(regex3));
console.log(str.search(regex3));
console.log(str.replace(regex3, "TEST"));