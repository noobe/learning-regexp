const regex = /the/;
const str = "the apple and the ball";
console.log(regex.exec(str));
console.log(regex.test(str));
console.log(str.match(regex));
console.log(str.search(regex));
console.log(str.replace(regex, "TEST"));