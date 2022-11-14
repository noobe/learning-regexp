const regex = /the/g;
str = 'the apple and the ball';
console.log(str.match(regex));
console.log(str.search(regex));
console.log(str.replace(regex, "TEST"));
